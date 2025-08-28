import React from "react";
import useCart from "../hooks/useCart";

function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl mb-6">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-400">Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center bg-gray-800 p-4 rounded mb-4">
              <div>
                <h3 className="text-lg">{item.title}</h3>
                <p className="text-gray-400">₹{item.price} x {item.qty}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-4 flex justify-between items-center">
            <h3 className="text-xl font-bold">Total: ₹{total}</h3>
            <button
              onClick={clearCart}
              className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded text-white"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
