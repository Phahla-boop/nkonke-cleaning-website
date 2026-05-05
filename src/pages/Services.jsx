import ServiceCard from "../components/ServiceCard";
import { getServices } from "../utils/storage";

export default function Services() {
  const services = getServices();

  return (
    <section className="section">
      <div className="container">
        <h1>Our Services</h1>
        <p className="section-text">
          We provide dependable cleaning support for events, venues, offices,
          and commercial spaces.
        </p>

        <div className="grid-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              text={service.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}