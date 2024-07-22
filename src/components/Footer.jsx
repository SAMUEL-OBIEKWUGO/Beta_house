import "../Styles/footer.css";
import Logo from "../assets/logo (2).svg";
import { MdLocationOn } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="user-footer-wrapper">
      <div className="container user-footer">
        <div className="user-footer-about">
          <img className="white" src={Logo} alt="Logo img" />
          <p>
            Discover, rent, and find your ideal home hassle-free with BetaHouse.
            Take control of your rental journey today!
          </p>
          <p>
            <MdLocationOn /> 95 Tinubu Estate, Lekki, Lagos
          </p>
          <p>
            <IoIosCall /> +234 675 8935 675
          </p>
          <p>
            <IoMdMail /> support@rentbetahouse.com
          </p>
        </div>

        <div className="user-footer-list">
          <h3>Quick Links</h3>
          <Link to="#" className="text-white d-block mb-2">Home</Link>
          <Link to="#" className="text-white d-block mb-2">Properties</Link>
          <Link to="#" className="text-white d-block mb-2">Contact Us</Link>
          <Link to="#" className="text-white d-block mb-2">Book Now</Link>
        </div>

        <div className="user-footer-list">
          <h3>More</h3>
          <Link to="#" className="text-white d-block mb-2">Agents</Link>
          <Link to="#" className="text-white d-block mb-2">Affordable Houses</Link>
          <Link to="#" className="text-white d-block mb-2">FAQ's</Link>
        </div>

        <div className="user-footer-list">
          <h3>Popular Search</h3>
          <Link to="#" className="text-white d-block mb-2">Apartment for sale</Link>
          <Link to="#" className="text-white d-block mb-2">Apartment for rent</Link>
          <Link to="#" className="text-white d-block mb-2">3 bedroom flat</Link>
          <Link to="#" className="text-white d-block mb-2">Bungalow</Link>
        </div>
      </div>

      <div className="user-footer-policy">
        <p>&copy; {new Date().getFullYear()} Betahouse | Designed by Micheal.fig</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
