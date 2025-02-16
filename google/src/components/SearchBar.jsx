import React from "react";
import PropTypes from "prop-types"; // Import PropTypes for validation

const SearchBar = ({ placeholder, iconLeft, iconRight, iconRightTwo, size, style }) => {
  return (
    <div
      className={`flex items-center border rounded-full p-2 bg-white ${style}`}
      style={{ width: size || "400px" }}
    >
      {/* Left Icon (Optional) */}
      {iconLeft && (
        <div className="mr-3">
          <img src={iconLeft} alt="Left Icon" className="w-6 h-6" />
        </div>
      )}

      {/* Search Input */}
      <input
        type="text"
        placeholder={placeholder || "Search..."}
        className="w-full p-2 text-black focus:outline-none rounded-full"
      />

      {/* Right Icon (Optional) */}
      {iconRight && (
        <div className="ml-3">
          <img src={iconRight} alt="Right Icon" className="w-6 h-6" />
        </div>
      )}

      {/* Right Icon Two (Optional) */}
      {iconRightTwo && (
        <div className="ml-3">
          <img src={iconRightTwo} alt="Right Icon Two" className="w-6 h-6" />
        </div>
      )}
    </div>
  );
};

// Prop validation using PropTypes
SearchBar.propTypes = {
  placeholder: PropTypes.string, // Expected type is a string
  iconLeft: PropTypes.string,    // Expected type is a string (image URL or path)
  iconRight: PropTypes.string,   // Expected type is a string (image URL or path)
  iconRightTwo: PropTypes.string, // Expected type is a string (image URL or path)
  size: PropTypes.string,        // Expected type is a string (for size, e.g., "400px")
  style: PropTypes.string,       // Expected type is a string (for additional custom styles)
};

export default SearchBar;
