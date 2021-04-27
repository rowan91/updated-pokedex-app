import React, { useContext } from "react";
import PokemonContext from "../../Context/PokemonsContext";

export const SearchBox = ({ placeholder }) => {
  const { searchTerm, setSearchTerm } = useContext(PokemonContext);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="input-field">
      <i className="material-icons prefix">search</i>
      <input
        id="search"
        className="search"
        type="search"
        autocomplete="off"
        placeholder="Search"
        onChange={handleChange}
      />
    </div>
  );
};
