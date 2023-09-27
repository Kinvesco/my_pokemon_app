import styled from 'styled-components';

export const HeaderStyle = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #ffffff;

  .app-header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2%;
    margin-bottom: 2rem;
    align-items: center;
    justify-content: center;
    display: flex;
    margin-top: 2rem;
  }

  .app-header:hover {
    cursor: pointer;
    opacity: 0.9;
  }

  .app-header img.app-logo {
    width: 100%;
    height: auto;
    max-width: 50px;
    border-radius: 3rem;
  }

  .app-header img.app-name {
    width: 100%;
    height: auto;
    max-width: 105px;
  }
`;

