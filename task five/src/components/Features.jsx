import React from "react";

const features = [
  {
    icon: "fas fa-project-diagram",
    title: "Project Planning",
    desc: "Plan your projects with intuitive tools",
  },
  {
    icon: "fas fa-users",
    title: "Team Collaboration",
    desc: "Work together in real-time",
  },
  {
    icon: "fas fa-chart-line",
    title: "Progress Tracking",
    desc: "Monitor progress with visual dashboards",
  },
  {
    icon: "fas fa-file-alt",
    title: "Document Management",
    desc: "Store and share docs in one place",
  },
];

export default function Features() {
  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-title">
          <h2>Our features</h2>
        </div>

        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} className="feature-card">
              <div className="feature-icon">
                <i className={f.icon} />
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
