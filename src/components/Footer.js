// Footer.js
import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

function Footer() {
  const { content } = useContext(LanguageContext);

  return (
    <footer>
      <div className="container">
        <a  href="https://whp22.github.io/"><p>{content.footer_copyright}</p></a>
      </div>
    </footer>
  );
}

export default Footer;
