import React from "react";
import { Link } from "react-router-dom";

const DishCard = ({ dish, addToCart }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 flex flex-col items-center">
      <img
        src={dish.image}
        alt={dish.name}
        className="w-32 h-32 object-cover mb-4 rounded"
      />
      <h2 className="text-lg font-bold">{dish.name}</h2>
      <p className="text-gray-600 truncate">{dish.description}</p>
      <p className="text-xl font-semibold mt-2">{dish.price} ₽</p>
      <button
        onClick={() => addToCart(dish)}
        className="bg-green-500 text-white px-4 py-2 rounded mt-2"
      >
        В корзину
      </button>
      <Link
        to={`/catalog/${dish.id}`}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
      >
        Подробнее
      </Link>
    </div>
  );
};

export default DishCard;


