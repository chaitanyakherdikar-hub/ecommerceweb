import React from "react";
import useCart from "../hooks/useCart";

function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between mb-2">
              <span>{item.title} (x{item.qty})</span>
              <span>₹{item.price * item.qty}</span>
              <button onClick={() => removeFromCart(item.id)} className="text-red-500 ml-4">
                Remove
              </button>
            </div>
          ))}
          <div className="mt-4 font-bold">Total: ₹{totalPrice}</div>
          <button onClick={clearCart} className="mt-2 bg-red-500 text-white px-4 py-2 rounded">
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
