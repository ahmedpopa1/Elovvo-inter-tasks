import React from "react";

const plans = [
  {
    name: "Free",
    price: "$0",
    desc: "Perfect for individuals",
    features: [
      "Up to 5 projects",
      "5GB storage",
      "Basic task management",
      "1 user",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "$12",
    desc: "Ideal for growing businesses",
    features: [
      "Unlimited projects",
      "50GB storage",
      "Advanced management",
      "Up to 10 users",
    ],
    popular: true,
  },
  {
    name: "UltPro",
    price: "$24",
    desc: "For large organizations",
    features: [
      "Unlimited projects",
      "500GB storage",
      "Premium integrations",
      "Unlimited users",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="section-title">
          <h2>
            Choose the plan that works best for your team with a free 14-day
            trial
          </h2>
        </div>

        <div className="pricing-grid">
          {plans.map((p, i) => (
            <div
              className={`pricing-card ${p.popular ? "popular" : ""}`}
              key={i}
            >
              {p.popular && <div className="popular-badge">POPULAR</div>}
              <h3>{p.name}</h3>
              <div className="price">
                {p.price}
                <span>/user/month</span>
              </div>
              <p>{p.desc}</p>
              <ul className="pricing-features">
                {p.features.map((f, idx) => (
                  <li key={idx}>
                    <i className="fas fa-check" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={p.popular ? "btn btn-primary" : "btn btn-outline"}
              >
                {p.popular
                  ? "Get Started"
                  : p.name === "Starter"
                  ? "Get Started"
                  : "Contact Sales"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
