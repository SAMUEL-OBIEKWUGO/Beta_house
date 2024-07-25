import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/navbar.css';
import logo from '../assets/logo (2).svg';
import aisha from '../assets/Aisha.svg';
import AuthDropDown from '../auth/AuthDropDown';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

const Navbar = () => {
  const [authShow, setAuthShow] = useState(false);
  const [navbarCollapsed, setNavbarCollapsed] = useState(true);

  const toggleAuthDropdown = () => {
    setAuthShow(!authShow);
  };

  const handleNavbarToggle = () => {
    setNavbarCollapsed(!navbarCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container d-flex align-items-center">
        <Link className="navbar-brand" to="/home">
          <img src={logo} alt="BetaHouse Logo" className="logo-img" />
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded={!navbarCollapsed} 
          aria-label="Toggle navigation"
          onClick={handleNavbarToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse justify-content-center ${navbarCollapsed ? '' : 'show'}`} id="navbarNav">
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
          <div className="d-flex align-items-center" id="profile">
            <div className="nav-link d-flex align-items-center" role="button" onClick={toggleAuthDropdown}>
              <img src={aisha} alt="Profile" className="profile-img" />
              <div className="position-relative d-flex align-items-center">
                {authShow ? (
                  <div className="mb-3 text-secondary">
                    <IoIosArrowUp />
                  </div>
                ) : (
                  <div className="text-secondary mb-3">
                    <IoIosArrowDown />
                  </div>
                )}
                <div className="position-absolute top-100 end-0 mt-2">
                  {authShow && <AuthDropDown />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
