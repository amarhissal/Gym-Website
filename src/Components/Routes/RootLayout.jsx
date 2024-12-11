import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}

export default RootLayout;
