import React, { useContext } from "react";

import { Grid } from "./CardList.styles";
import PokemonContext from "../../Context/PokemonsContext";

import SimpleCard from "../Card/Card";

export default function CenteredGrid() {
  const { pokemons, searchTerm } = useContext(PokemonContext);
  const filteredMonsters = pokemons.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  /*  */

  return (
    <Grid>
      {filteredMonsters.map((pokemon, i) => (
        <SimpleCard pokemon={pokemon} key={pokemon.id} />
      ))}
    </Grid>
  );
}
