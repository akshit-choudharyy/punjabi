import React from 'react';

const FoodCard = ({ title, image, description, price }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl m-6 rounded-xl">
      <figure className="flex justify-center">
        <img src={image} alt={title} className="w-full h-[250px] object-cover" />
      </figure>
      <div className="card-body p-6">
        <h2 className="card-title mb-2">{title}</h2>
        <p className="mb-4">{description}</p>
        <div className="card-actions flex justify-between items-center">
          <div className="text-2xl font-bold text-black">₹{price}</div>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

const FoodContainer = () => {
  const foodItems = [
    {
      title: 'Burger',
      image: 'https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg',
      description: 'Juicy grilled burger with lettuce and tomatoes.',
      price: 150,
    },
    {
      title: 'Pizza',
      image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2018/05/paneer-pizza-recipe-1.jpg',
      description: 'Delicious cheese pizza with fresh toppings.',
      price: 250,
    },
    {
      title: 'Burger',
      image: 'https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg',
      description: 'Juicy grilled burger with lettuce and tomatoes.',
      price: 150,
    },
    {
      title: 'Pizza',
      image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2018/05/paneer-pizza-recipe-1.jpg',
      description: 'Delicious cheese pizza with fresh toppings.',
      price: 250,
    },
    {
      title: 'Burger',
      image: 'https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg',
      description: 'Juicy grilled burger with lettuce and tomatoes.',
      price: 150,
    },
    {
      title: 'Pizza',
      image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2018/05/paneer-pizza-recipe-1.jpg',
      description: 'Delicious cheese pizza with fresh toppings.',
      price: 250,
    },
    {
      title: 'Burger',
      image: 'https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg',
      description: 'Juicy grilled burger with lettuce and tomatoes.',
      price: 150,
    },
    {
      title: 'Pizza',
      image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2018/05/paneer-pizza-recipe-1.jpg',
      description: 'Delicious cheese pizza with fresh toppings.',
      price: 250,
    },
    {
      title: 'Burger',
      image: 'https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg',
      description: 'Juicy grilled burger with lettuce and tomatoes.',
      price: 150,
    },
    {
      title: 'Pizza',
      image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2018/05/paneer-pizza-recipe-1.jpg',
      description: 'Delicious cheese pizza with fresh toppings.',
      price: 250,
    },
    // Additional food items...
  ];

  return (
    <div className="container mx-auto flex flex-wrap justify-center mt-8">
      {foodItems.map((food, index) => (
        <FoodCard
          key={index}
          title={food.title}
          image={food.image}
          description={food.description}
          price={food.price}
        />
      ))}
    </div>
  );
};

export default FoodContainer;
