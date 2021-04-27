import React from "react";

import {
  Image,
  Flex,
  Info,
  Media,
  Typography,
  Anchor,
  SecondaryText,
  Button,
} from "./Card.styles";

export default function SimpleCard({ pokemon }) {
  const { name, quantity, price, asset, code, issuer } = pokemon;

  return (
    <Flex className="card hoverable">
      <Media>
        <Image src={`./img/${name}.png`} />
      </Media>

      <Info>
        <Typography>{name}</Typography>
        <Anchor
          href={`https://stellar.expert/explorer/public/asset/${name}-${asset}`}
        >
          Max Qty:
          <SecondaryText>{quantity}</SecondaryText>
        </Anchor>
        <Typography>
          {price}
          <SecondaryText>{code}</SecondaryText>
        </Typography>
        <Anchor
          href={`https://stellarport.io/exchange/${asset}/${name}/${issuer}/${code}/`}
        >
          <Button className="waves-effect green btn pulse">CATCH IT!</Button>
        </Anchor>
      </Info>
    </Flex>
  );
}
