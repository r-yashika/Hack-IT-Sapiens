import React, { useState } from 'react';
import './styles.css';
function SearchPage() {
  const [searchString, setSearchString] = useState('');

  const handleSearch = () => {
    console.log("Search string:", searchString);
    
  };

  return (
    <div>
      <header className="navbar">
        <div className="logo-container">
          <img src="IMG-20240329-WA0003.jpg" alt="Logo" className="logo" />
        </div>
        <ul className="nav-links">
          <li><a href="#">About</a></li>
          <li><a href="#">Ask</a></li>
          <li><a href="#">Solution</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
        <div className="spacer"></div>
        <div className="login">
          <a href="#" className="login-button">Login</a>
        </div>
      </header>
      <section className="search-section">
        <div className="search-container">
          <input
            type="text"
            id="search-bar"
            placeholder="Enter your Question"
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
          />
          <select id="language-select">
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
          </select>
          <button id="search-button" onClick={handleSearch}>Search</button>
        </div>
      </section>
    </div>
  );
}

export default SearchPage;
