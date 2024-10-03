import React from 'react';
import s1 from "../assets/s3.jpg";
import n from "../assets/rc.jpg";
import logo from "../assets/logom.png";
import c1 from "../assets/c9.jpg";
import s from "../assets/s.png";
import z from "../assets/z.logomain.png";

function Contact() {
  return (
    <>
      <div className="relative w-full h-[50vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
        <div className="carousel w-full h-full">
          <div id="slide1" className="carousel-item relative w-full h-full">
            <img src={s1} className="w-full h-full object-cover" alt="Slide 1" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full h-full">
            <img src={n} className="w-full h-full object-cover" alt="Slide 2" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full h-full">
            <img src={s1} className="w-full h-full object-cover" alt="Slide 3" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full h-full">
            <img src={n} className="w-full h-full object-cover" alt="Slide 4" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-white mt-16 md:mt-20 lg:mt-24">
        <div className="lg:grid lg:min-h-[200px] lg:grid-cols-12">
          <section className="relative flex h-22 items-end bg-gray-900 lg:col-span-5 lg:h-[500px] xl:col-span-6">
            <img
              alt=""
              src={c1}
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />
          </section>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6 h-auto lg:h-[500px]">
            <div className="max-w-xl lg:max-w-3xl w-full">
              <div className="relative -mt-16 block lg:hidden">
              </div>

              <div>
                <div className=' flex items-center justify-center'>
                  <h1 className='text-5xl font-bold p-6'>Order Now</h1>
                </div>
                <div className='flex gap-4 items-center justify-center'>
                  <div className='w-[50%] overflow-hidden flex items-center justify-center'>
                    <a href="https://www.swiggy.com/restaurants/spize-of-china-dr-sushila-naiyar-marg-indirapuram-noida-1-876325">
                      <img src={s} alt="Swiggy" className='w-full h-50 object-contain' />
                    </a>
                  </div>
                  <div className='w-[50%]  overflow-hidden flex items-center justify-center'>
                    <a href="https://www.zomato.com/ncr/spize-of-china-rohini-new-delhi/order">
                      <img src={z} alt="Zomato" className='w-full h-48 object-contain mb-4' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
    </>
  );
}

export default Contact;
