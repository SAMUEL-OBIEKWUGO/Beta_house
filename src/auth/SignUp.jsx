import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/signUp.css";
import side_img from "../assets/auth_back.svg";
import logo from "../assets/logo (2).svg";
import or from "../assets/or_Img.svg";

function SignUp() {
  return (
    <div className="container-fluid">
      <div className="row vh-100">
        <div className="col-lg-6 d-flex align-items-center justify-content-center">
          <form className="p-4 border rounded shadow w-100">
            <h3 className="mb-3">Join our community of home seekers and explore the possibilities that await.</h3>
            <p>Let's get started by filling out the information below</p>
            <div className="d-flex justify-content-between">
              <div className="form-group mb-3 w-50 pe-2">
                <label>First Name</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="form-group mb-3 w-50 ps-2">
                <label>Last Name</label>
                <input type="text" className="form-control" required />
              </div>
            </div>
            <div className="form-group mb-3">
              <label>Email</label>
              <input type="email" className="form-control" required />
            </div>
            <div className="form-group mb-3">
              <label>Password</label>
              <input type="password" className="form-control" required />
            </div>
            <div className="form-group mb-3">
              <label>Confirm Password</label>
              <input type="password" className="form-control" required />
            </div>
            <div className="form-check mb-3">
              <input type="checkbox" className="form-check-input" id="terms" required />
              <label className="form-check-label" htmlFor="terms">
                I agree to the <span style={{ color: 'green' }}>Terms of service</span> and <span style={{ color: 'green' }}>Privacy Policy</span>
              </label>
            </div>
            <button type="submit" className="btn btn-success btn-block mb-3 w-100">Sign Up</button>
            <div className="text-center mb-3">
              <img src={or} alt="or" className="img-fluid" />
            </div>
            <div className="text-center">
              <button type="button" className="btn btn-outline-secondary btn-block mb-3 d-flex align-items-center justify-content-center w-100">
                <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" className="me-2" /> Continue with Google
              </button>
            </div>
            <div className="text-center">
              <Link to="/signIn">Already have an account? Sign in</Link>
            </div>
            <div className="text-center mt-3">
              <Link to="/home" className="btn btn-link">Continue without signing up</Link>
            </div>
          </form>
        </div>
        <div className="col-lg-6 d-none d-lg-block p-0 position-relative">
          <img src={side_img} alt="Sign Up" className="img-fluid vh-100" style={{ objectFit: 'cover' }} />
          <div className="position-absolute top-0 start-0 p-3">
            <img src={logo} alt="BetaHouse Logo" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
