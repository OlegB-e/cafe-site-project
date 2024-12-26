import React from "react";

const Cart = ({ cart, addToCart, removeFromCart, updateQuantity, clearCart }) => {
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Корзина</h1>
      {cart.length === 0 ? (
        <p>Ваша корзина пуста.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b py-2">
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p>{item.price} ₽</p>
              </div>
              <div className="flex items-center">
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded mx-2"
                  onClick={() => removeFromCart(item.id)}
                >
                  -
                </button>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  className="w-12 text-center"
                  min="1"
                />
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded mx-2"
                  onClick={() => addToCart(item)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
          <h2 className="text-xl font-bold mt-4">Итого: {totalPrice} ₽</h2>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded mt-4"
            onClick={clearCart}
          >
            Очистить корзину
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;


