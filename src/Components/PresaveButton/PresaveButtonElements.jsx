import styled from "styled-components";

export const ButtonContainer = styled.div`
    z-index: 3;
`

export const Button = styled.button`
    background-color: #F3FA16;
    color: #000;
    font-size: 20px;
    font-weight: bold;
    width: 300px;
    height: 8vh;
    border: 2px solid #000;
    border-radius: 50px;
    padding: 5px 25px 5px 25px;
    box-shadow: 1px 6px #000;
    cursor: pointer;

    @media (min-width: 768px) {
        height: 6vh;
    }

    @media (min-width: 1025px) {
    }         
`

export const SpotifyIcon = styled.img`
    width: 10px;
    height: 10px;
`

export const ButtonText = styled.p`
    
`