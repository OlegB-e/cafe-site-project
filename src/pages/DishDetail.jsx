import React from "react";
import { useParams } from "react-router-dom";

const dishes = [
  { id: 1, name: "Буззы", price: 250, image: "buzza.jpg", description: "Сочное мясо с овощами" },
  { id: 2, name: "Салат Греческий", price: 200, image: "greek-salad.jpg", description: "Огурцы, помидоры, оливки, фета" },
  { id: 3, name: "Пицца", price: 400, image: "pizza.jpg", description: "С сыром, томатами и пепперони" },
  { id: 4, name: "Бургер", price: 150, image: "burger.jpg", description: "Классический бургер с говядиной" },
  { id: 5, name: "Чай", price: 50, image: "tea.jpg", description: "Чай черный с лимоном" },
  { id: 6, name: "Сок апельсиновый", price: 120, image: "orange-juice.jpg", description: "Сок из свежих апельсинов" },
];

const DishDetail = () => {
  const { id } = useParams();
  const dish = dishes.find((dish) => dish.id === Number(id));

  if (!dish) {
    return <h2>Блюдо не найдено</h2>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{dish.name}</h1>
      <img
        src={require(`../images/${dish.image}`)}
        alt={dish.name}
        className="w-full max-w-lg mx-auto mb-4 rounded"
      />
      <p className="text-lg">{dish.description}</p>
      <p className="text-xl font-bold mt-4">Цена: {dish.price} ₽</p>
    </div>
  );
};

export default DishDetail;
