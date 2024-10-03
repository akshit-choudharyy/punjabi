import React from 'react';
import b1 from "../assets/BANNER_13.png";
import b2 from "../assets/2.png";

function Carousel() {
  return (
    <div className="relative w-full h-60 md:h-72 lg:h-[60vh] overflow-hidden">
      {/* Adjusted heights for different screen sizes */}
      <div className="carousel w-full h-full">
        <div id="slide1" className="carousel-item relative w-full h-full flex items-center justify-center">
          <img
            src={b1}
            className="max-h-full w-[90%] lg:max-w-full lg:h-full object-contain lg:object-cover"
            alt="Slide 1"
          />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
