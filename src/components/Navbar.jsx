import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/ncs-logo.png.jpeg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container nav-wrap">
        <Link to="/">
          <img src={logo} alt="NCS Logo" className="logo-img" />
        </Link>

        <nav className="desktop-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <button className="menu-btn" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <nav className="mobile-nav">
          <Link onClick={() => setOpen(false)} to="/">Home</Link>
          <Link onClick={() => setOpen(false)} to="/about">About</Link>
          <Link onClick={() => setOpen(false)} to="/services">Services</Link>
          <Link onClick={() => setOpen(false)} to="/gallery">Gallery</Link>
          <Link onClick={() => setOpen(false)} to="/contact">Contact</Link>
        </nav>
      )}
    </header>
  );
}