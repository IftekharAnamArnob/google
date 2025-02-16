import React from "react";
import PropTypes from "prop-types";

const AppShortcut = ({ image, size = "60px", url }) => {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer">
          <div
            className="relative flex items-center justify-center rounded-full bg-[#87CEEB] justify-center transition duration-300 ease-in-out 
                       before:absolute before:w-[140%] before:h-[140%] before:bg-[#87CEEB]/30 
                       before:opacity-0 hover:before:opacity-100 before:transition before:duration-300"
            style={{ width: size, height: size }}
          >
            <div
              className="flex items-center justify-center rounded-full bg-white"
              style={{ width: "70%", height: "70%" }}
            >
              <img src={image} alt="App Icon" className="w-3/4 h-3/4 object-contain" />
            </div>
          </div>
        </a>
      );
      
      
  };
  
AppShortcut.propTypes = {
  image: PropTypes.string.isRequired,
  size: PropTypes.string,
  url: PropTypes.string.isRequired,
};


export default AppShortcut;
