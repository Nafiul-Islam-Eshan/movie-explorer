import { useState } from "react";

const SearchBar = ({ setSearchTerm}) => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    setSearchTerm(input);
  };

  return (
    <div className="my-5 inline-flex justify-center items-center ">
      <input
        type="text"
        placeholder="Search movies"
        className="input input-primary"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSearch} className="btn btn-primary" type="button">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
