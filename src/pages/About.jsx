import React from 'react';
import main from "../assets/v1.mp4";
import res from "../assets/pl1.jpg";
function About() {
  return (
    <>
      <div className="relative w-full h-screen">
        <video autoPlay loop muted className="absolute inset-0 object-cover w-full h-full z-0">
          <source src={main} type="video/mp4" />
        </video>
        <div className="relative z-10 h-full flex justify-center items-center">
          <div className="max-w-screen-2xl w-full xl:px-20 px-4 mx-auto flex flex-col items-center md:justify-center py-12 md:py-24 gap-8">
            <div className="w-full md:w-1/2 space-y-7 px-4 text-center flex flex-col items-center">
              <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug text-white">
                Discover the Punjabi Dhaba Dishes                <span className="text-yellow px-2"></span>
              </h2>
              <p className="text-base md:text-xl text-white">
                where traditional recips meet mordern culinary
              </p>
              {/* <a href="/menu" className='hover-bg-black'>              
              <button className="bg-yellow px-8 py-3 font-semibold text-white rounded-full bg-red-700 hover-bg-black">
                View Menu
              </button>
              </a> */}

            </div>
          </div>
        </div>
      </div>
      <div className='w-full about'>
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
                    Welcome to Punjabi Dhaba 
                  </h2>

                  <p className="mt-4 text-sm text-gray-600"> {/* Reduced text-gray-600 */}
                    We believe that food is more than just sustenance; it is an experience, a journey throught culture and tradition. Our
                    mission is to bring the authentic flavours of china to Delhi NCR, creating an unforgettable dining experience  for our guests.
                  </p>
                  <h2 className='"text-xl font-bold sm:text-2xl lg:text-2xl"'>Our Cuisine</h2>
                  
                  {/* <a
                    href="about"
                    className="mt-6 inline-block rounded border border-red-700 bg-red-600 px-8 py-2 text-sm font-medium text-white hover:bg-red-600 hover:text-white focus:outline-none focus:ring active:text-indigo-500"
                  >
                    Order Now
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
