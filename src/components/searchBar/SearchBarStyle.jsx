import styled from 'styled-components';

export const SearchBarWrap = styled.div`
  margin-top: 8rem;

  .poketan-search {
    align-items: center;
    justify-content: center;
    display: flex;
  }

  .poketan-search input {
    width: 50%;
    height: 3.5rem;
    border-radius: 0 8px 0 8px;
    border: 1px solid #aeb1b3;
    padding-bottom: 2.2px;
    padding-left: 0.6rem;
    font-weight: 800;
    font-size: 1.5rem;
    text-align: center;
    font-family: "Fira Sans", sans-serif; 
    color: #000000; 
  }

  .poketan-search input::placeholder {
    color: #bdc2ca;
  }

  .poketan-search input:focus {
    outline: none;
    background-color: #F3E58A; 
  }

  .poketan-search button {
    width: 4.5rem;
    height: 3.5rem;
    border-radius: 0 6px 0 0;
    border: 1px solid #222222;
    border-right: none;
    background-color: #222222;
    color: #ffffff;
    font-weight: 800;
    font-size: 1.3rem;
    font-family: "Fira Sans", sans-serif; /* Using one consistent font-family */
  }

  .poketan-search button:hover {
    background-position: left bottom;
    cursor: pointer;
    opacity: 0.9;
    transform: scale(1.05); /* Used transform for scaling */
    color: #ffe5b4;
    background-color: #000000;
    border: 1px solid #000000;
  }

  @media (max-width: 768px) {
    .poketan-search input {
      width: 50%;
      height: 2.5rem;
      font-size: 0.9rem;
    }

    .poketan-search button {
      width: 5rem;
      height: 2rem;
      font-size: 0.8rem;
    }
  }

  @media (max-width: 425px) {
    .poketan-search {
      padding: 25px 3px;
      max-width: 690px;
      border-radius: 0.5rem;
    }

    .poketan-search input {
      width: 70%;
      height: 2.5rem;
      font-weight: 700;
      font-size: 0.8rem;
    }

    .poketan-search button {
      width: 4rem;
      height: 2rem;
      font-weight: 700;
      font-size: 0.8rem;
    }
  }

  @media (max-width: 320px) {
    .poketan-search {
      padding: 25px 7px;
      max-width: 690px;
    }

    .poketan-search input {
      width: 70%;
      height: 2.5rem;
      font-weight: 500;
    }

    .poketan-search button {
      width: 4.5rem;
      height: 2.2rem;
    }
  }
`;
