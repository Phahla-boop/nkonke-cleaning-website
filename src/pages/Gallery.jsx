import { useState } from "react";
import { getGallery } from "../utils/storage";
import img1 from "../assets/team1.jpg.jpeg";
import img2 from "../assets/team2.jpg.jpeg";
import img3 from "../assets/uniform.jpg.jpeg";
import img4 from "../assets/cleaning1.jpg.jpeg";
import img5 from "../assets/cleaning2.jpg.jpeg";
import img6 from "../assets/outdoor.jpg.jpeg";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);
  const galleryTitles = getGallery();

  const items = [
    { img: img1, title: galleryTitles[0]?.title || "Our Professional Team" },
    { img: img2, title: galleryTitles[1]?.title || "Team at Work" },
    { img: img3, title: galleryTitles[2]?.title || "Company Uniform & Branding" },
    { img: img4, title: galleryTitles[3]?.title || "Deep Floor Cleaning" },
    { img: img5, title: galleryTitles[4]?.title || "On-Site Cleaning Work" },
    { img: img6, title: galleryTitles[5]?.title || "Outdoor Maintenance" },
  ];

  const handleClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="section">
      <div className="container">
        <h1>Gallery</h1>
        <p className="section-text">
          Real work from Nkonke Cleaning Solutions — showcasing our team,
          professionalism, and results.
        </p>

        <div className="grid-3">
          {items.map((item, index) => (
            <div
              key={item.title}
              className={`gallery-box ${activeIndex === index ? "active" : ""}`}
              onClick={() => handleClick(index)}
            >
              <img src={item.img} alt={item.title} className="gallery-img" />
              <div className="gallery-content">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}