import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/CartSlice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch(removeFromCart(item));
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold text-center mb-12">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-xl">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 m-2"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[200px] object-cover rounded-lg"
              />
              <h2 className="text-2xl font-bold mt-2">{item.title}</h2>
              <p className="text-xl mt-1">Price: ₹{item.price}</p>
              <p className="mt-1">Quantity: {item.quantity}</p>
              <p className="mt-1 font-bold">
                Subtotal: ₹{item.price * item.quantity}
              </p>
              <button
                className="btn btn-danger mt-4"
                onClick={() => handleRemove(item)}
              >
                Remove from Cart
              </button>
            </div>
          ))}
          <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 bg-white shadow-md rounded-lg p-4 m-2">
            <h2 className="text-2xl font-bold">Total Amount: ₹{totalAmount}</h2>
            <button className="btn btn-primary w-full mt-4">
              Proceed to Payment
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
