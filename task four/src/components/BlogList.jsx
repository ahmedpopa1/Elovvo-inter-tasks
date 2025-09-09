import React from "react";

function BlogList({ posts }) {
  return (
    <section className="blog-list">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} className="card">
            <img src={post.image} alt={post.title} />
            <div className="card-content">
              <h3>{post.title}</h3>
              <p>{post.desc}</p>
              <small>
                {post.date} | {post.category}
              </small>
            </div>
          </div>
        ))
      ) : (
        <p>No posts found.</p>
      )}
    </section>
  );
}

export default BlogList;
