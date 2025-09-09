import React from "react";

function Pricing() {
  const plans = [
    { name: "Free", price: "$0", desc: "Basic features for personal use." },
    {
      name: "Pro",
      price: "$9/mo",
      desc: "Advanced features for professionals.",
    },
    { name: "Team", price: "$19/mo", desc: "Collaborate with your team." },
  ];

  return (
    <section className="pricing">
      <h2>Pricing</h2>
      <div className="pricing-list">
        {plans.map((p, index) => (
          <div className="plan" key={index}>
            <h3>{p.name}</h3>
            <h4>{p.price}</h4>
            <p>{p.desc}</p>
            <button>Choose Plan</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
