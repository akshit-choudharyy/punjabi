import React, { useState } from 'react';
import v1 from "../assets/main3.mp4";
import Fooddata from "../components/data";
import swiggy from "../assets/s.png";
import zomato from "../assets/z.logomain.png";

function Menu() {
  const [menu, setMenu] = useState(Fooddata);

  const filterItems = (curitems) => {
    if (curitems === "All") {
      setMenu(Fooddata);
    } else {
      const updatedItems = Fooddata.filter((cur) => cur.category === curitems);
      setMenu(updatedItems);
    }
  };

  const categoryColors = {
    "Soups": "bg-red-700",
    "Chinese Starters(Veg)": "bg-red-700",
    "Chinese Starters(NonVeg)": "bg-red-700",
    "Noodles and Rice Veg": "bg-red-700",
    "Momos": "bg-red-700",
    "Chopsuey": "bg-red-700",
    "MainCourse(Veg)": "bg-red-700",
    "MainCourse(NonVeg)": "bg-red-700",
    "Combo(Veg)": "bg-red-700",
    "Veg Thali Combo": "bg-red-700",
    "NonVeg Thali Combo": "bg-red-700",
    "All": "bg-red-700"
  };

  return (
    <div className="pb-8"> {/* Added margin bottom here */}
      {/* Menu banner */}
      <div className="relative w-full">
        <video autoPlay loop muted className="absolute inset-0 object-cover w-full h-full z-0">
          <source src={v1} type="video/mp4" />
        </video>
        <div className="relative z-10 h-screen flex justify-center items-center">
          <div className="max-w-screen-2xl w-full xl:px-20 px-4 mx-auto flex flex-col py-12 md:py-24 items-center gap-8 relative">
            <div className="w-full space-y-7 px-4 text-center flex flex-col items-center">
            <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug text-white">
              Discover the rich flavours of China
              <span className="text-yellow px-2"></span>
            </h2>
            <p className="text-base md:text-xl text-white">
             where traditional recips meet mordern culinary 
            </p>
            <a href="https://www.zomato.com/ncr/spize-of-china-rohini-new-delhi/order">
            <button className="bg-yellow px-8 py-3 font-semibold text-white rounded-full bg-red-700 hover:bg-black">
                Order Now
              </button>
            </a>

            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="section-container btn-container flex items-center justify-center mt-6"> {/* Adjusted margin top here */}
        <div className="flex flex-wrap justify-center items-center gap-4 p-4 w-full">
          {Object.keys(categoryColors).map((category) => (
            <button
              key={category}
              className={`btn text-center text-white ${categoryColors[category]}`}
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Food Items Section */}
      <div className="mt-3 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 section-container">
          {menu.map((el, index) => (
            <div
              key={index}
              className="card card-compact w-full max-w-sm bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <figure className="h-48">
                <img src={el.imgdata} alt="Food" className="h-full w-full object-cover" />
              </figure>
              <div className="card-body">
                <div className="flex justify-between items-center">
                  <h2 className="card-title text-lg font-semibold">{el.rname}</h2>
                  <span className="bg-red-700 text-white rounded px-2 py-1 text-sm">{el.price}</span> {/* Display price instead of rating */}
                </div>
                <div className="lower_data my-2">
                  {/* <h5 className="text-gray-500">North India, Biryani, Mughlai</h5> */}
                </div>
                <div className="border-b-2 mb-2"></div>
                <div className="lower_data">
                  <p className="text-sm text-gray-600">order now</p>
                </div>
                <div className="flex justify-start items-center mt-4"> {/* Adjusted flex container */}
                  <a href="https://www.swiggy.com/restaurants/spize-of-china-dr-sushila-naiyar-marg-indirapuram-noida-1-876325"><img src={swiggy} alt="Swiggy" className="h-20 w-auto" /></a> {/* Increased size of Swiggy logo */}
                  <a href="https://www.zomato.com/ncr/spize-of-china-rohini-new-delhi/order"><img src={zomato} alt="Zomato" className="h-12 w-auto ml-4" /></a> {/* Adjusted margin for Zomato logo */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
