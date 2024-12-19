import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div>
      <Navbar></Navbar>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
}

export default RootLayout;
