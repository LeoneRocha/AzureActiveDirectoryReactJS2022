using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Identity.Web;
using Microsoft.OpenApi.Models;

namespace AzureAD_OAuth_API
{
    /*
    https://dnilvincent.com/blog/posts/reactjs-msal-with-aspnetcore-to-use-azure-ad-part1
    https://dnilvincent.com/blog/posts/reactjs-msal-with-aspnetcore-to-use-azure-ad-part2
    https://dnilvincent.com/blog/posts/reactjs-msal-with-aspnetcore-to-use-azure-ad-part3
     */
    //https://stackoverflow.com/questions/68972702/asp-net-core-custom-authentication-filter-for-azure-ad-token-validation
    public class Startup
    {
        private string _tenantId = string.Empty;
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
            _tenantId = Configuration["AzureAd:TenantId"];
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {  
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                  .AddMicrosoftIdentityWebApi(Configuration.GetSection("AzureAd")); //FUNCIONA SO COM ISSO 

            services.AddCors(options => options.AddPolicy("CorsPolicy", policy =>
            {
                policy.AllowAnyHeader().AllowAnyMethod().AllowCredentials().WithOrigins("http://localhost:3000");
            }));

            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "AzureAD_OAuth_API", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c =>
                {
                    c.SwaggerEndpoint("/swagger/v1/swagger.json", "AzureAD_OAuth_API v1");
                }
                );
            }
            app.UseHttpsRedirection();
            app.UseCors("CorsPolicy");
            app.UseRouting();
            app.UseAuthentication();
            app.UseAuthorization();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
