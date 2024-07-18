import React, { useState, useContext } from "react";
import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import signIn from "../../Apis/auth/signIn";

const SignIn = () => {
  let navigate = useNavigate();

  const [crediential, setcrediential] = useState({
    aadharCardNumber: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setcrediential({ ...crediential, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(crediential).then((res) => {
      console.log(res.token);
      localStorage.setItem("token", res.token);
      navigate("/");
    });
    setcrediential({
      aadharCardNumber: "",
      password: "",
    });
  };

  return (
    <>
      <div class="container">
        <div
          class="row justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <div class="col-md-4">
            <div class="card card-login p-4">
              <h5 class="card-title card-title-login mb-4">Login</h5>
              <form onSubmit={handleSubmit}>
                <div class="mb-3">
                  <label for="email" class="form-label">
                    Aadhar Number
                  </label>
                  <input
                    type="number"
                    name="aadharCardNumber"
                    class="form-control form-control-login"
                    id="email"
                    placeholder="Aadhar Number"
                    value={crediential.aadharCardNumber}
                    onChange={handleOnChange}
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    class="form-control form-control-login"
                    id="password"
                    placeholder="Password"
                    value={crediential.password}
                    onChange={handleOnChange}
                    required
                  />
                </div>
                <button type="submit" class="btn btn-primary btn-primary-login">
                  Login
                </button>
              </form>

              <div class="register-link register-link-login mt-3">
                <p>
                  Not a member? <Link to="/signup">Register</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
