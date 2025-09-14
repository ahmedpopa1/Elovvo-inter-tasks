import React, { useState } from "react";
import { useTheme } from "../ThemeContext";

export default function Header() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-row">
        <div className="logo">
          <i className="fas fa-tasks" /> <span>TaskFlow</span>
        </div>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          <a href="#features">Features</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#pricing">Pricing</a>
        </nav>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={toggleDarkMode}
            aria-label="Toggle theme"
          >
            <i className={darkMode ? "fas fa-sun" : "fas fa-moon"} />
          </button>

          <button className="btn btn-primary">Get Started</button>

          <button
            className="mobile-menu"
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            <i className="fas fa-bars" />
          </button>
        </div>
      </div>
    </header>
  );
}
