import styled from "styled-components";

export const Image = styled.img`
  object-fit: cover;
  display: block;
  height: 100px;
  padding: 10px;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Media = styled.div``;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 0.25rem;
`;
export const Typography = styled.p`
  font-family: "Press Start 2P", cursive;
  font-size: 0.6rem;
  display: flex;
  align-items: center;
`;

export const Anchor = styled.a`
  font-family: "Press Start 2P", cursive;
  color: black;
  font-size: 0.6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SecondaryText = styled.p`
  font-family: "Press Start 2P", cursive;
  color: blue;
  font-size: 0.6rem;
  margin-left: 0.16rem;
`;

export const Button = styled.button`
  font-family: "Press Start 2P", cursive;
  font-size: 0.6rem;
`;
