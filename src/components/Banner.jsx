import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import main from "../assets/main3.mp4";

function Banner() {
  return (
    <div 
      className="hero bg-base-200 min-h-screen" 
      style={{ 
        backgroundImage: `url('https://images.pexels.com/photos/325703/pexels-photo-325703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.9,
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=600"
          className="max-w-sm rounded-lg shadow-2xl" 
        />
        <div>
          <h1 className="text-5xl font-bold text-gray-50">Punjabi Da Dhaba </h1>
          <p className="py-6 text-slate-50">
            Punjabi Ladhawa Restaurant offers a vibrant dining experience with authentic 
            Punjabi cuisine. Our menu features traditional dishes like butter chicken, 
            sarson da saag, and makki di roti, all made with fresh ingredients and aromatic spices.
            Enjoy a warm, welcoming atmosphere perfect for family gatherings and celebrations. 
            Visit us for a taste of Punjab!
          </p>
          <button className="btn btn-active bg-blue-400">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
