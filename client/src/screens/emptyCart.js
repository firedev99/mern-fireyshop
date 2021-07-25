import React from 'react'
import styled from "styled-components/macro"
// scene
import { ReactComponent as Scene } from "../assests/emptyCart.svg"

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 120px;
    svg {
        height: 100%;
        width: 100%;
        width: 360px;
        height: 360px;
    }
    h1 {
        font-family: "Poppins", sans-serif;
        white-space: nowrap;
    }

    @media(max-width: 800px) {
        margin-bottom: 46px;
    }

    @media(max-width: 496px) {
        h1 {
            font-weight: 500;
            font-size: 28px;
        }

        svg {
            width: 276px;
            height: 276px;
        }
    }
`;


export default function EmptyCart() {
    return (
        <Wrapper>
            <Scene />
            <h1>Empty cart :)!</h1>
        </Wrapper>
    )
}
