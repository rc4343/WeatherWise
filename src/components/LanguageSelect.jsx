import React from 'react';

const LanguageSelect = ({ lang, handleLanguageChange }) => {
  return (
    <div>
      <label htmlFor="lang-select">Language:</label>
      <select id="lang-select" value={lang} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="es">Spanish</option>
      </select>
    </div>
  );
};

export default LanguageSelect;
