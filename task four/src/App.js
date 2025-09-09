import React, { useState } from "react";
import "./App.css";
import Filters from "./components/Filters";
import BlogList from "./components/BlogList";
import Pagination from "./components/Pagination";

function App() {
  const posts = [
    {
      id: 1,
      title: "React Hooks Explained",
      category: "Tech",
      date: "2025-09-01",
      image:
        "https://images.unsplash.com/photo-1549693578-d683be217e58?auto=format&fit=crop&w=800&q=80",
      desc: "A beginner-friendly guide to understanding React hooks.",
    },
    {
      id: 2,
      title: "Exploring the Alps",
      category: "Travel",
      date: "2025-08-22",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
      desc: "My unforgettable journey through the Swiss Alps.",
    },
    {
      id: 3,
      title: "Best Pasta Recipes",
      category: "Food",
      date: "2025-08-15",
      image:
        "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
      desc: "Delicious and easy pasta recipes you must try.",
    },
    {
      id: 4,
      title: "Next.js vs React",
      category: "Tech",
      date: "2025-08-10",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      desc: "Comparing Next.js and React for modern web development.",
    },
    {
      id: 5,
      title: "Street Food in Bangkok",
      category: "Food",
      date: "2025-08-05",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
      desc: "Top 5 street food dishes to try in Bangkok.",
    },
    {
      id: 6,
      title: "Backpacking in Japan",
      category: "Travel",
      date: "2025-07-30",
      image:
        "https://images.unsplash.com/photo-1549693578-d683be217e58?auto=format&fit=crop&w=800&q=80",
      desc: "Everything you need to know before backpacking in Japan.",
    },
  ];

  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 2;

  const filteredPosts = posts.filter(
    (post) =>
      (category === "All" || post.category === category) &&
      post.title.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage
  );

  return (
    <div className="App">
      <header className="header">
        <h1>My Personal Blog</h1>
      </header>
      <Filters
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        setCurrentPage={setCurrentPage}
      />
      <BlogList posts={currentPosts} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;
