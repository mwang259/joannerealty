import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

// 语言内容映射
const languageContent = {
  EN: {
    home: 'Home',
    listings: 'Listings',
    selling: 'Selling',
    buying: 'Buying',
    about: 'About',
    resources: 'Resources',
  },
  中文: {
    home: '首页',
    listings: '房源',
    selling: '出售',
    buying: '购买',
    about: '关于',
    resources: '资源',
  },
  日文: {
    home: 'ホーム',
    listings: '物件',
    selling: '売却',
    buying: '購入',
    about: '会社概要',
    resources: 'リソース',
  },
};

function Header() {
  const [isListingsOpen, setIsListingsOpen] = useState(false);
  const [isSellingOpen, setIsSellingOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [language, setLanguage] = useState('EN'); // 默认语言为英文
  const [isLanguageOpen, setIsLanguageOpen] = useState(false); // 控制语言下拉框
  const [isMobile, setIsMobile] = useState(false);

  // 检测屏幕尺寸
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); // 初始检查
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleLanguageDropdown = (e) => {
    e.preventDefault(); // 阻止默认跳转
    console.log('Toggling language dropdown, current isLanguageOpen:', isLanguageOpen); // 调试日志
    setIsLanguageOpen((prev) => {
      const newValue = !prev;
      console.log('New isLanguageOpen:', newValue); // 调试日志
      return newValue;
    });
  };

  const selectLanguage = (lang) => {
    console.log('Selecting language:', lang); // 调试日志
    setLanguage(lang);
    setIsLanguageOpen(false); // 选择后关闭下拉框
  };

  const content = languageContent[language];

  return (
    <header>
      <div className="container header-content">
        <div className="logo-section">
          <div className="logo">
            <img src="/images/logo.jpg" alt="Joanne Realty Logo" />
          </div>
          <span className="broker-name">Joanne Wang Broker</span>
        </div>

        {/* 汉堡菜单按钮 */}
        {isMobile && (
          <button className="hamburger" onClick={toggleNav}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        )}

        {/* 导航栏内容 */}
        <nav className={isNavOpen || !isMobile ? 'nav-open' : ''}>
          <ul>
            <li>
              <a href="#home">{content.home}</a>
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
                <a href="#map-search">Map Search</a>
                <a href="#criteria-search">Featured Listings</a>
                <a href="#community-search">Search Listings</a>
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
                <a href="#Selling Resources">Selling Resources</a>
                <a href="#Free Evaluation">Free Evaluation</a>
              </div>
            </li>
            <li
              onMouseEnter={() => setIsSellingOpen(true)}
              onMouseLeave={() => setIsSellingOpen(false)}
            >
              <a href="#buying">
                {content.buying} <span className="dropdown-icon">▼</span>
              </a>
              <div
                className="dropdown"
                style={{ display: isSellingOpen ? 'block' : 'none' }}
              >
                <a href="#why-choose-me">Buying Resources</a>
              </div>
            </li>
            <li>
              <a href="#about">{content.about}</a>
            </li>
            <li>
              <a href="#resources">
                {content.resources} <span className="dropdown-icon">▼</span>
              </a>
            </li>
            {/* 语言切换（小屏幕） */}
            {isMobile && (
              <li className="mobile-language">
                <a
                  href="#language"
                  onClick={toggleLanguageDropdown}
                >
                  {language}
                </a>
                <div
                  className="dropdown language-dropdown"
                  style={{ display: isLanguageOpen ? 'block' : 'none' }}
                >
                  <a href="#en" onClick={() => selectLanguage('EN')}>
                    EN
                  </a>
                  <a href="#zh" onClick={() => selectLanguage('中文')}>
                    中文
                  </a>
                  <a href="#jp" onClick={() => selectLanguage('日文')}>
                    日文
                  </a>
                </div>
              </li>
            )}
          </ul>
        </nav>

        {/* 语言切换（大屏幕） */}
        {!isMobile && (
          <div className="language-toggle">
            <a
              href="#language"
              onClick={toggleLanguageDropdown}
            >
              {language}
            </a>
            <div
              className="dropdown language-dropdown"
              style={{ display: isLanguageOpen ? 'block' : 'none' }}
            >
              <a href="#en" onClick={() => selectLanguage('EN')}>
                EN
              </a>
              <a href="#zh" onClick={() => selectLanguage('中文')}>
                中文
              </a>
              <a href="#jp" onClick={() => selectLanguage('日文')}>
                日文
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
