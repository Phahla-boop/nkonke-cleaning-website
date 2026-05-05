import { Link } from "react-router-dom";
import bccci from "../assets/bccci-logo.png.jpeg";


<div className="badge-wrap">
  <img src={bccci} alt="BCCCI Verified" className="footer-badge" />
  <p className="badge-text">BCCCI Verified</p>
</div>

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">

        {/* About + BCCCI Badge */}
        <div>
          <h3>Nkonke Cleaning Solutions</h3>
          <p>
            Professional cleaning services for events, businesses, and facilities.
          </p>

          {/* BCCCI Badge */}
          <div className="badge-wrap">
            <img src={bccci} alt="BCCCI Verified" className="footer-badge" />
            <p className="badge-text">BCCCI Verified Company</p>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4>Quick Links</h4>
          <p><Link to="/">Home</Link></p>
          <p><Link to="/about">About</Link></p>
          <p><Link to="/services">Services</Link></p>
          <p><Link to="/gallery">Gallery</Link></p>
          <p><Link to="/contact">Contact</Link></p>
        </div>

        {/* Contact */}
        <div>
          <h4>Contact</h4>
          <p>WhatsApp: 0765166385</p>
          <p>
            Email:{" "}
            <a href="mailto:admiraltechsolutions@gmail.com">
              admiraltechsolutions@gmail.com
            </a>
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Nkonke Cleaning Solutions</p>
      </div>
    </footer>
  );
}