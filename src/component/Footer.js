import React from 'react'
import './footer.css';

function Footer() {
  return (
        <footer className="footer">
      <div className="footer-divi" />

      <div className="footer-inside">

        <div className="footer-log">
          <div className="footer-logo">
  <img src="https://pngimg.com/d/fcb_logo_PNG18.png" alt="logo" className="logo-img" />
            <div className="footer-text">
              <span className="footer-club">FC BARCELONA</span>
              <span className="footer-sub">Ultimate Team</span>
            </div>
          </div>
          <p className="desc">
            More than a club. Experience the legendary FC Barcelona.
          </p>
          <div className="footer-socials">
            <div className="social-btn">f</div>
            <div className="social-btn">𝕏</div>
            <div className="social-btn">◎</div>
            <div className="social-btn">▶</div>
          </div>
        </div>

        <div className="footer-links">
          <h4 className="footer-links-title">QUICK LINKS</h4>
          <a  href="/" className="footer-link">About Club</a>
          <a href="/" className="footer-link">News</a>
          <a  href="/" className="footer-link">Tickets</a>
          <a href="/" className="footer-link">Shop</a>
        </div>

        <div className="footer-links">
          <h4 className="footer-links-title">TEAMS</h4>
          <a  href="/" className="footer-link">First Team</a>
          <a href="/" className="footer-link">Academy</a>
          <a href="/" className="footer-link">Women</a>
          <a href="/" className="footer-link">Legends</a>
        </div>

        <div className="footer-links">
          <h4  className="footer-links-title">CONTACT</h4>
          <div className="footer-contact-item">
            <span className="contact-icon">📍</span>
            <span>Camp Nou, Barcelona, Spain</span>
          </div>
          <div className="footer-contact-item">
            <span className="contact-icon">📞</span>
            <span>+34 902 189 900</span>
          </div>
          <div className="footer-contact-item">
            <span className="contact-icon">✉️</span>
            <span>info@fcbarcelona.com</span>
          </div>
        </div>

      </div>

      <div className="footer-divider" />

      <div className="footer-bottom">
        <span className="footer-copy">© 2026 FC Barcelona Ultimate Team. All rights reserved.</span>
        <div className="footer-legal">
          <a href="/" className="footer-legal-link">Privacy Policy</a>
          <a href="/" className="footer-legal-link">Terms of Service</a>
          <a href="/" className="footer-legal-link">Cookie Policy</a>
        </div>
      </div>

    </footer>
  )
}

export default Footer
