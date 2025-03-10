import React, { useEffect } from 'react';

function Services() {
  useEffect(() => {
    // Slide-up and fade-in animation for the services section
    const elements = document.querySelectorAll('.animate-slide-up, .animate-fade-in');
    elements.forEach((element) => {
      element.style.opacity = '0';
      if (element.classList.contains('animate-slide-up')) {
        element.style.transform = 'translateY(50px)';
      }
    });
  }, []);

  return (
    <section className="services">
      <div className="services-header">
        <h2 className="animate-slide-up">MY SERVICES</h2>
        <div className="service-content">
          {/* Left side: Selling text above, images below */}
          <div className="service-left">
            <div className="service-text selling-text animate-slide-up">
              <h3>GET HELP WITH Selling</h3>
              <p>
                Our combination of skill, experience, and technology ensures that we can sell your home for the highest possible price!
              </p>
              <div className="service-buttons animate-fade-in">
                <button className="btn">WHY CHOOSE ME</button>
                <button className="btn">SELLING PROCESS</button>
                <button className="btn">FREE HOME EVALUATION</button>
              </div>
            </div>
            <div className="service-images selling-images animate-fade-in">
              <img src="/images/selling.jpg" alt="Selling 1" />
              <img src="/images/buying.jpg" alt="Selling 2" />
            </div>
          </div>

          {/* Right side: Images above, Buying text below */}
          <div className="service-right">
            <div className="service-images buying-images animate-fade-in">
              <img src="/images/buying.jpg" alt="Buying 1" />
              <img src="/images/selling.jpg" alt="Buying 2" />
            </div>
            <div className="service-text buying-text animate-slide-up">
              <h3>GET HELP WITH Buying</h3>
              <p>
                We provide expert guidance to help you find your dream home with ease and confidence.
              </p>
              <div className="service-buttons animate-fade-in">
                <button className="btn">WHY CHOOSE ME</button>
                <button className="btn">BUYING PROCESS</button>
                <button className="btn">CONTACT US</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;