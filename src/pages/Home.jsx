import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import heroImg from "../assets/uniform.jpg.jpeg";

export default function Home() {
  return (
    <>
      <section
        className="hero hero-bg"
        style={{
          backgroundImage: `linear-gradient(rgba(24,24,27,0.75), rgba(249,115,22,0.55)), url(${heroImg})`,
        }}
      >
        <div className="container hero-grid">
          <div>
            <p className="tag">Once Off or Contract Cleaning Solutions</p>
            <h1>Professional Cleaning Solutions for Every Space</h1>
            <p className="hero-text">
              Nkonke Group drive to be the primary cleaning maintenance services provider of
              choice and the benchmark of performance
              and customer satisfaction.
            </p>

            <div className="hero-actions">
              <Link to="/contact" className="btn btn-orange">
                Request a Quote
              </Link>
              <Link to="/services" className="btn btn-outline-dark">
                Our Services
              </Link>
            </div>
          </div>

          <div className="hero-box">
            <h3>Cleaning that protects your image</h3>
            <ul className="vision-list">
            <li>Hygiene Services</li>
            <li>Deep Cleaning</li>
            <li>Refuse Removal</li>
            <li>Garden Services</li>
            <li>Window Cleaning</li>
            <li>Specialised Cleaning</li>
            <li>Pest Control</li>
          </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Our Services</h2>
          <p className="section-text">
            We offer reliable cleaning services for events, venues, offices,
            and commercial spaces.
          </p>

          <div className="grid-3">
            <ServiceCard
              title="Cleaning Personnel On Site"
              text="Reliable teams for events and commercial spaces."
            />
            <ServiceCard
              title="Spill Response"
              text="Fast cleanup support for unexpected messes."
            />
            <ServiceCard
              title="Waste Management"
              text="Organized waste handling for cleaner operations."
            />
          </div>
        </div>
      </section>
    </>
  );
}