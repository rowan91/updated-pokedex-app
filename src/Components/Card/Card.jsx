import React from "react";

import {
  Image,
  FlexBox,
  Info,
  Media,
  Typography,
  Anchor,
  LinkText,
  Button,
  Name,
  PriceWrapper,
} from "./Card.styles";

export default function SimpleCard({ pokemon }) {
  const { name, quantity, price, asset, code, issuer } = pokemon;

  return (
    <FlexBox className="card hoverable">
      <Media>
        <Image src={`./img/${name}.png`} />
        <Typography>{quantity}</Typography>
      </Media>

      <Info>
        <Name
          href={`https://stellar.expert/explorer/public/asset/${name}-${asset}`}
        >
          <LinkText>{name}</LinkText>
        </Name>

        <PriceWrapper>
          <Typography>{price}</Typography>

          {code === "XLM" ? (
            <Anchor
              href={`https://stellar.expert/explorer/public/asset/${code}`}
            >
              <LinkText>{code}</LinkText>
            </Anchor>
          ) : (
            <Anchor
              href={`https://stellar.expert/explorer/public/asset/${code}-${issuer}`}
            >
              <LinkText>{code}</LinkText>
            </Anchor>
          )}
        </PriceWrapper>

        <Anchor
          href={`https://stellarport.io/exchange/${asset}/${name}/${issuer}/${code}/`}
        >
          <Button className="waves-effect green btn pulse">CATCH IT!</Button>
        </Anchor>
      </Info>
    </FlexBox>
  );
}
