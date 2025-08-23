import "./Register.css";
function Register() {
  return (
    <>
      <div className="background">
        <div className="container">
          <h1 cl>Join the Best Gym now</h1>
          <form action="">
            <div className="formgroup">
              <input type="text" placeholder="Enter Your Name" />
            </div>
            <div className="formgroup">
              <input type="text" placeholder="Enter Your Age" />
            </div>
            <div className="formgroup">
              <input type="text" placeholder="Enter Your Gender" />
            </div>
            <div className="formgroup">
              <input type="text" placeholder="Enter Your Phone No." />
            </div>
          </form>
          <button className="btn-submit">Submit</button>
        </div>
      </div>
    </>
  );
}

export default Register;
