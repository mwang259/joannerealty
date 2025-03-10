// import React from 'react';

// function Social() {
//   return (
//     <section className="social">
//       <div className="container">
//         <div className="social-content">
//           {/* Left Section: Name, Contact, Social Icons, Follow Button */}
//           <div className="social-left">
//             <h2 className="social-name">Lei Guo</h2>
//             <p className="social-title">Broker</p>
//             <div className="social-contact">
//               <p>Direct: (613) 986-7089</p>
//               <p>Office: (613) 592-6400</p>
//               <p>info@leiguorealty.com</p>
//               <p>484 Hazeldean Rd, Kanata, ON, K2L 1V4</p>
//             </div>
//             <div className="social-icons">
//               <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
//                 <i className="fab fa-linkedin-in"></i>
//               </a>
//               <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
//                 <i className="fab fa-facebook-f"></i>
//               </a>
//               <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
//                 <i className="fab fa-instagram"></i>
//               </a>
//               <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
//                 <i className="fab fa-twitter"></i>
//               </a>
//               <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
//                 <i className="fab fa-youtube"></i>
//               </a>
//             </div>
//             <button className="follow-btn">Follow Me</button>
//           </div>

//           {/* Center Section: Royal LePage Logo and QR Codes */}
//           <div className="social-center">
//             <div className="qr-codes">
//               <div className="qr-item">
//                 <img src="/images/WeChat.jpeg" alt="WhatsApp QR Code" />
//                 <p>Wechat Official Account</p>
//               </div>
//               <div className="qr-item">
//                 <img src="/images/Line.jpeg" alt="WeChat QR Code" />
//                 <p>Line Official Account</p>
//               </div>
//             </div>
//           </div>

//           {/* Right Section: Photo and Chat Button */}
//           <div className="social-right">
//             <img src="/images/Me2.jpg" alt="Joanne" className="profile-photo" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Social;

import React from 'react';

function Social() {
  return (
    <section className="social">
      <div className="container">
        <div className="social-content">
          {/* Left Section: Name */}
          <div className="social-left">
            <h2 className="social-name">Joanne Wang</h2>
            <p className="social-title">Broker</p>
            <div className="social-social-section">
            <div className="social-icons">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
            <button className="follow-btn">Follow Me</button>
          </div>
          </div>

          {/* Center-Left Section: Contact Info */}
          <div className="social-contact-section">
            <div className="social-contact">
              <p>Direct: (613) 986-7089</p>
              <p>Office: (613) 592-6400</p>
              <p>info@joannerealty.com</p>
              <p>484 Hazeldean Rd, Kanata, ON, K2L 1V4</p>
            </div>
          </div>

          {/* Center Section: Social Icons and Follow Button */}
          

          {/* Center-Right Section: QR Codes */}
          <div className="social-qr-section">
            <div className="qr-codes">
              <div className="qr-item">
                <img src="/images/WeChat.jpg" alt="WeChat QR Code" />
                <p>WeChat Official Account</p>
              </div>
              <div className="qr-item">
                <img src="/images/Line.jpg" alt="Line QR Code" />
                <p>Line Official Account</p>
              </div>
            </div>
            <button className="chat-btn">Chat live with Lei now!</button>
          </div>

          {/* Right Section: Photo and Chat Button */}
          <div className="social-right">
            <img src="/images/Me2.jpg" alt="Joanne" className="profile-photo" />
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Social;