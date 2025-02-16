import React from "react";
import PropTypes from "prop-types"; 

const SearchBar = ({ placeholder, iconLeft, iconRight, iconRightTwo, size, style }) => {
  return (
    <div
      className={`flex items-center border rounded-full p-2 bg-white ${style}`}
      style={{ width: size || "400px" }}
    >
     
      {iconLeft && (
        <div className="mr-3">
          <img src={iconLeft} alt="Left Icon" className="w-6 h-6" />
        </div>
      )}

      
      <input
        type="text"
        placeholder={placeholder || "Search..."}
        className="w-full p-2 text-black focus:outline-none rounded-full"
      />

      
      {iconRight && (
        <div className="ml-3">
          <img src={iconRight} alt="Right Icon" className="w-6 h-6" />
        </div>
      )}

      
      {iconRightTwo && (
        <div className="ml-3">
          <img src={iconRightTwo} alt="Right Icon Two" className="w-6 h-6" />
        </div>
      )}
    </div>
  );
};


SearchBar.propTypes = {
  placeholder: PropTypes.string, 
  iconLeft: PropTypes.string,    
  iconRight: PropTypes.string,   
  iconRightTwo: PropTypes.string, 
  size: PropTypes.string,        
  style: PropTypes.string,       
};

export default SearchBar;
