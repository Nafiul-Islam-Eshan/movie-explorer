import { MdOutlineMovie } from "react-icons/md";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm md:px-9">
      <div className="navbar-start">
        <Link to="/" className="flex gap-2 items-center text-xl md:text-2xl xl:text-3xl"> 
          <MdOutlineMovie size={40} color="blue"/>
          <span className="bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold">Movie Explorer</span>
        </Link>
      </div>
      <div className="navbar-end">
        <NavLink to='/movies' 
        className={
          ({isActive}) => `text-lg font-medium ${
            isActive
              ? "btn btn-primary"
              : "btn btn-outline"
          }`
          }>Movies</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
