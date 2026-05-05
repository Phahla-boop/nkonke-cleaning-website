import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getServices,
  saveServices,
  getContact,
  saveContact,
  getGallery,
  saveGallery,
} from "../utils/storage";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const [services, setServices] = useState([]);
  const [contact, setContact] = useState({
    phone: "",
    email: "",
    address: "",
  });
  const [gallery, setGallery] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const loggedIn = localStorage.getItem("isAdminLoggedIn");
    if (loggedIn !== "true") {
      navigate("/admin");
      return;
    }

    setServices(getServices());
    setContact(getContact());
    setGallery(getGallery());
  }, [navigate]);

  function handleServiceChange(index, field, value) {
    const updated = [...services];
    updated[index][field] = value;
    setServices(updated);
  }

  function handleGalleryChange(index, value) {
    const updated = [...gallery];
    updated[index].title = value;
    setGallery(updated);
  }

  function handleSave() {
    saveServices(services);
    saveContact(contact);
    saveGallery(gallery);
    setMessage("Changes saved successfully.");
    setTimeout(() => setMessage(""), 2500);
  }

  function handleLogout() {
    localStorage.removeItem("isAdminLoggedIn");
    navigate("/admin");
  }

  return (
    <section className="section">
      <div className="container">
        <div className="admin-topbar">
          <h1>Admin Dashboard</h1>
          <div className="admin-top-actions">
            <button className="btn btn-orange" onClick={handleSave}>
              Save Changes
            </button>
            <button className="btn btn-dark" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>

        {message && <p className="admin-success">{message}</p>}

        <div className="admin-section">
          <h2>Contact Details</h2>
          <div className="admin-grid">
            <input
              type="text"
              placeholder="Phone"
              value={contact.phone}
              onChange={(e) =>
                setContact({ ...contact, phone: e.target.value })
              }
            />
            <input
              type="email"
              placeholder="Email"
              value={contact.email}
              onChange={(e) =>
                setContact({ ...contact, email: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Address"
              value={contact.address}
              onChange={(e) =>
                setContact({ ...contact, address: e.target.value })
              }
            />
          </div>
        </div>

        <div className="admin-section">
          <h2>Services</h2>
          {services.map((service, index) => (
            <div className="admin-card-block" key={index}>
              <input
                type="text"
                value={service.title}
                onChange={(e) =>
                  handleServiceChange(index, "title", e.target.value)
                }
              />
              <textarea
                value={service.text}
                onChange={(e) =>
                  handleServiceChange(index, "text", e.target.value)
                }
              />
            </div>
          ))}
        </div>

        <div className="admin-section">
          <h2>Gallery Titles</h2>
          {gallery.map((item, index) => (
            <div className="admin-card-block" key={index}>
              <input
                type="text"
                value={item.title}
                onChange={(e) => handleGalleryChange(index, e.target.value)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}