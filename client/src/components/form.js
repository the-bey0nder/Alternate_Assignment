import React, { useState } from "react";
import axios from "axios";


//this is the first apporoach i tried taking the direct form values and storing those into database
const Form = () => {
  const [formData, setFormData] = useState({
    input1: "",
    input2: "",
    role1: "",
    jobtype1: "",
    input3: "",
    input4: "",
    role2: "",
    jobtype2: "",
  });
  const [load, setLoad] = useState(false);

  const handleData = (e) => {
    setFormData(() => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  };

  const fetchData = () => {
    const apiUrl = "http://localhost:4000/form/1";

    axios
      .get(apiUrl)
      .then((response) => {
        setFormData(response.data[0]);
        console.log(formData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    setLoad(true);
  };

  const saveData = () => {
    const apiUrl = "http://localhost:4000/form/1";

    axios
      .put(apiUrl, formData)
      .then((response) => {
        console.log("PUT request successful:", response.data);
      })
      .catch((error) => {
        console.error("Error making PUT request:", error);
      });

    setLoad(!load);
  };

  const roles = ["Developer", "Testing", "Admin", "Marketing"];
  return (
    <div>
      <div>
        <button type="button" onClick={fetchData}>
          Fetch Data
        </button>
        <button type="button" onClick={saveData}>
          Save data
        </button>
      </div>
      {load && (
        <div className="container">
          <form>
            <div className="firstBlock">
              <input
                type="text"
                name="input1"
                value={formData.input1}
                onChange={(e) => {
                  handleData(e);
                }}
              />
              <input
                type="text"
                name="input2"
                value={formData.input2}
                onChange={(e) => {
                  handleData(e);
                }}
              />
              <select
                name="role1"
                value={formData.role1}
                onChange={(e) => {
                  handleData(e);
                }}
              >
                {roles.map((item) => {
                  return <option key={item}>{item}</option>;
                })}
              </select>
              <input
                type="radio"
                value="parttime"
                checked={formData.jobtype1 === "parttime"}
                name="jobtype1"
                onChange={(e) => {
                  handleData(e);
                }}
              />{" "}
              parttime
              <input
                type="radio"
                value="fulltime"
                checked={formData.jobtype1 === "fulltime"}
                name="jobtype1"
                onChange={(e) => {
                  handleData(e);
                }}
              />{" "}
              fulltime
            </div>
            <div className="secondBlock">
              <input
                type="text"
                name="input3"
                value={formData.input3}
                onChange={(e) => {
                  handleData(e);
                }}
              />
              <input
                type="text"
                name="input4"
                value={formData.input4}
                onChange={(e) => {
                  handleData(e);
                }}
              />
              <select
                name="role2"
                value={formData.role2}
                onChange={(e) => {
                  handleData(e);
                }}
              >
                {roles.map((item) => {
                  return <option key={item}>{item}</option>;
                })}
              </select>
              <input
                type="radio"
                value="parttime"
                checked={formData.jobtype2 === "parttime"}
                name="jobtype2"
                onChange={(e) => {
                  handleData(e);
                }}
              />{" "}
              parttime
              <input
                type="radio"
                value="fulltime"
                checked={formData.jobtype2 === "fulltime"}
                name="jobtype2"
                onChange={(e) => {
                  handleData(e);
                }}
              />{" "}
              fulltime
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Form;
