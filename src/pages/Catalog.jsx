import React from "react";
import DishCard from "../components/DishCard";

import buzza from "../images/buzza.jpg";
import greekSalad from "../images/greek-salad.jpg";
import pizza from "../images/pizza.jpg";
import burger from "../images/burger.jpg";
import tea from "../images/tea.jpg";
import orangeJuice from "../images/orange-juice.jpg";

const dishes = [
  { id: 1, name: "Буззы", price: 250, image: buzza, description: "Сочное мясо с овощами" },
  { id: 2, name: "Салат Греческий", price: 200, image: greekSalad, description: "Огурцы, помидоры, оливки, фета" },
  { id: 3, name: "Пицца", price: 400, image: pizza, description: "С сыром, томатами и пепперони" },
  { id: 4, name: "Бургер", price: 150, image: burger, description: "Классический бургер с говядиной" },
  { id: 5, name: "Чай", price: 50, image: tea, description: "Чай черный с лимоном" },
  { id: 6, name: "Сок апельсиновый", price: 120, image: orangeJuice, description: "Сок из свежих апельсинов" }
];

const Catalog = ({ addToCart }) => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Меню</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dishes.map((dish) => (
          <DishCard key={dish.id} dish={dish} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;

