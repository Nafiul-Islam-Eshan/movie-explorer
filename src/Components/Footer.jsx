import { MdOutlineMovie } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-100 rounded-base shadow-sm">
      <div className="w-full mx-auto max-w-screen p-4 md:flex md:items-center md:justify-between">
        <span className="text-md sm:text-center">
          © 2026 MovieExplorer. All Rights Reserved.
        </span>

        <div className="flex gap-2 items-center text-xl md:text-2xl xl:text-3xl"> 
          <MdOutlineMovie size={40} color="blue"/>
          <span className="bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold">Movie Explorer</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
