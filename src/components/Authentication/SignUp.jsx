import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./auth.css";
import signUp from "../../Apis/auth/signUp";

const SignUp = () => {
  let navigate = useNavigate();

  const [crediential, setcrediential] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    mobile: "",
    age: "",
    aadharCardNumber: "",
  });

  // Function to handle the on change values of signup inputs.
  const onchange = (e) => {
    setcrediential({
      ...crediential,
      [e.target.name]: e.target.value,
    });
  };

  //function to handle the on submit of sign up
  const onsubmit = (e) => {
    e.preventDefault();
    signUp(crediential).then((res) => {
      localStorage.setItem("token", res.token);
      navigate("/");
    });
    setcrediential({
      name: "",
      email: "",
      password: "",
      address: "",
      mobile: "",
      age: "",
      aadharCardNumber: "",
    });
  };
  
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-md-6 offset-md-3">
            <div class="signup-form">
              <h2>Sign Up</h2>
              <form onSubmit={onsubmit}>
                <div class="mb-3">
                  <input
                    name="name"
                    type="text"
                    value={crediential.name}
                    class="form-control"
                    placeholder="Name"
                    onChange={onchange}
                    required
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="email"
                    name="email"
                    value={crediential.email}
                    class="form-control"
                    placeholder="Email"
                    onChange={onchange}
                    required
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="tel"
                    name="mobile"
                    class="form-control"
                    placeholder="Mobile Number"
                    value={crediential.mobile}
                    onChange={onchange}
                    required
                  />
                </div>
                <div class="mb-3">
                  <textarea
                    name="address"
                    type="text"
                    value={crediential.address}
                    class="form-control"
                    placeholder="Address"
                    onChange={onchange}
                    required
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="tel"
                    name="age"
                    class="form-control"
                    placeholder="Age"
                    value={crediential.age}
                    onChange={onchange}
                    required
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="tel"
                    name="aadharCardNumber"
                    class="form-control"
                    placeholder="Aadhar Number"
                    value={crediential.aadharCardNumber}
                    onChange={onchange}
                    required
                  />
                </div>
                {/* <div class="mb-3">
                  <input
                    type="file"
                    name="photo"
                    class="form-control"
                    id="photo"
                    onChange={onchange}
                    accept="image/*"
                  /> 
                </div> */}
                <div class="mb-3">
                  <input
                    type="password"
                    name="password"
                    class="form-control"
                    placeholder="Password"
                    value={crediential.password}
                    onChange={onchange}
                    required
                  />
                </div>
                <div class="text-center">
                  <button type="submit" class="btn btn-primary btn-block">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
