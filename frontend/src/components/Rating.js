import React from 'react';
import { FaRegStar, FaStarHalf, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Rating = ({ value, text, color }) => {
  return (
    <div className='rating'>
      <span>
        <i style={{ color }}>
          {value >= 1 ? (
            <FaStar />
          ) : value >= 0.5 ? (
            <FaStarHalf />
          ) : (
            <FaRegStar />
          )}
        </i>

        <i style={{ color }}>
          {' '}
          {value >= 2 ? (
            <FaStar />
          ) : value >= 1.5 ? (
            <FaStarHalf />
          ) : (
            <FaRegStar />
          )}
        </i>

        <i style={{ color }}>
          {' '}
          {value >= 3 ? (
            <FaStar />
          ) : value >= 2.5 ? (
            <FaStarHalf />
          ) : (
            <FaRegStar />
          )}
        </i>

        <i style={{ color }}>
          {' '}
          {value >= 4 ? (
            <FaStar />
          ) : value >= 3.5 ? (
            <FaStarHalf />
          ) : (
            <FaRegStar />
          )}
        </i>

        <i style={{ color }}>
          {' '}
          {value >= 5 ? (
            <FaStar />
          ) : value >= 4.5 ? (
            <FaStarHalf />
          ) : (
            <FaRegStar />
          )}
        </i>
      </span>

      <span>{text && text} </span>
    </div>
  );
};

Rating.defaultProps = {
  color: 'orange'
};

Rating.prototype = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string
};

export default Rating;
