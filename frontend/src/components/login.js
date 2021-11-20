import React from "react";
import {NavLink} from "react-router-dom";

function login() {
  return (
    <>
      <div className="card bg-light">
        <article className="card-body mx-auto">
          <h4 className="card-title mt-3 text-center">Log in into Account</h4>
          <p className="text-center">Get started with your account</p>
          <p>
            <NavLink to="" className="btn btn-block btn-twitter">
              {" "}
              <i className="fab fa-twitter"></i>   Login via Twitter
            </NavLink>
            <NavLink to="" className="btn btn-block btn-facebook">
              {" "}
              <i className="fab fa-facebook-f"></i>   Login via facebook
            </NavLink>
          </p>
          <p className="divider-text">
            <span className="bg-light">OR</span>
          </p>
          <form>
            {/* <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  {" "}
                  <i className="fa fa-user"></i>{" "}
                </span>
              </div>
              <input
                name=""
                className="form-control"
                placeholder="Full name"
                type="text"
              />
            </div> */}
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  {" "}
                  <i className="fa fa-envelope"></i>{" "}
                </span>
              </div>
              <input
                name=""
                className="form-control"
                placeholder="Email address"
                type="email"
              />
            </div>
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  {" "}
                  <i className="fa fa-phone"></i>{" "}
                </span>
              </div>
              <select className="custom-select">
                <option selected="">+91</option>
                <option value="1">+91</option>
                <option value="2">+91</option>
                <option value="3">+91</option>
              </select>
              <input
                name=""
                className="form-control"
                placeholder="Phone number"
                type="text"
              />
            </div>
            {/* <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  {" "}
                  <i className="fa fa-building"></i>{" "}
                </span>
              </div>
              <select className="form-control">
                <option selected=""> Select job type</option>
                <option>Admin</option>
                <option>Web Developer</option>
                <option>Product Analyst</option>
                <option>Manager</option>
              </select>
            </div> */}
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  {" "}
                  <i className="fa fa-lock"></i>{" "}
                </span>
              </div>
              <input
                className="form-control"
                placeholder="Create password"
                type="password"
              />
            </div>
            {/* <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  {" "}
                  <i className="fa fa-lock"></i>{" "}
                </span>
              </div>
              <input
                className="form-control"
                placeholder="Repeat password"
                type="password"
              />
            </div> */}
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block">
                {" "}Login{" "}
              </button>
            </div>
            <p className="text-center">Create an account? <NavLink to="/register">Register</NavLink>{" "}
            </p>
          </form>
        </article>
      </div>
    </>
  );
}

export default login;
