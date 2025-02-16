import React from "react";
import PropTypes from "prop-types";

const AppShortcut = ({ image, size = "60px", url, label }) => {
    return (
        <div className="flex flex-col items-center">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <div
            className="relative flex items-center justify-center rounded-full bg-[#87CEEB] justify-center transition duration-300 ease-in-out 
                       before:absolute before:w-[180%] before:h-[180%] before:bg-[#87CEEB]/30 
                       before:opacity-0 hover:before:opacity-100 before:transition before:duration-300 before:top-[-20%]"
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
        {label && (
        <span className="mt-2 text-white text-sm text-center">{label}</span>
      )}
    </div>

      );
      
      
  };
  
AppShortcut.propTypes = {
  image: PropTypes.string.isRequired,
  size: PropTypes.string,
  url: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};


export default AppShortcut;
