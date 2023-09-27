import styled from 'styled-components';
import innerBackground from '../assets/innerBackground.jpg';
export const HomePageWrap = styled.div`
    background-image: url(${innerBackground});
    background-position: right bottom;
    transition: all 0.5s ease-out;
    color: #000000;
    padding: 25px 16px;
    background-repeat: no-repeat;
    background-size: cover;

    /* Header Styles */
    .app-header {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 2%;
        margin-bottom: 2.2rem;
        align-items: center;
        justify-content: center;
        display: flex;
    }

    .app-header img.app-logo {
        width: 100%;
        height: auto;
        max-width: 50px;
        border-radius: 3.2rem;
    }

    .app-header img.app-name {
        width: 100%;
        height: auto;
        max-width: 105px;
    }
`;
