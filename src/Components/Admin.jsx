import React, { useEffect, useState } from "react";
import "./Admin.css";
import { Link } from "react-router-dom";

export default function AdminPage() {
  const [selectedSection, setSelectedSection] = useState("users");
  const sections = ["users", "plans", "blogs"];
  const [users, setUsers] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [filteredUsers, setFilteredUSers] = useState(users);
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);

  useEffect(() => {
    async function fetchUser() {
      const resData = await fetch(
        "https://gym-backend-t10t.onrender.com/users"
      );
      const users = await resData.json();
      setUsers(users);
    }
    fetchUser();
  }, []);

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

  useEffect(() => {
    setFilteredUSers(users);
    setFilteredBlogs(blogs);
  }, [users, blogs]);

  function handleChange(e) {
    if (selectedSection === "users") {
      if (e.target.value === "") {
        setFilteredUSers(users);
      } else {
        const searchValue = e.target.value.toLowerCase();
        const filtered = users.filter((u) =>
          u.name.toLowerCase().includes(searchValue)
        );
        setFilteredUSers(filtered);
      }
    }
    if (selectedSection === "blogs") {
      if (e.target.value === "") {
        setFilteredBlogs(blogs);
      } else {
        const searchValue = e.target.value.toLowerCase();
        const filtered = blogs.filter((u) =>
          u.title.toLowerCase().includes(searchValue)
        );
        setFilteredBlogs(filtered);
      }
    }
  }

  async function deleteUSer(id) {
    const resData = await fetch(
      "https://gym-backend-t10t.onrender.com/users/" + id,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    );
    const result = await resData.json();
    console.log(result.message);
    const deletedUsers = filteredUsers.filter((u) => u._id !== id);
    setFilteredUSers(deletedUsers);
  }
  async function deleteBlog(id) {
    const resData = await fetch(
      "https://gym-backend-t10t.onrender.com/blogs/" + id,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    );
    const result = await resData.json();
    console.log(result.message);
    const deletedBlogs = filteredBlogs.filter((u) => u._id !== id);
    setFilteredBlogs(deletedBlogs);
  }

  const renderTable = () => {
    switch (selectedSection) {
      case "users":
        return (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Plan</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.plan}</td>
                  <td>{user.age}</td>
                  <td>
                    <button
                      onClick={() => deleteUSer(user._id)}
                      className="delete-btn"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      case "plans":
        return (
          <table>
            <thead>
              <tr>
                <th>Plan Name</th>
                <th>Price</th>
                <th>Features</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Platinum</td>
                <td>2000</td>
                <td>Access to gym with trainer</td>
              </tr>
              <tr>
                <td>Gold</td>
                <td>1500</td>
                <td>Access to gym </td>
              </tr>
              <tr>
                <td>Silver</td>
                <td>100</td>
                <td>Access to gym</td>
              </tr>
            </tbody>
          </table>
        );
      case "blogs":
        return (
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Image Type</th>
                <th>Content</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredBlogs.map((blog) => (
                <tr key={blog.id}>
                  <td>{blog.title}</td>
                  <td>{blog.description}</td>
                  <td>{blog.image}</td>
                  <td>{blog.content}</td>
                  <td>
                    <button
                      onClick={() => deleteBlog(blog._id)}
                      className="delete-btn"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      default:
        return null;
    }
  };

  return (
    <div className="admin-page">
      <div className="admin-sidebar">
        {sections.map((section) => (
          <button
            key={section}
            className={`section-btn ${
              selectedSection === section ? "active" : ""
            }`}
            onClick={() => setSelectedSection(section)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </div>

      {/* Middle Section */}
      <div className="admin-content">
        <h2>
          {selectedSection.charAt(0).toUpperCase() + selectedSection.slice(1)}{" "}
        </h2>
        {renderTable()}
      </div>

      {selectedSection !== "plans" && (
        <div className="admin-actions">
          <input
            type="text"
            placeholder={`Search in ${selectedSection}...`}
            className="search-bar"
            onChange={handleChange}
          />

          <Link
            to={selectedSection === "users" ? "new-user" : "new-blog"}
            className="add-btn"
          >
            Add New {selectedSection}
          </Link>
        </div>
      )}
    </div>
  );
}
