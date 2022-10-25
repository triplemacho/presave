import styled from "styled-components";

export const MainHtmlContainer = styled.html`

`

export const MainBody = styled.body`
    width: 100vw;
    height: 100vh;
    margin: -2vw;
`

export const MainContainer = styled.div`
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const TextContainer = styled.div`
    width: 80%;
    height: 60vh;
`

export const ButtonLink = styled.a`
    z-index: 1;
`

export const LogoMacho = styled.img`
    width: 300px;
    height: auto;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    z-index: 3;
`

export const HeinoImg = styled.img`
    width: 150px;
    height: auto;
    position: fixed;
    bottom: -5px;
    left: 50%;
    transform: translate(-50%, 0%);
    z-index: 2;

    @media (min-width: 768px) {
        width: 30vw;
    }

    @media (min-width: 1025px) {
        width: 20vw;
        bottom: -10px;
    } 
`
export const BljatImg = styled.img`
    width: 130px;
    height: auto;
    position: fixed;
    bottom: 10vw;
    left: 0;
    transform: rotate(15deg);
    z-index: 2;

    @media (min-width: 768px) {
        left: 7vw;
        width: 25vw;
        bottom: 3vw;
    }

    @media (min-width: 1025px) {
        width: 15vw;
        left: 7vw;
        bottom: 4vh;
    } 
`

export const RovinImg = styled.img`
    width: 130px;
    height: auto;
    position: fixed;
    bottom: 20vw;
    right: -10px;
    transform: rotate(-20deg);
    z-index: 2;

    @media (min-width: 768px) {
        right: 4vw;
        width: 28vw;
        bottom: 8vw;
    }

    @media (min-width: 1025px) {
        width: 17vw;
        right: 6vw;
        bottom: 10vh;
    } 
`