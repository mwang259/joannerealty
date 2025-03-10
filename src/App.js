import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Listings from './components/Listings';
// import Reviews from './components/Reviews';
import Social from './components/Social';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Listings />
      {/* <Reviews /> */}
      <Social />
      <Footer />
    </div>
  );
}

export default App;
