import React from "react";

const PokemonContext = React.createContext({
  pokemons: [],
  searchTerm: "",
  setSearchTerm: () => {},
});

export default PokemonContext;
