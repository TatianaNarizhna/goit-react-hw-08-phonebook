import React from "react";
import s from './HomePageView.module.css'

 function HomePage() {
    return (
      <h1 className={s.title}>Welcome page of our service{' '}
        <span role="img" aria-label="Иконка приветствия">
        📔
        </span>
      </h1>
        
    )
};

export default HomePage;