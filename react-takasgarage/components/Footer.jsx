export function Footer(){
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-column footer-brand">
          <h2 className="footer-logo">
            <i className="bi bi-car-front-fill"></i>
            TAKASGARAGE
          </h2>
          <p className="footer-description">
            Your ultimate destination for finding and customizing dream cars. Built by enthusiasts, for enthusiasts.
          </p>
          <div className="footer-socials">
            <a href="#"><i className="bi bi-facebook"></i></a>
            <a href="#"><i className="bi bi-twitter"></i></a>
            <a href="#"><i className="bi bi-instagram"></i></a>
            <a href="#"><i className="bi bi-youtube"></i></a>
          </div>
        </div>

        <div className="footer-column footer-links">
          <h3 className="footer-title">Quick Links</h3>
          <ul>
            <li><a href="#">Browse Cars</a></li>
            <li><a href="#">Featured Builds</a></li>
            <li><a href="#">Customization</a></li>
            <li><a href="#">Dashboard</a></li>
          </ul>
        </div>

        <div className="footer-column footer-support">
          <h3 className="footer-title">Support</h3>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Shipping Info</a></li>
          </ul>
        </div>

        <div className="footer-column footer-legal">
          <h3 className="footer-title">Legal</h3>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Cookie Policy</a></li>
            <li><a href="#">Licenses</a></li>
          </ul>
        </div>

      </div>
      <div className="credits">
        <p>© 2025 TAKASGARAGE. All rights reserved.</p>
      </div>
    </footer>

  )
}