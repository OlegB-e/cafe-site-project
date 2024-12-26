import React from 'react';
import './Home.css';  // Импортируем файл стилей для главной страницы

const Home = () => {
  return (
    <div className="home-container">
      <div className="content">
        <h1 className="title">Добро пожаловать в кафе "Золотая бузза"</h1>
        <p className="description">Вкусные блюда и освежающие напитки ждут вас!</p>
      </div>
    </div>
  );
};

export default Home;
