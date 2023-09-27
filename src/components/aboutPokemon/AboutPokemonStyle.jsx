import styled from "styled-components";

export const AboutPokemonStyle = styled.div`
  .section-title {
    text-transform: capitalize;
    font-weight: 900;
    color: #ff6347;
    font-size: 2.5rem;
  }

  ul li {
    font-size: 1rem;
    line-height: 2rem;
    font-weight: 500;
    text-transform: capitalize;
  }

  /* MEDIA RESPONSIVENESS */
  @media (max-width: 600px) {
    .section-title {
      font-size: 1.5rem;
    }

    ul li {
      font-size: 1.2rem;
      line-height: 2.5rem;
    }
  }
`;
