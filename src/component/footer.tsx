import './css/footer.css'
const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            {/* About Section */}
            <div className="footer-section">
              <h3 className="footer-title">About Us</h3>
              <p className="footer-text">
                We are committed to providing exceptional service and innovative solutions to meet your needs.
              </p>
            </div>
  
            {/* Quick Links */}
            <div className="footer-section">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-list">
                {['Home', 'Services', 'Products', 'About', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href="#" className="footer-link">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Contact Info */}
            <div className="footer-section">
              <h3 className="footer-title">Contact Info</h3>
              <ul className="footer-list">
                <li>123 Business Street</li>
                <li>City, State 12345</li>
                <li>Phone: (+234) 8140849131</li>
                <li>Email: josephakpansunday@gmail.com</li>
              </ul>
            </div>
  
            {/* Newsletter */}
            <div className="footer-section">
              <h3 className="footer-title">Newsletter</h3>
              <p className="footer-text">
                Subscribe to our newsletter for updates and special offers.
              </p>
              <form className="footer-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="footer-input"
                />
                <button type="submit" className="footer-button">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
  
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="footer-socials">
              {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                <a key={social} href="#" className="footer-social-link">
                  {social}
                </a>
              ))}
            </div>
            <p className="footer-text">
              &copy; {currentYear} MoveDAO. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  