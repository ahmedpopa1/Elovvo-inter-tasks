/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div className="footer-col">
          <div className="social-links">
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} TaskFlow. All rights reserved.</p>
      </div>
    </footer>
  );
}
