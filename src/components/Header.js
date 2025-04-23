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

  const closeNav = () => {
    if (isMobile) {
      setIsNavOpen(false);
    }
  };

  const toggleLanguageDropdown = (e) => {
    e.preventDefault();
    setIsLanguageOpen((prev) => !prev);
  };

  const selectLanguage = (lang) => {
    setLanguage(lang);
    setIsLanguageOpen(false);
    closeNav();
  };

  const toggleListingsDropdown = (e) => {
    e.preventDefault();
    setIsListingsOpen((prev) => !prev);
  };

  const toggleSellingDropdown = (e) => {
    e.preventDefault();
    setIsSellingOpen((prev) => !prev);
  };

  const toggleBuyingDropdown = (e) => {
    e.preventDefault();
    setIsBuyingOpen((prev) => !prev);
  };

  const toggleResourcesDropdown = (e) => {
    e.preventDefault();
    setIsResourcesOpen((prev) => !prev);
  };

  // 动态设置 language-dropdown 的 left 属性
  const languageDropdownStyle = {
    display: isLanguageOpen ? 'block' : 'none',
    left: language === 'EN' ? '-50%' : '0%',
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
              <Link to="/" onClick={closeNav}>
                {content.home}
              </Link>
            </li>
            <li
              onMouseEnter={() => !isMobile && setIsListingsOpen(true)}
              onMouseLeave={() => !isMobile && setIsListingsOpen(false)}
            >
              <a href="#listings" onClick={isMobile ? toggleListingsDropdown : undefined}>
                {content.listings} <span className="dropdown-icon">▼</span>
              </a>
              <div
                className="dropdown listings-dropdown"
                style={{ display: isListingsOpen ? 'block' : 'none' }}
              >
                <Link to="/featured-listings" onClick={closeNav}>
                  {content.Featured_listings}
                </Link>
              </div>
            </li>
            <li
              onMouseEnter={() => !isMobile && setIsSellingOpen(true)}
              onMouseLeave={() => !isMobile && setIsSellingOpen(false)}
            >
              <a href="#selling" onClick={isMobile ? toggleSellingDropdown : undefined}>
                {content.selling} <span className="dropdown-icon">▼</span>
              </a>
              <div
                className="dropdown"
                style={{ display: isSellingOpen ? 'block' : 'none' }}
              >
                <Link to={`/selling-resources`} onClick={closeNav}>
                  {content.selling_resources}
                </Link>
                <Link to="/home-evaluation" onClick={closeNav}>
                  {content.free_evaluation}
                </Link>
              </div>
            </li>
            <li
              onMouseEnter={() => !isMobile && setIsBuyingOpen(true)}
              onMouseLeave={() => !isMobile && setIsBuyingOpen(false)}
            >
              <a href="#buying" onClick={isMobile ? toggleBuyingDropdown : undefined}>
                {content.buying} <span className="dropdown-icon">▼</span>
              </a>
              <div
                className="dropdown"
                style={{ display: isBuyingOpen ? 'block' : 'none' }}
              >
                <Link to={`/buying-resources`} onClick={closeNav}>
                  {content.buying_resources}
                </Link>
              </div>
            </li>
            <li
              onMouseEnter={() => !isMobile && setIsResourcesOpen(true)}
              onMouseLeave={() => !isMobile && setIsResourcesOpen(false)}
            >
              <a href="#resources" onClick={isMobile ? toggleResourcesDropdown : undefined}>
                {content.resources} <span className="dropdown-icon">▼</span>
              </a>
              <div
                className="dropdown"
                style={{ display: isResourcesOpen ? 'block' : 'none' }}
              >
                <a href="https://www.realtor.ca/calculator#v=payment" onClick={closeNav}>
                  {content.Mortgage_calculation}
                </a>
                <a href="https://www.realtor.ca/calculator#v=landtransfertax" onClick={closeNav}>
                  {content.Transfer_calculation}
                </a>
              </div>
            </li>
            <li>
              <Link to="/blog" onClick={closeNav}>
                {content.blog}
              </Link>
            </li>

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
              style={languageDropdownStyle}
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