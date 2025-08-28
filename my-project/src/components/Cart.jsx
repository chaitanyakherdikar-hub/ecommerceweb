import React from "react";
import { useCart } from "../Context/CartContext";

function Cart() {
  const { cart, removeFromCart } = useCart();

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <section id="cart" className="py-12 px-6 bg-black text-white min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-400">
        Your Cart
      </h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-400">🛒 Your cart is empty</p>
      ) : (
        <div className="max-w-4xl mx-auto">
          <ul className="space-y-6">
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between bg-gray-900 p-4 rounded-lg shadow-md border border-gray-700"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-gray-400">₹{item.price}</p>
                  </div>
                </div>
                <button
  onClick={() => removeFromCart(item.id)}
  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition cursor-pointer"
>
  Remove
</button>

              </li>
            ))}
          </ul>

          <div className="mt-8 text-right">
            <h3 className="text-xl font-semibold">
              Total: <span className="text-blue-400">₹{totalPrice}</span>
            </h3>
            <button className="mt-4 px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition">
              Checkout
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Cart;
