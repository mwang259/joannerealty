// src/components/Social.js
import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

function Social() {
  const { content } = useContext(LanguageContext);

  return (
    <section className="social">
      <div className="container">
        <div className="social-content">
          {/* Left Section: Name */}
          <div className="social-left">
            <h2 className="social-name">Joanne Wang</h2>
            <p className="social-title">{content.social_title}</p>
            <div className="social-social-section">
              <div className="social-icons">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://www.facebook.com/ken.ou.94" target="_blank" rel="noopener noreferrer">
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
              {/* <button className="follow-btn">{content.social_follow_btn}</button> */}
            </div>
          </div>

          {/* Center-Left Section: Contact Info */}
          <div className="social-contact-section">
            <div className="social-contact">
              <p>{content.social_contact_direct}</p>
              <p>{content.social_contact_office}</p>
              <p>{content.social_contact_email}</p>
              <p>{content.social_contact_address}</p>
            </div>
          </div>

          {/* Center-Right Section: QR Codes */}
          <div className="social-qr-section">
            <div className="qr-codes">
              <div className="qr-item">
                <img src="/images/WeChat.jpg" alt="WeChat QR Code" />
                <p>{content.social_qr_wechat}</p>
              </div>
              <div className="qr-item">
                <img src="/images/Line.jpg" alt="Line QR Code" />
                <p>{content.social_qr_line}</p>
              </div>
              <div className="qr-item">
                <img src="/images/Facebook.png" alt="Facebook QR Code" />
                <p>{content.social_qr_facebook}</p>
              </div>
            </div>
            {/* <button className="chat-btn">{content.social_chat_btn}</button> */}
          </div>

          {/* Right Section: Photo */}
          <div className="social-right">
            <img src="/images/Me2.jpg" alt="Joanne" className="profile-photo" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Social;
