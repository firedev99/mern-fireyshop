import styled from "styled-components/macro"
import { motion } from "framer-motion"

export const Wrapper = styled.header`
    height: 82px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled('div')`
    width: 212px;
    height: 48px;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 10;
    span {
        position: absolute;
        z-index: -2;
        left: 34px;
        bottom: 4px;
        width: 20px;
        height: 20px;
        background: rgba(255, 194, 180, 0.75);
        border-radius: 50%;
    }
    svg {
        width: 38px;
        height: 38px;
    }

    @media(max-width: 962px) {
        width: 80px;
    }

    @media(max-width: 424px) {
        width: 52px;
        svg {
            width: 30px;
            height: 30px;
        }
        span {
            width: 10px;
            height: 10px;
            bottom: 10px;
            left: 24px;
        }
    }
`;

export const SearchInput = styled.div`
    width: 100%;
    margin: 0 8px;
    min-width: 470px;
    height: 42px;
    border-radius: 8px;
    background: rgba(244, 244, 246, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    button {
        background: transparent;
        border: none;
        outline: none;
    }
    svg {
        width: 28px;
        height: 28px;
        margin-left: 8px;
    }
    input {
        width: 100%;
        height: 100%;
        outline: none;
        border-radius: 10px;
        border: none;
        background: rgba(244, 244, 246, 0.8);
        font-family: "Poppins", sans-serif;
    }

    @media(max-width: 800px) {
        min-width: 242px !important;
        margin-left: 0;
    }
    @media(max-width: 656px) {
        width: ${props => props.expanded ? '100%' : '40px'};
        min-width: 40px !important;
        margin-right: auto;
        transition: all 0.2s;
        justify-content: flex-start;
        svg {
            width: 22px;
            height: 22px;
            margin-top: 2px;
            margin-left: 3px;
        }
        input {
            display: ${props => props.expanded ? 'block' : 'none'};
            padding-right: 8px;
            text-overflow: ellipsis;
        }
        button {
            &:hover {
                cursor: pointer;
            }
        }
    }
`;

export const Meta = styled.div`
    display: flex;
    align-items: center;
    margin-left: 12px;
`;

export const Wishlist = styled(motion.div)`
    cursor: pointer;
    position: relative;
    z-index: 2;
    margin-right: 30px;
    margin-left: 6px;
     svg {
        width: 34px;
        height: 34px;
    }

    @media(max-width: 424px) {
        margin-right: 16px;
        svg {
            width: 24px;
            height: 24px;
        }
    }

    
    @media(max-width: 320px) {
        margin-right: 8px;
        svg {
            width: 20px;
            height: 20px;
        }
    }
`;

export const CartFunc = styled.div`
    cursor: pointer;
    position: relative;
    z-index: 2;
     svg {
        width: 38px;
        height: 38px;
    }
    .lilboi {
        position: absolute;
        z-index: -9;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        right: -11px;
        top: -13px;
        background: #ce1212;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .cart_counter {
        font-size: 15px;
        font-weight: 500;
        color: #fff;
    }

    @media(max-width: 424px) {
        svg {
            width: 30px;
            height: 30px;
        }
    }

    @media(max-width: 320px) {
        svg {
            width: 24px;
            height: 24px;
        }
        .lilboi {
            right: -7px;
            top: -10px;
            width: 18px;
            height: 18px;
            span {
                font-size: 13px;
            }
        }
    }
`;

export const UserProfile = styled.div`
    cursor: pointer;
    position: relative;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    margin-left: 32px;
    margin-top: -6px;
    img {
        object-fit: cover;
        height: 100%;
        width: 100%;
        border-radius: 50%;
    }

    @media(max-width: 424px) {
        margin-left: 16px;
        width: 36px;
        height: 36px;
    }

    @media(max-width: 320px) {
        margin-left: 12px;
        width: 32px;
        height: 32px;
    }
`;

export const NavWrapper = styled(motion.div)`
    position: absolute;
    border-radius: 6px;
    z-index: 55;
    right: 0;
    background: rgba(236, 240, 241,1.0);
    width: 124px;
    padding: 14px 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    span, a {
        color: rgba(0, 0, 0, 0.9);
        font-family: "Poppins", sans-serif;
        letter-spacing: 0.5px;
        transition: 0.2s all;
        font-size: 17px;
        &:hover {
            cursor: pointer;
            font-weight: 500;
        }
    }
`;