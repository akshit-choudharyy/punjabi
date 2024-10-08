import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/CartSlice';

const FoodCard = ({ title, image, description, price }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ title, image, price }));
  };

  return (
    <div className="card bg-blue-100 w-96 shadow-xl m-8 rounded-xl">
      <figure className="flex justify-center">
        <img src={image} alt={title} className="w-full h-[250px] object-cover" />
      </figure>
      <div className="card-body p-6">
        <h2 className="card-title mb-2">{title}</h2>
        <p className="mb-4">{description}</p>
        <div className="card-actions flex justify-between items-center">
          <div className="text-2xl font-bold text-black">₹{price}</div>
          <div className="flex space-x-4">
            <button className="btn btn-primary" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className="btn btn-secondary" onClick={() => alert('Buying Now!')}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


const FoodContainer = ({ onAddToCart }) => {
  const dispatch = useDispatch();
  const foodItems = [
    {
      title: 'Ice-Cream',
      image: 'https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Indulge in a creamy, chilled delight to satisfy your sweet cravings.',
      price: 150,
    },
    {
      title: 'Tandoori Chai',
      image: 'https://www.yumcurry.com/wp-content/uploads/2018/11/IMG_9737-copy.jpg',
      description: ' Enjoy the unique smoky flavor of tea brewed in clay pots.',
      price: 250,
    },
  
    {
      title: 'Chaap',
      image: 'https://images.marico.in/1200x0/uploads/afgani-chaap-1-3543.jpg',
      description: 'Savor the smoky and spicy taste of tender grilled chaap.',
      price: 150,
    },
    {
      title: 'Chinese Noodles',
      image: 'https://images.pexels.com/photos/24186431/pexels-photo-24186431/free-photo-of-close-up-of-a-bowl-of-soup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Dive into the world of flavorful and savory Chinese delights.',
      price: 150,
    },
    {
      title: 'Tandoori Paratha',
      image: 'https://i.ytimg.com/vi/hYPP53DqfKg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBpIEUTXMjQ20OUoFHvqvmEgyNu3Q',
      description: ' Enjoy soft, freshly baked parathas straight from the tandoor',
      price: 150,
    },
    {
      title: 'Chur Chur Naan',
      image: 'https://www.chefkunalkapur.com/wp-content/uploads/2021/03/Amritsari_Kulcha_2.jpeg?v=1620291984',
      description: 'Crispy and stuffed naan, perfect with rich curries.',
      price: 150,
    },
    {
      title: 'Amritsari Chole kulche',
      image: 'https://content.jdmagicbox.com/comp/def_content/chole-kulche-outlets/67ec70d1ff-chole-kulche-outlets-2-ozfgy.jpg',
      description: 'Authentic Amritsari chole served with fluffy kulchas.',
      price: 150,
    },
    {
      title: 'Rajma Chawal',
      image: 'https://www.secondrecipe.com/wp-content/uploads/2017/08/rajma-chawal-1.jpg',
      description: 'Classic comfort food made with creamy red beans and rice.',
      price: 150,
    },
    {
      title: 'Chole Chawal',
      image: 'https://sattvakitchen.com/wp-content/uploads/2024/05/CHOLE-CHAWAL-iStock-1917310235.jpg',
      description: 'A wholesome meal of spicy chickpeas served with steamed rice',
      price: 150,
    },
    {
      title: 'Kadhi Chawal',
      image: 'https://5.imimg.com/data5/QL/IT/NH/ANDROID-105679371/product-jpeg.jpg',
      description: 'Tangy yogurt curry with rice for a homely, comforting experience.',
      price: 150,
    },
    {
      title: 'Eggs-[Protien Counter]',
      image: 'https://www.simplyrecipes.com/thmb/zsQvDavpqD2PtIO-7W6nBWVHCe4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Hard-Boiled-Eggs-LEAD-03-42506773297f4a15920c46628d534d67.jpg',
      description: 'Get your protein fix with our fresh and nutritious egg dishes.',
      price: 150,
    },
    {
      title: 'Maggie',
      image: 'https://www.temptingtreat.com/wp-content/uploads/2021/07/DSC_0936.jpg',
      description: ': A quick and flavorful treat to curb your hunger.',
      price: 150,
    },
    {
      title: 'Popcorn Tub',
      image: 'https://www.allrecipes.com/thmb/Q1qbaxGu71eF3tKyJ0wtmJfORRw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/87305-microwave-popcorn-DDMFS-4x3-b4700cc9b5e440fd9d11eb0bdaf1395f.jpg',
      description: 'Grab a tub of buttery popcorn for the perfect snack time.',
      price: 150,
    },
    {
      title: 'Mix Pakoda',
      image: 'https://manjulaskitchen.com/wp-content/uploads/mixed_vegetable_pakoras.jpg',
      description: 'Crispy, deep-fried fritters perfect for an evening snack.',
      price: 150,
    },
    {
      title: 'Samosa',
      image: 'https://zestysouthindiankitchen.com/wp-content/uploads/2021/05/Facebook-Post_-Samosa-1-500x375.jpg',
      description: '',
      price: 150,
    },
    {
      title: 'Litti Chokha',
      image: 'https://www.chefkunalkapur.com/wp-content/uploads/2023/03/DSC09365-1300x731.jpg?v=1678946009',
      description: 'Authentic Bihari dish made with roasted flour balls and spicy mashed veggies',
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
    
  ];
      const handleAddToCart = (item) => {
        // Dispatch the add to cart action
        dispatch(addToCart(item)); // You can also pass the quantity if needed
        onAddToCart(item); // Call the prop function to show the toast notification
      };


  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
  {foodItems.map((item) => (
    <div key={item.id} className="p-4 bg-blue-100 shadow-md rounded-lg">
      <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-lg" />
      <h2 className="text-xl font-bold mt-2">{item.title}</h2>
      <p className="mt-1 text-gray-700">{item.description}</p> {/* Add this line for description */}
      <p className="mt-1">Price: ₹{item.price}</p>
      <button
        className="btn btn-primary mt-4"
        onClick={() => handleAddToCart(item)}
      >
        Add to Cart
      </button>
    </div>
  ))}
</div>

  );
};

export default FoodContainer;
