import React, { useEffect } from 'react';

function About() {
  useEffect(() => {
    // 页面加载时的淡入动画
    const aboutSection = document.querySelector('.about');
    aboutSection.style.opacity = '0';
    setTimeout(() => {
      aboutSection.style.transition = 'opacity 1s ease-in';
      aboutSection.style.opacity = '1';
    }, 100);
  }, []);

  return (
    <section className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="animate-slide-up">MEET Joanne Wang</h2>
            <p className="animate-slide-up">
            With a PhD in Intercultural Studies and a background as a researcher in Kobe University, Japan, 
            Joanne brings exceptional data analysis skills and a profound understanding of communication and problem-solving to her real estate practice. 
            Her analytical approach and attention to detail empower her clients with clear, well-informed advice tailored to their unique needs.</p>

            <p className="animate-slide-up">Fluent in Mandarin, Japanese, and English, Joanne specializes in guiding clients through the complexities of buying, selling, or renting homes. 
            Her commitment to honesty, integrity, and efficiency has earned her a reputation for reliability and excellence. 
            She strives to provide a seamless and stress-free experience, helping her clients feel confident at every step of their real estate journey.</p>

            <p className="animate-slide-up">Joanne enjoys playing tennis, reading, and traveling when she's not working, continuously seeking personal and professional growth opportunities.

            </p>
            <button className="btn animate-slide-up">GET CONNECTED</button>
            {/* <div className="badges">
              <img src="/images/Me2.jpg" alt="Top 2% Award" />
              <img src="/images/Me3.jpg" alt="Royal LePage Award" />
              <img src="/images/badge3.png" alt="Sales Achievement" />
            </div> */}
          </div>
          <div className="about-image">
            <img
              src="/images/Me1.jpg"
              alt="Joanne Wang"
              className="animate-fade-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;