import React from 'react';
import img1 from "../assets/i1.jpg";
import img2 from "../assets/i2.jpg";
import img3 from "../assets/n.jpg";
import img4 from "../assets/r.jpg";
import img5 from "../assets/s1.jpg";
import img6 from "../assets/s2.jpg";
import img7 from "../assets/s3.jpg";
import img8 from "../assets/m2.jpg";
import img9 from "../assets/m3.jpg";
import img10 from "../assets/c2.jpg";
import ch from "../assets/ch.jpg"
import ch2 from "../assets/ch2.jpg"
function Categories() {
  const categoryItems = [
    { id: 1, title: "Starters", image: img2, image2: img10, desc: "Savor our delicious Chinese starters, including crispy spring rolls, flavourful momos, and spicy szechuan chicken, perfect for any occasion." },
    { id: 2, title: "Soups", image: img7, image2: img5, desc: "Warm up with our soups: savory hot and sour, fresh vegetables , aromatic egg drop, and nourishing chicken corn, all freshly prepared." },
    { id: 3, title: "Noodles & Rice", image: img3, image2: img4, desc: "Indulge in our noodle and rice dishes: savory lo mein, spicy Szechuan noodles, fragant fried rice, and classsic chow mein." },
    { id: 4, title: "Chopsuey", image: ch, image2: ch2, desc: "A flavorful mix of tender meats, fresh vegetables and savory sauce, served with steamed rice." }
  ];

  return (
    <>
      <div className='max-w-screen-2xl xl:px-20 px-4 py-24 mx-auto text-center mt-[200px] md:mt-11'>
      
        <h2 className='title'>Popular Categories</h2>
      </div>
      {/* category cards */}
      <div className='flex flex-col sm:flex-row flex-wrap gap-12 justify-center items-center mt-2'>
        {categoryItems.map((item) => (
          <a key={item.id} href="#" className="group relative block w-full sm:w-[48%] lg:w-[22%]">
            <div className="relative h-[350px] sm:h-[450px]">
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0 transition-opacity duration-300"
              />
              {item.image2 && (
                <img
                  src={item.image2}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              )}
            </div>
            <div className="absolute inset-0 flex flex-col items-start justify-end p-6 bg-gradient-to-t from-black to-transparent">
              <h3 className="text-xl font-medium text-white">{item.title}</h3>
              <p className="mt-1.5 text-pretty text-xs text-white">
                {item.desc}
              </p>
              <a href="/menu">              <span className="mt-3 inline-block bg-red-700 px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                View Menu
              </span></a>

            </div>
          </a>
        ))}
      </div>
    </>
  );
}

export default Categories;
