import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0.3rem;

  /*@media only screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr;
  }*/

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
`;
