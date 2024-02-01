import React, { useState, useEffect } from 'react';
import navSearchIcon from '../../../public/search.svg';
import navCartIcon from '../../../public/cart.svg';

const Testing = () => {
  // Initialize state with the current window width
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  console.log(import.meta.env.VITE_BACKEND_URL)
  // Effect to add and remove the resize event listener
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures this effect runs only on mount and unmount

  return (
    <div>
      <h1>Testing SVG Import</h1>
      <div className="navbar">
        <div className="nav-left">Logo</div>
        <div className="nav-lol">Navbar Center</div>
            <button className="collectionsadd">Collections</button>
        <div className="nav-right">
          {isSmallScreen ? (
            <button className="search-icon">
              <img src={navSearchIcon} alt="search-logo" className="svg-icon w-8 h-8" />
            </button>
          ) : (
            <button className="search-text" onClick={() => console.log('Search clicked')}>
              SEARCH
            </button>
          )}
          <button className="cart-icon">
            <img src={navCartIcon} alt="CART" className="svg-icon w-8 h-8" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testing;
