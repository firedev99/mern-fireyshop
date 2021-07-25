import React from 'react';
import { ReactComponent as Scene } from "../assests/emptyProduct.svg";
import styled from "styled-components/macro";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    svg {
        height: 100%;
        width: 100%;
        padding: 3rem 14rem 0 14rem;
    }
    h1 {
        font-family: "Poppins", sans-serif;
        white-space: nowrap;
        margin-top: 2rem;
    }

    @media(max-width: 768px) {
        svg {
            margin-top: 32px;
            padding: 0;
        }
    }

    @media(max-width: 492px) {
        h1 {
            font-size: 18px;
            font-weight: 500;
        }
    }
`;

export default function NoProduct({ width }) {
    return (
        <Wrapper style={{ width: width }}>
            <Scene />
            <h1>No products found!</h1>
        </Wrapper>
    )
}
