// Footer.js
import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

function Footer() {
  const { content } = useContext(LanguageContext);

  return (
    <footer>
      <div className="container">
        <p>{content.footer_copyright}</p>
      </div>
    </footer>
  );
}

export default Footer;
