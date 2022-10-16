import axios from "axios";
import { useState } from "react";
import { GetTokenAcess } from "../configapp/GetTokenAcess";

export const Employee = function () {

  axios.defaults.baseURL = "https://localhost:44375/";

  const [employees, setEmployees] = useState([]);

  const getEmployees = async function () {

    const tokenAD = await GetTokenAcess();
    console.log(tokenAD);

    await axios
      .get("PrevisaoClimaTempo/")
      .then(function (response) {
        setEmployees(response.data);
      })
      .catch(function (error) {
        if (error.response.status === 403) {
          alert("Unauthorized: Your access is not allowed.");
        }
        if (error.response.status === 401) {
          alert("Unauthorized: Your access is not valid please singin again.");
        }
      });
  };

  const getTotalEmployees = function () {
    axios
      .get("employees/total-employees")
      .then(function (response) {
        alert(`The total employees: ${response.data}`);
      })
      .catch(function (error) {
        if (error.response.statusCode === 401) {
          alert("Unauthorized");
        }
      });
  };

  return (
    <div>
      <button className="button is-success" onClick={getEmployees}>
        Get Employees
      </button>
      <button className="button" onClick={getTotalEmployees}>
        Get Total Employees
      </button>
      <ol>
        {employees.map((d, index) => {
          return <li key={index}>{d}</li>;
        })}
      </ol>
    </div>
  );
};