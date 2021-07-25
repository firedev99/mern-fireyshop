import styled from "styled-components/macro";
import { motion } from "framer-motion";

export const ProductWrapper = styled(motion.div)`
    width: 100%;
    min-width: 188px;
    min-height: 274px;
    border-radius: 14px;
    position: relative;
    @media(max-width: 414px) {
        min-width: 156px;
    }
    @media(max-width: 346px) {
        min-width: 144px;
    }
`;

export const ImageWrapper = styled.div`
    width: 100%;
    height: 232px;
    background: rgba(244, 244, 246, 0.8);
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
    display: flex;
    flex-direction: column;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    @media(max-width: 414px) {
        height: 186px;
    }

    @media(max-width: 346px) {
        height: 156px;
    }

    @media(max-width: 324px) {
        height: 256px;
    }
`;
export const ProductDetails = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    a{
        color: #000000;
        h3 { 
            font-family: "Poppins", sans-serif;
            font-size: 18px;
            font-weight: 500;
            margin-top: 2px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        &:hover {
            text-decoration: underline;
        }
    }
    span {
        margin-top: -4px;
        max-width: 220px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    @media(max-width: 1280px) {
        a {
            h3 {
                font-size: 16px;
            }
        }
        span {
            font-size: 15px;
        }
    }

    @media(max-width: 360px) {
        a {
            h3 {
                font-size: 15px;
            }
        }
        span {
            font-size: 14px;
        }
    }

    
`;
export const Pricing = styled.div`
    width: 100%;
    height: auto;
    h3 {
        font-family: "Poppins", sans-serif;
        font-size: 18px;
        font-weight: 500;
        margin-top: 2px;
    }

    @media(max-width: 414px) {
        h3 {
            font-size: 16px;
        }
    }
`;
export const Meta = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media(max-width: 1280px) {
        span {
            display: none;
        }
    }
    
`;

export const AddItem = styled.div`
    cursor: pointer;
    margin-top: -4px;
    svg {
        width: 24px;
        height: 24px;
    }
`;


export const Wishlist = styled(motion.div)`
    position: absolute;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 8px;
    right: 8px;
    cursor: pointer;
    svg {
        width: 20px;
        height: 20px;
    }
`;