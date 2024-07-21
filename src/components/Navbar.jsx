// import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/navbar.css';
import logo from '../assets/logo (2).svg';
import aisha from '../assets/Aisha.svg';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container d-flex align-items-center">
        <Link className="navbar-brand" to="/home">
          <img src={logo} alt="BetaHouse Logo" className="logo-img" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Properties</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Contact Us</Link>
            </li>
          </ul>
          <div className="d-flex align-items-center" id='profile'>
            <Link className="nav-link d-flex align-items-center" to="#">
              <img src={aisha} alt="Profile" className="profile-img" />
              <span className="d-none d-lg-inline" id='profile-name'>Aisha Cucurella</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
