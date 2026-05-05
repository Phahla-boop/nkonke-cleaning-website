import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    if (username === "admin" && password === "1234") {
      localStorage.setItem("isAdminLoggedIn", "true");
      navigate("/admin/dashboard");
    } else {
      setError("Invalid username or password");
    }
  }

  return (
    <section className="section">
      <div className="container admin-login-wrap">
        <form className="contact-form admin-card" onSubmit={handleLogin}>
          <h1>Admin Login</h1>
          <p className="section-text">
            Login to manage website content.
          </p>

          {error && <p className="admin-error">{error}</p>}

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="btn btn-dark">
            Login
          </button>
        </form>
      </div>
    </section>
  );
}