import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const HandleLogOut = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container">
          <Link class="navbar-brand bg-dark px-2" to="/">
            PRO VOTE
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <Link
              className="px-2 text-light text-decoration-none"
              to="/dashboard"
            >
              Admin Dashboard
            </Link>
            {!localStorage.getItem("token") ? (
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link class="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/signup">
                    Signup
                  </Link>
                </li>
              </ul>
            ) : (
              <div className="px-2">
                <Link
                  to="/profile"
                  className="px-2 text-light text-decoration-none"
                  style={{ cursor: "pointer" }}
                >
                  My Profile
                </Link>
                <button className="btn text-light" onClick={HandleLogOut}>Log out</button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
