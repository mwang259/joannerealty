import React from 'react';

function Hero() {
  return (
    <section className="hero">
      <video autoPlay muted loop>
        <source src="/images/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay  animate-fade-in">
        <h1>Helping You Buy & Sell in Ottawa</h1>
        <div className="hero-buttons">
          <button>Sell with Joanne</button>
          <button>Buy with Joanne</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
