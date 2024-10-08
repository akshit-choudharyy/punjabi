import React from 'react';
import Banner from '../../components/Banner.jsx';
import FoodContainer from '../../components/FoodCart.jsx';
import Counters from '../../components/Counters.jsx';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home() {
  const cartItems = useSelector((state) => state.cart.items);

  // Toast notification function
  const notify = (itemTitle) => {
    toast.success(`${itemTitle} is added to cart!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  };

  const handleAddToCart = (item) => {
    // Dispatch your add to cart action here
    // For example:
    // dispatch(addToCart(item));
    notify(item.title); // Call notify to show toast
  };

  return (
    <div className="relative">
      <Banner />
      <Counters />
      <br />
      <h1 className="text-4xl font-bold text-center mb-12 text-shadow-3xl">
        𝓞𝓾𝓻 𝓓𝓮𝓵𝓲𝓬𝓲𝓸𝓾𝓼 𝓕𝓸𝓸𝓭 𝓜𝓮𝓷𝓾
      </h1>
      <FoodContainer onAddToCart={handleAddToCart} /> {/* Pass the handler to FoodContainer */}

      {/* Floating Button with Item Count */}
      <Link to="/cart">
        <button className="btn btn-primary fixed bottom-4 right-4 rounded-full p-3 shadow-lg">
          Go to Cart ({cartItems.length})
        </button>
      </Link>

      <ToastContainer />
    </div>
  );
}

export default Home;
