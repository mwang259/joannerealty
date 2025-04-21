import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from './LanguageContext';

function Hero() {
  const { content } = useContext(LanguageContext);

  return (
    <section className="hero" id="home">
      <img src="/images/bg-sky.jpg" alt="hero background" className="hero-bg" />
      <div className="hero-overlay animate-fade-in">
        <h1>{content.hero_title}</h1>
        <div className="hero-buttons">
        <Link to="/selling-resources">
            <button>{content.hero_sell_button}</button>
          </Link>
          <Link to="/buying-resources">
            <button>{content.hero_buy_button}</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
