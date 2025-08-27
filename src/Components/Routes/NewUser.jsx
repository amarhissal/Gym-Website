import "./NewUser.css"; // Include the updated CSS file
import Modal from "../Modal";
import { Form } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NewUser = () => {
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const resData = await fetch("https://gym-backend-t10t.onrender.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = resData.json();
    if (resData.ok) {
      console.log("user added successfully");
      navigate("/admin");
    } else {
      console.log(result);
    }
  }

  function handleClose() {
    console.log("closed");
    navigate("/admin");
  }

  return (
    <Modal>
      <div className="modal-content">
        <button className="close-button" onClick={handleClose}>
          X
        </button>
        <h2 className="heading">Add New User</h2>
        <Form onSubmit={handleSubmit}>
          <div className="form">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form">
            <label htmlFor="plan">Plan</label>
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
              name="plan"
              required
            >
              <option value="" disabled>
                Choose a Plan
              </option>
              <option value="Platinum">Platinum</option>
              <option value="Gold">Gold</option>
              <option value="Silver">Silver</option>
            </select>
          </div>
          <div className="form">
            <label htmlFor="age">Age</label>
            <input type="number" id="age" name="age" required />
          </div>
          <button type="submit" className="submit-button">
            Add User
          </button>
        </Form>
      </div>
    </Modal>
  );
};

export default NewUser;
