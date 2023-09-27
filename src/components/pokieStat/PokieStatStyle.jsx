import styled from 'styled-components';

export const PokieStatStyle = styled.div`
  /* margin: 3rem 5rem; */
  padding-bottom: 3rem;

  .section-title {
    text-transform: capitalize;
    font-weight: 800;
    color: #ddebff;
    font-size: 2.5rem;
  }

  ul li {
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 400;
    text-transform: capitalize;
  }

  progress {
    width: 80%;
  }

  /* Media Responsiveness */
  @media (max-width: 768px) {
    .section-title {
      font-size: 1.8rem;
    }

    ul li {
      font-size: 1.2rem;
      line-height: 2.5rem;
    }

    progress {
      width: 70%;
    }
  }

  @media (max-width: 600px) {
    .section-title {
      font-size: 1.5rem;
    }

    ul li {
      font-size: 1.5rem;
      line-height: 2.5rem;
    }
  }
`;
