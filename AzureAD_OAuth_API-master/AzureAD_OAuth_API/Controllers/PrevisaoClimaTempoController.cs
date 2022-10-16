using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Identity.Web.Resource;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AzureAD_OAuth_API.Controllers
{
    [Authorize]
    //[RequiredScope(RequiredScopesConfigurationKey = "AzureAd:scopes")]
    [ApiController]
    [Route("[controller]")]
    public class PrevisaoClimaTempoController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<PrevisaoClimaTempoController> _logger;

        public PrevisaoClimaTempoController(ILogger<PrevisaoClimaTempoController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
           var rng = new Random();
            var resultList = Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();

            List<string> result = new List<string>();
            var user = User; 
            string userinfo = string.Concat(
                " Usuario: ", user.Identity.Name
                , " Nome : ", User.FindFirst("Name").Value ?? "NoIdentity"
              
                ); 
            result.Add(userinfo);

            foreach (var item in resultList)
            {
                var descricao = string.Concat(" Data: ", item.Date.ToShortDateString(), " Temperatura: ", item.TemperatureC, " Clima: ", item.Summary);                 
                result.Add(descricao);
            } 
            return Ok(result.ToArray());
        }

        [HttpGet]
        [Route("/User")]
        //[Authorize(Roles = AccessAsUserRole)]  
        public string GetUser()
        {
            return User.FindFirst("Name").Value ?? "NoIdentity";
        } 
    }
}
