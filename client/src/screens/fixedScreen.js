import React from 'react'
import styled, { keyframes } from 'styled-components/macro'

const bounce = keyframes`
    0%, 80%, 100% { 
        -webkit-transform: scale(0);
        transform: scale(0);
    } 
    40% { 
        -webkit-transform: scale(1.0);
        transform: scale(1.0);
    }
`

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(3px);
    position: fixed;
    z-index: 99;
    display: flex;
    flex-direction: column;
    h3 {
        position: absolute;
        left: 50%;
        top: 58%;
        color: rgba(179, 179, 179, 1);
        transform: translate(-50%, -50%);
        text-align: center;
    }
`;

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;    
    .bounce {
        margin: 0 4px;
        width: 18px;
        height: 18px;
        background-color: rgba(0, 0, 0, 0.7);
        border-radius: 100%;
        display: inline-block;
        -webkit-animation: ${bounce} 1.4s infinite ease-in-out both;
        animation: ${bounce} 1.4s infinite ease-in-out both;
    }
    .bounce1 {
        -webkit-animation-delay: -0.32s;
        animation-delay: -0.32s;
    }
    .bounce2 {
        -webkit-animation-delay: -0.16s;
        animation-delay: -0.16s;
    }
`;

export default function FixedScreen({ text }) {
    return (
        <Wrapper>
            <Container>
                <div className="bounce bounce1" />
                <div className="bounce bounce2" />
                <div className="bounce" />
            </Container>
            <h3>{text}</h3>
        </Wrapper>
    )
}
