import React from 'react';
import psychiatryImage from './images/Psychiatry.png'; // Import your PNG image

const Treatment2 = () => {
  return (
    <div className="banner-container">
      {/* Use the image directly */}
      <div className="banner">
        <img src={psychiatryImage} alt="Psychiatry Banner" style={{ width: '100%', height: 'auto' }} />
        {/* You can add content or text inside the banner if needed */}
      </div>
    </div>
  );
};

export default Treatment2;
