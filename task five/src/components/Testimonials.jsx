import React from "react";

const testimonials = [
  {
    content: "TaskFlow has transformed how our team works...",
    author: "Sarah Johnson",
    role: "Project Manager, TechCorp",
    initials: "SJ",
  },
  {
    content: "The intuitive interface made it easy...",
    author: "Michael Rodriguez",
    role: "Creative Director, DesignStudio",
    initials: "MR",
  },
  {
    content: "We evaluated 10+ tools, TaskFlow stood out...",
    author: "Amanda Lee",
    role: "CTO, StartupHub",
    initials: "AL",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-title">
          <h2>What Our Customers Say</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="testimonial-content">"{t.content}"</div>
              <div className="testimonial-author">
                <div className="author-avatar">{t.initials}</div>
                <div className="author-info">
                  <h4>{t.author}</h4>
                  <p>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
