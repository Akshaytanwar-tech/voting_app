import React, { useState } from "react";
import "./changepassword.css";
import changePassword from "../../Apis/auth/changePassword";
const ChangePassword = () => {
  const [crediantial, setCrediantial] = useState({
    currentPassword: "",
    newPassword: "",
  });
  const HandleOnchange = (e) => {
    setCrediantial({ ...crediantial, [e.target.name]: e.target.value });
  };
  const HandleOnsubmit = (e) => {
    e.preventDefault();
    changePassword(crediantial);
  };
  return (
    <div
      className="mt-5"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div class="form-container">
        <form onSubmit={HandleOnsubmit}>
          <div class="mb-3">
            <label for="currentPassword" class="form-label">
              Current Password
            </label>
            <input
              name="currentPassword"
              type="password"
              class="form-control"
              id="currentPassword"
              onChange={HandleOnchange}
              required
            />
          </div>
          <div class="mb-3">
            <label for="newPassword" class="form-label">
              New Password
            </label>
            <input
              name="newPassword"
              type="password"
              class="form-control"
              id="newPassword"
              onChange={HandleOnchange}
              required
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
