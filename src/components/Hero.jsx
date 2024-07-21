import "../Styles/hero.css";
import FilterSection from "./FilterSection";

const HeroSection = () => {
  return (
    <div className="hero-section text-center text-white d-flex align-items-center justify-content-center">
      <div>
        <h1>Browse Our Properties</h1>
        <p>
          Find your perfect home among our curated properties. Start browsing
          now!
        </p>
        <FilterSection/>
      </div>
    </div>
  );
};

export default HeroSection;
