import styled from "styled-components/macro"
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
    position: fixed;
    z-index: 99;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0; 
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(3px);
`;

export const Inner = styled.div`
    overflow-y: auto;
    position: relative;
    z-index: 110;
    width: 90%;
    height: 90%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(253, 250, 246, 1);
    border-radius: 24px;
    .cross {
        position: absolute;
        background: transparent;
        border: none;
        outline: none;
        right: 28px;
        top: 0px;
        opacity: 0.8;
        svg {
            width: 56px;
        }
        &:hover {
            transform: scale(1.1);
            transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 0.94);
            cursor: pointer;
            opacity: 1;
        }
    }

    @media(max-width: 556px) {
        .cross {
            top: -24px;
            svg {
                width: 36px;
            }
        }
    }

    @media(max-width: 425px) {
        height: 98%;
        width: 98%;
    }
`;

export const ProductsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2.7rem;
    @media(max-width: 800px) {
        padding: 0;
        padding-top: 64px;
        padding-bottom: 24px;
    }
`;

export const NoLoveWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        margin-top: -76px;
        font-family: "Poppins", sans-serif;
        font-size: 32px;
    }
    svg {
        margin-top: 64px;
        width: 320px;
        height: 320px;
    }

    @media(max-width: 442px) {
        h1 {
            margin-top: -46px;
            text-align: center;
            font-size: 24px;
        }
        svg {
            width: 224px;
            height: 224px;
        }
    }
`;

export const Product = styled.div`
    @media(max-width: 800px) {
        width: 180px;
        height: 180px;
        .meta {
            h3 {
                width: 200px !important;
                font-size: 16px !important;
            }
            span {
                font-size: 15px !important;
            }
        }
    }


    @media(max-width: 800px) {
        width: 124px;
        height: 124px;
    }

    @media(max-width: 368px) {
        width: 86px;
        height: 86px;
        .meta {
            h3 {
                width: 164px !important;
            }
            button {
                margin-top: 4px !important;
                width: 86px !important;
                height: 28px !important;
            }
        }
    }


    display: flex;
    margin-bottom: 16px;
    width: 220px;
    height: 220px;
        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }
    .meta {
        display: flex;
        flex-direction: column;
        a {
            h3 {
                font-family: "Poppins", sans-serif;
                font-size: 18px;
                width: 320px;
                font-weight: 500;
                margin-top: 2px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                color: rgba(0, 0, 0, 0.9);
                    &:hover {
                        cursor: pointer;
                        color: rgba(0, 0, 0, 1);
                    }
            }
        }
        span {
            font-family: "Poppins", sans-serif;
        }
        button {
            margin-top: 16px;
            width: 92px;
            height: 38px;
            font-family: "Poppins", sans-serif;
            font-size: 15px;
            outline: none;
        &:hover {
            cursor: pointer;
        }
    }

`;