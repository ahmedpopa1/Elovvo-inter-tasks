import React from "react";

function Features() {
  const features = [
    {
      title: "Easy to Use",
      desc: "Simple interface to add and manage tasks quickly.",
    },
    {
      title: "Smart Scheduling",
      desc: "Plan tasks with built-in calendar integration.",
    },
    {
      title: "Collaboration",
      desc: "Share tasks with your team effortlessly.",
    },
  ];

  return (
    <section className="features">
      <h2>Features</h2>
      <div className="feature-list">
        {features.map((f, index) => (
          <div className="feature" key={index}>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
