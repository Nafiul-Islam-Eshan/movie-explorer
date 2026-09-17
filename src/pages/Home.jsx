import { Link } from "react-router";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import bgPic from "../assets/heroPic.jpg";

const Home = () => {
  return (
    <>
      <Navbar />
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${bgPic})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">DISCOVER MOVIES</h1>
            <p className="mb-5">
              Every movie tells a story. Some make you laugh, some make you think, some take you to places you've never been, and some stay with you long after the credits roll. Discover the world of cinema, explore movies across different genres and countries, and find the next story worth giving your time to.
            </p>
            <Link to='/movies' className="btn btn-primary">Explore Now</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
