import React, { useEffect, useState } from "react";
import { getUser,upDateUser } from "../Service/api";
import { useParams,useNavigate } from "react-router-dom";

const EditUser = () => {
  const [user, setUser] = useState({
    email:"",
    password:"",
  });
  const { email, password } = user;
  const { id } = useParams();
  const navigate =useNavigate()

  const handleChange = (e) => {
    let newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };

  const loadUserDetails = async () => {
    const res = await getUser(id);
    setUser(res.data[0])
    
  };

  
  useEffect(() => {
    loadUserDetails();
  }, []);

  const handleSubmit = async() => {
    await upDateUser(user,id)
    navigate("/all")
  };
  return (
    <>
      <div className="container">
        <div className="box">
          <div className="py-3 text-center">
            <h4>Edit User Details </h4>
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
                onChange={(e) => handleChange(e)}
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
                onChange={(e) => handleChange(e)}
                placeholder="password"
              />
            </div>
            <div className="mb-3 text-center pt-3">
              <button
                type="button"
                className="btn btn-primary px-5 "
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditUser;
