import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { SearchBox } from "./Components/Search/Search";
import CenteredGrid from "./Components/CardList/CardList";

import PokemonContext from "./Context/PokemonsContext";

import Pokemons from "./State/Pokemons";

function App() {
  const [pokemons] = useState(Pokemons);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Container maxWidth="md">
      <PokemonContext.Provider
        value={{
          pokemons,
          searchTerm,
          setSearchTerm,
        }}
      >
        <SearchBox />
        <CenteredGrid />
      </PokemonContext.Provider>
    </Container>
  );
}

export default App;
