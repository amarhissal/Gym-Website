import React, { useEffect, useState } from "react";
import "./Blogs.css";
import { Link } from "react-router-dom";

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      const resData = await fetch(
        "https://gym-backend-t10t.onrender.com/blogs"
      );
      const blogs = await resData.json();
      setBlogs(blogs);
    }
    fetchBlogs();
  }, []);

  return (
    <div className="blogs-container">
      <h1 className="blogs-title">Fitness Blogs</h1>
      <div className="blogs-grid">
        {blogs.map((blog, index) => (
          <Link className="blog-card" to={"/blogs/" + blog._id} key={index}>
            <img
              src={`/images/${blog.image}.png`}
              alt={blog.image}
              className="blog-image"
            />
            <div className="blog-content">
              <h2 className="blog-title">{blog.title}</h2>
              <p className="blog-description">{blog.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
