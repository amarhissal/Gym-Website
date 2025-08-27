import Modal from "./Modal";
import { Form } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function NewBlog() {
  const navigate = useNavigate();

  function handleClose() {
    console.log("closed");
    navigate("/admin");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const resData = await fetch("https://gym-backend-t10t.onrender.com/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = resData.json();
    if (resData.ok) {
      console.log("user added successfully");
      navigate("/blogs");
    } else {
      console.log(result);
    }
  }

  return (
    <>
      <Modal>
        <div className="modal-content">
          <button className="close-button" onClick={handleClose}>
            X
          </button>
          <h2 className="heading">Add New Blog</h2>
          <Form onSubmit={handleSubmit}>
            <div className="form">
              <label htmlFor="title">Title</label>
              <input type="text" id="title" name="title" required />
            </div>
            <div className="form">
              <label htmlFor="description">Description</label>
              <input type="text" id="description" name="description" required />
            </div>
            <div className="form">
              <label htmlFor="content">Content</label>
              <input type="text" id="content" name="content" required />
            </div>
            <div className="form">
              <label htmlFor="image">Image Type</label>
              <select
                style={{
                  padding: "10px",
                  fontSize: "16px",
                  border: "1px solid #f4a261",
                  borderRadius: "5px",
                  backgroundColor: "#2c2f33",
                  color: "white",
                }}
                className="option"
                id="plan"
                name="image"
                required
              >
                <option value="" disabled>
                  Choose a Image Type
                </option>
                <option value="yoga">yoga</option>
                <option value="fitnessImage">fitnessImage</option>
                <option value="excercise">excercise</option>
              </select>
            </div>
            <button type="submit" className="submit-button">
              Add Blog
            </button>
          </Form>
        </div>
      </Modal>
    </>
  );
}

export default NewBlog;
