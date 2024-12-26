// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white">Главная</Link>
        </li>
        <li>
          <Link to="/catalog" className="text-white">Каталог</Link>
        </li>
        <li>
          <Link to="/cart" className="text-white">Корзина</Link>
        </li>
        <li>
          <Link to="/about" className="text-white">О нас</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
