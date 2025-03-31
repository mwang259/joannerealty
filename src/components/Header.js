// src/components/Header.js
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { LanguageContext } from './LanguageContext';

function Header() {
  const { language, setLanguage, content } = useContext(LanguageContext);
  const [isListingsOpen, setIsListingsOpen] = useState(false);
  const [isSellingOpen, setIsSellingOpen] = useState(false);
  const [isBuyingOpen, setIsBuyingOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleLanguageDropdown = (e) => {
    e.preventDefault();
    setIsLanguageOpen((prev) => !prev);
  };

  const selectLanguage = (lang) => {
    setLanguage(lang);
    setIsLanguageOpen(false);
  };

  return (
    <header>
      <div className="container-full header-content">
        <div className="logo-section">
          <div className="logo">
            <img src="/images/logo2.png" alt="Joanne Realty Logo" />
          </div>
          <span className="broker-name">Joanne Wang, Ph.D.</span>
        </div>

        {isMobile && (
          <button className="hamburger" onClick={toggleNav}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        )}

        <nav className={isNavOpen || !isMobile ? 'nav-open' : ''}>
          <ul>
            <li>
              <Link to="/">{content.home}</Link>
            </li>
            <li
              onMouseEnter={() => setIsListingsOpen(true)}
              onMouseLeave={() => setIsListingsOpen(false)}
            >
              <a href="#listings">
                {content.listings} <span className="dropdown-icon">▼</span>
              </a>
              <div
                className="dropdown listings-dropdown"
                style={{ display: isListingsOpen ? 'block' : 'none' }}
              >
                {/* <a href="#map-search">{content.Map_search}</a> */}
                <Link to="/featured-listings">{content.Featured_listings}</Link>
                {/* <a href="#Search_listings">{content.Search_listings}</a> */}
              </div>
            </li>
            <li
              onMouseEnter={() => setIsSellingOpen(true)}
              onMouseLeave={() => setIsSellingOpen(false)}
            >
              <a href="#selling">
                {content.selling} <span className="dropdown-icon">▼</span>
              </a>
              <div
                className="dropdown"
                style={{ display: isSellingOpen ? 'block' : 'none' }}
              >
                <a href="#Selling Resources">{content.selling_resources}</a>
                <Link to="/home-evaluation">{content.free_evaluation}</Link>
              </div>
            </li>
            <li
              onMouseEnter={() => setIsBuyingOpen(true)}
              onMouseLeave={() => setIsBuyingOpen(false)}
            >
              <a href="#buying">
                {content.buying} <span className="dropdown-icon">▼</span>
              </a>
              <div
                className="dropdown"
                style={{ display: isBuyingOpen ? 'block' : 'none' }}
              >
                <a href="#why-choose-me">{content.buying_resources}</a>
              </div>
            </li>
            <li
              onMouseEnter={() => setIsResourcesOpen(true)}
              onMouseLeave={() => setIsResourcesOpen(false)}
            >
              <a href="#resources">
                {content.resources} <span className="dropdown-icon">▼</span>
              </a>
              <div
                className="dropdown"
                style={{ display: isResourcesOpen ? 'block' : 'none' }}
              >
                <a href="https://www.realtor.ca/calculator#v=payment" target="blank">
                  {content.Mortgage_calculation}
                </a>
                <a href="https://www.realtor.ca/calculator#v=affordability" target="blank">
                  {content.Loan_calculation}
                </a>
                <a href="https://www.realtor.ca/calculator#v=landtransfertax" target="blank">
                  {content.Transfer_calculation}
                </a>
              </div>
            </li>
            <li>
              <Link to="/blog">{content.blog}</Link>
            </li>
            {/* <li>
              <a href="#about">{content.contact}</a>
            </li> */}

            {isMobile && (
              <li className="mobile-language">
                <a href="#language" onClick={toggleLanguageDropdown}>
                  {language}
                </a>
                <div
                  className="dropdown language-dropdown"
                  style={{ display: isLanguageOpen ? 'block' : 'none' }}
                >
                  <a href="#en" onClick={() => selectLanguage('EN')}>
                    EN
                  </a>
                  <a href="#zh" onClick={() => selectLanguage('Chinese')}>
                    Chinese
                  </a>
                  <a href="#jp" onClick={() => selectLanguage('Japanese')}>
                    Japanese
                  </a>
                </div>
              </li>
            )}
          </ul>
        </nav>

        {!isMobile && (
          <div className="language-toggle">
            <a href="#language" onClick={toggleLanguageDropdown}>
              {language}
            </a>
            <div
              className="dropdown language-dropdown"
              style={{ display: isLanguageOpen ? 'block' : 'none' }}
            >
              <a href="#en" onClick={() => selectLanguage('EN')}>
                EN
              </a>
              <a href="#zh" onClick={() => selectLanguage('Chinese')}>
                Chinese
              </a>
              <a href="#jp" onClick={() => selectLanguage('Japanese')}>
                Japanese
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
