import { useEffect, useState } from "react";
import "../assets/Navbar.css";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  // Load saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.body.classList.add("dark");
    } else {
      // Ensure light mode is applied if no theme is saved or if it's explicitly light
      document.body.classList.remove("dark");
    }
  }, []);

  // Apply theme when toggled
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/weathericon.jpg" alt="Weather Icon" className="logo-img" />
        <h1>Weather Now</h1>
      </div>
      <label className="theme-toggle" htmlFor="theme-checkbox">
        <input
          type="checkbox"
          id="theme-checkbox"
          checked={darkMode}
          onChange={handleToggle}
          className="theme-checkbox"
        />
        <div className="toggle-slider">
          <span className="toggle-icon">{darkMode ? "☀️" : "🌙"}</span>
        </div>
      </label>
    </nav>
  );
}