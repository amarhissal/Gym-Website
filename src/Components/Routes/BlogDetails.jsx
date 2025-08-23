import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./BlogDetails.css";
function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState();

  useEffect(() => {
    async function fetchBlogDetails() {
      const resData = await fetch("http://localhost:5000/blogs/" + id);
      const blogdetail = await resData.json();
      setBlog(blogdetail);
    }
    fetchBlogDetails();
  }, []);

  return (
    <>
      {blog && (
        <div className="blog--detail-container">
          <div className="blog--card">
            <h1 className="blog--title">{blog.title}</h1>
            <img
              src={`http://localhost:3000/images/${blog.image}.png`}
              alt="Blog"
              className="blog-image"
            />
            <h3 className="blog--description">{blog.description}</h3>
            <div className="blog--content">
              {blog.content.split("\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <Link className="back-to-btn" to={"/blogs"}>
              &lt;- Back to Blogs
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default BlogDetails;
