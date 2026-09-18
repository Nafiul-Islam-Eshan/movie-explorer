import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const RootLayout = () => {
  return (
    <>
    <Navbar />
      <div className="min-h-screen flex justify-center items-center ">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default RootLayout;
