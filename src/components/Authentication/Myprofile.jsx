import React, { useEffect, useState } from "react";
import "./profile.css";
import profile from "../../Apis/auth/profile";
import { Link } from "react-router-dom";

const Myprofile = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    profile().then((res) => {
      setUser(res);
    });
  }, []);

  return (
    <>
      <div class="container mt-5">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="card animated">
              <div class="card-header text-center">
                <h3>Your Details</h3>
              </div>
              <div class="card-body">
                <div class="user-info">
                  <i class="bi bi-person-circle"></i>
                  <p>
                    <strong>Name:</strong> {user.name}
                  </p>
                </div>
                <div class="user-info">
                  <i class="bi bi-envelope-fill"></i>
                  <p>
                    <strong>Email:</strong> {user.email}
                  </p>
                </div>
                <div class="user-info">
                  <i class="bi bi-credit-card-2-front"></i>
                  <p>
                    <strong>Aadhaar Number:</strong> {user.aadharCardNumber}
                  </p>
                </div>
                <div class="user-info">
                  <i class="bi bi-phone-fill"></i>
                  <p>
                    <strong>Mobile Number:</strong> {user.mobile}
                  </p>
                </div>
                <div class="user-info">
                  <i class="bi bi-calendar-date-fill"></i>
                  <p>
                    <strong>Age:</strong> {user.age}
                  </p>
                </div>
                <div class="user-info">
                  <i class="bi bi-geo-alt-fill"></i>
                  <p>
                    <strong>Address:</strong> {user.address}
                  </p>
                </div>
              </div>
              <div class="card-footer text-center">
                <Link to="/changepassword" class="btn btn-primary me-2">
                  Change passwords
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Myprofile;
