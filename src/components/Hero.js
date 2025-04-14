// src/components/Hero.js
import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

function Hero() {
  const { content } = useContext(LanguageContext);

  return (
    <section className="hero" id="home">
      <video autoPlay muted loop>
        {/* <img src="/images/"></> */}
        <source src="/images/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay animate-fade-in">
        <h1>{content.hero_title}</h1>
        <div className="hero-buttons">
          <button>{content.hero_sell_button}</button>
          <button>{content.hero_buy_button}</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
