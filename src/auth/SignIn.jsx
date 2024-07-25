import React from 'react'
import { Link } from 'react-router-dom';
import "../Styles/signIn.css";
import side_img from "../assets/auth_back.svg";
import logo from "../assets/logo (2).svg";
import or from "../assets/or_Img.svg";

const SingIn = () => {
  return (
    <>
    <div className="container-fluid">
      <div className="row vh-100">
        <div className="col-lg-6 d-flex align-items-center justify-content-center">
          <form className="p-4 border rounded shadow w-100" >
            <h3 className="mb-3">Welcome Back to BetaHouse!</h3>
            <p>Lets get started by filling out the information below</p>
            <div className="form-group mb-3">
              <label>Email</label>
              <input type="email" className="form-control" required />
            </div>
            <div className="form-group mb-3">
              <label>Password</label>
              <input type="password" className="form-control" required />
            </div>
            <div className="form-check mb-3 d-flex gap-5" id='form-check'>
              <div>
              <input type="checkbox" className="form-check-input" id="terms" required />
              <label className="form-check-label" htmlFor="terms">
               Remember me
              </label>
              </div>
              <div>
                <Link id='forgot'>Forgot password</Link>
              </div>
            </div>
            <button type="" className="btn btn-success btn-block mb-3 w-100">Sign Up</button>
            <div className="text-center mb-3">
              <img src={or} alt="or" className="img-fluid" />
            </div>
            <div className="text-center">
              <button type="button" className="btn btn-outline-secondary btn-block mb-3 d-flex align-items-center justify-content-center w-100">
                <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" className="me-2" /> Continue with Google
              </button>
            </div>
            <div className="d-flex justify-content-center gap-2">
              <p>New user?</p>
              <Link to="/">Sign Up</Link>
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
    </>
  )
}

export default SingIn