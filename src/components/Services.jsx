import React from 'react';
import { FaUserTie, FaBriefcase, FaLaptopCode, FaChalkboardTeacher, FaChartLine, FaTools } from 'react-icons/fa';
import res from "../assets/pl.jpg";

function Services() {
  const icons = [
    FaUserTie, 
    FaBriefcase, 
    FaLaptopCode, 
    FaChalkboardTeacher, 
    FaChartLine, 
    FaTools
  ];
  
  return (
    <div className='w-full'>
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8"> {/* Reduced py-16 to py-8 */}
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative z-10 lg:py-8"> {/* Reduced lg:py-16 to lg:py-8 */}
              <div className="relative h-40 sm:h-64 lg:h-80"> {/* Reduced h-64 to h-40, sm:h-80 to sm:h-64 */}
                <img
                  alt=""
                  src={res}
                  className="absolute inset-0 h-full w-full object-cover rounded-lg" 
                />
              </div>
            </div>

            <div className="relative flex items-center bg-gray-100">
              <span
                className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
              ></span>

              <div className="p-6 sm:p-8 lg:p-12"> {/* Reduced p-8 to p-6, sm:p-16 to sm:p-8, lg:p-24 to lg:p-12 */}
                <h2 className="text-xl font-bold sm:text-2xl lg:text-3xl"> {/* Reduced text-2xl to text-xl, sm:text-3xl to lg:text-3xl */}
                  Order Now
                </h2>

                <p className="mt-4 text-sm text-gray-600"> {/* Reduced text-gray-600 */}
                  Experience the authentic flavors of China at Spize of China. We bring you a culinary journey through the 
                  diverse and rich traditions of Chinese cuisine. From spicy dishes like hot garlic noodles to 
                  delicate flavors like chop suey, our menu is crafted to delight your taste buds with every bite.
                </p>

                <a
                  href="https://www.zomato.com/ncr/spize-of-china-rohini-new-delhi/order"
                  className="mt-6 inline-block rounded border border-red-700 bg-red-600 px-8 py-2 text-sm font-medium text-white hover:bg-red-600 hover:text-white focus:outline-none focus:ring active:text-indigo-500" 
                >
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
