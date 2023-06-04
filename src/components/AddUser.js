import React, { useState } from "react";
import { addUser } from "../Service/api";
import{useNavigate} from 'react-router-dom'

const AddUser = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;
  const navigate = useNavigate()

  const handleChange =(e)=>{
    let newUser = {...user}
    newUser[e.target.name] = e.target.value
    setUser(newUser)
  }
  const clearForm = ()=>{
    setUser({
      email:"",
      password:""
    })
  }

  const handleSubmit =async()=>{
    // console.log(user)
     await addUser(user)
    clearForm()
    navigate('/all')
  }

  return (
    <>
      <div className="container">
        <div className="box">
          <div className="py-3 text-center">
            <h4>Add User Details </h4>
          </div>
          <form>
            <div className="mb-3">
              <label htmlFor="emailFiled"> Email</label>
              <input
                type="email"
                name="email"
                id="emailFiled"
                value={email}
                className="form-control"
                onChange={(e)=>handleChange(e)}
                placeholder="name@gmail.com"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="passwordFiled"> Password</label>
              <input
                type="password"
                name="password"
                id="passwordFiled"
                value={password}
                className="form-control"
                onChange={(e)=>handleChange(e)}
                placeholder="password"
              />
            </div>
            <div className="mb-3 text-center pt-3">
              <button type="button"className="btn btn-primary px-5 " onClick={handleSubmit}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddUser;
