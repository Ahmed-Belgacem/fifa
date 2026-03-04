import React from 'react'
import './navbar.css';

function Navbar() {
  return (
     <nav className="navbar">
      <div className="navbar-inside">

        <div className="navbar-logo">
<img src="https://pngimg.com/d/fcb_logo_PNG18.png" alt="logo" className="logo-img" />
          <div className="navbar-text">
            <span className="navbar-title">FC BARCELONA</span>
            <span className="navbar-title2">Ultimate Team</span>
          </div>
        </div>

        <div className="links">
          <button className="link active">
            <span className="icon">👥</span> SQUAD
          </button>
          <button className="link">
            <span className="icon">📅</span> MATCHES
          </button>
          <button className="link">
            <span className="icon">📊</span> STATS
          </button>
          <button className="link">
            <span className="icon">🏆</span> TROPHIES
          </button>
        </div>

        <button className="navbar-btn">JOIN TEAM</button>

      </div>
      <div className="stroke" />
    </nav>
  )
}

export default Navbar
