import "./App.css";
import Navbar from "./Components/Navbar";
import Register from "./Components/Routes/Register";

function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>

      <Register></Register>
    </>
  );
}

export default App;
