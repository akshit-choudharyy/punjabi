import React from 'react';

const CounterCard = ({ title, image, description }) => {
  return (
    <div className="card bg-base-100 w-[500px] h-[424px] shadow-xl m-4 carousel-item">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
      <figure>
        <img src={image} alt={title} className="object-cover h-68 w-full" />
      </figure>
    </div>
  );
};

const Counters = () => {
  const foodItems = [
    {
      category: '𝓒𝓸𝓾𝓷𝓽𝓮𝓻𝓼 𝓘𝓷 𝓣𝓱𝓮 𝓗𝓸𝓾𝓼𝓮',
    },
    {
      title: 'Shake Studio',
      image: 'https://content.jdmagicbox.com/comp/def_content/milkshake-shops/n9gind1cxo-milkshake-shops-3-m4rtq.jpg',
      description: 'Indulge in creamy, handcrafted shakes with a variety of flavors.',
    },
    {
      title: 'Barbeque',
      image: 'https://img.etimg.com/thumb/width-1200,height-900,imgsize-567550,resizemode-75,msid-108622908/top-trending-products/kitchen-dining/outdoor/best-barbeque-grills-under-1000.jpg',
      description: 'Savor smoky, grilled delights straight off the barbeque.',
    },
    {
      title: 'Paan Corner',
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/is1kxeiitqio2axsoule',
      description: 'Experience the authentic taste of traditional paan, crafted to perfection.',
    },
    {
      title: 'Pizza Counter',
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
      description: 'Enjoy delicious cheesy pizzas topped with fresh ingredients',
    },
  ];

  return (
    <div className="container mx-auto mt-8">
      {foodItems.map((food, index) => {
        if (food.category) {
          return (
            <div key={index} className="w-full text-center my-8">
              <h1 className="text-5xl font-extrabold tracking-wider text-shadow-xl">{food.category}</h1>
            </div>
          );
        }
        return null; // Avoid returning undefined for non-category items
      })}

      <div className="carousel w-full">
        {foodItems
          .filter(food => food.title) // Filter out category item
          .map((food, index) => (
            <CounterCard
              key={index}
              title={food.title}
              image={food.image}
              description={food.description}
            />
          ))}
      </div>
      
     
    </div>
  );
};

export default Counters;
