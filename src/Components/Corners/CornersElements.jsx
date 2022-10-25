import styled from "styled-components";

export const CornersContainer = styled.div`
`

export const RightTop = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    width: 40vw;
    height: auto;
    z-index: 2;

    @media (min-width: 768px) {
        width: 30vw;
    }

    @media (min-width: 1025px) {
        width: 20vw;
    }            
`
export const LeftTop = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 40vw;
    height: auto;
    z-index: 2;

    @media (min-width: 768px) {
        width: 30vw;
    }

    @media (min-width: 1025px) {
        width: 20vw;
    }   
`

export const RightBottom = styled.img`
    position: absolute;
    bottom: -5px;
    right: 0;
    width: 40vw;
    height: auto;
    z-index: 3;

    @media (min-width: 768px) {
        width: 30vw;
    }

    @media (min-width: 1025px) {
        width: 20vw;
    }   
`

export const LeftBottom = styled.img`
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 40vw;
    height: auto;
    z-index: 3;

    @media (min-width: 768px) {
        width: 30vw;
    }

    @media (min-width: 1025px) {
        width: 20vw;
    }   
`