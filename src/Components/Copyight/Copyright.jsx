import React from "react";
import { Typography, Container } from "./Copyright.styles";

const Copyright = () => {
  return (
    <Container>
      <Typography>
        © 2021 Stellar Pokedex is a game developed on the Stellar Lumens
        Blockchain. Please do your own research before acquiring any
        tokens/assets on the Stellar Network. You should always be obtaining
        current information and performing appropriate due diligence before
        making any trades or investment decisions.
      </Typography>
    </Container>
  );
};

export default Copyright;
