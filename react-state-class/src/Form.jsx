import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    fullname: "", // lowercase 'fullname'
    username: "",
    password:""
  });

  let handleInputChange = (event) => {
    let fieldName = event.target.name; 
    let newValue = event.target.value;
    setFormData((currData) => {
      return { ...currData, [fieldName]: newValue };
    });
  };

  let handleSubmit = (event) =>{
    event.preventDefault();
    console.log(formData)
    setFormData({
    fullname: "", 
    username: "",
    password:""
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullname">Full Name</label> <br />
          <input
            type="text"
            placeholder="Enter your Full Name"
            value={formData.fullname}
            onChange={handleInputChange}
            id="fullname"
            name="fullname" // this should match the key in the state
          />
        </div>

        <div>
          <label htmlFor="password">password</label> <br />
          <input
            type="text"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleInputChange}
            id="password"
            name="password" // this should match the key in the state
          />
        </div>

        <div>
          <label htmlFor="username">User Name</label> <br />
          <input
            type="text"
            placeholder="Enter your User Name"
            value={formData.username}
            onChange={handleInputChange}
            id="username"
            name="username"
          /> <br />
          <button>Submit</button> <br />
        </div>
      </form>
    </>
  );
}
