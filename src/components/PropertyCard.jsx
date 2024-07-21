// import React from 'react';
import PropTypes from 'prop-types';
import "../Styles/PropertyCard.css";
import bed from "../assets/bedIcon.svg";
import toilet from "../assets/toiletIcon.svg";

const PropertyCard = ({ properties }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={properties.image} className="card-img-top" alt={properties.title} />
        <div className="card-body">
          <h5 className="card-title">{properties.title}</h5>
          <p className="card-text">{properties.location}</p>
          <p className="card-text">{properties.price}</p>
          <p className="card-text">{properties.description}</p>
          <div className='d-flex justify-content-between'>
            <div className='d-flex align-items-center'>
              <img src={bed} alt="" className="icon" />
              <p className="card-text mb-0 ml-2">{properties.bedrooms} bedrooms</p>
            </div>
            <div className='d-flex align-items-center'>
              <img src={toilet} alt="" className="icon" />
              <p className="card-text mb-0 ml-2">{properties.toilets} toilets</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PropertyCard.propTypes = {
  properties: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    bedrooms: PropTypes.number.isRequired,
    toilets: PropTypes.number.isRequired,
  }).isRequired,
};

export default PropertyCard;
