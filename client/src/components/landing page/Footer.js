import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">Made with ❤️ by Abdullah Shehu</p>
        <div className="footer-logos">
          <a href="/">
            <i className="fab fa-instagram" />
          </a>
          <a href="/">
            <i className="fab fa-github" />
          </a>
          <a href="/">
            <i className="fab fa-twitter" />
          </a>
          <a href="/">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <div className="footer-border">
          <p className="small">Deployed by Heroku</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
