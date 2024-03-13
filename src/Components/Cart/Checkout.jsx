import React from 'react';

// If you have header and footer components, import them as well
// import Header from './Header';
// import Footer from './Footer';

export default function OrderPlaced() {
  return (
    <>
      {/* Render Header Component Here if available */}
      {/* <Header /> */}
      
      <div id="orderContainer">
        <div id="check">
          <FontAwesomeIcon icon={faCheckCircle} size="2x" />
        </div>
        
        <div id="aboutCheck">
          <h1> Order Placed Successfully! </h1>
          <p> We've sent you an email with the Order details. </p>
        </div>
      </div>
      
      {/* Render Footer Component Here if available */}
      {/* <Footer /> */}
    </>
  );
}
