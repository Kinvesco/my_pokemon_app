import styled from "styled-components";

export const PokiesWrap = styled.div`
  margin: 4rem 6rem;

  .pokie-card {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 2.5%;
    margin-top: 5.5rem;
    margin-bottom: 5.5rem;
  }

  .pokie-card:hover {
    cursor: pointer;
  }

  .tan-card {
  }

  /* Keyframes animation */
  @keyframes pokieAnimation {
    /* ... Animation keyframes ... */
  }

  /* ... Other styles ... */

  /* Media Responsiveness */
  @media (max-width: 1024px) {
    margin: 4rem 1rem;
  }

  @media (max-width: 768px) {
    margin: 3rem 2rem;

    .pokie-card {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-top: 5rem;
    }

    .tan-image img {
      /* ... Other styles ... */
    }
  }

  @media (max-width: 600px) {
    margin: 1rem 1rem 2.5rem 1rem;

    .pokie-card {
      display: grid;
      grid-template-columns: 1fr;
      margin-top: 5.5rem;
    }

    .tan-image img {
      /* ... Other styles ... */
    }
  }

  @media (max-width: 425px) {
    .paginate {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 5%;
    }

    .page-btn-prev {
      margin-top: -6rem;
    }
  }
`;
