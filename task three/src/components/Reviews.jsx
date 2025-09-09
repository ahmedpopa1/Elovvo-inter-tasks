import React from "react";

function Reviews() {
  const reviews = [
    {
      name: "Aisha",
      text: "TaskFlow changed my life! I’m so much more productive now.",
    },
    { name: "James", text: "The best task manager app I've ever used." },
    { name: "Aisha", text: "Clean, simple, and super effective. Love it!" },
  ];

  return (
    <section className="reviews">
      <h2>User Reviews</h2>
      <div className="review-list">
        {reviews.map((r, index) => (
          <div className="review" key={index}>
            <p>"{r.text}"</p>
            <span>- {r.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;
