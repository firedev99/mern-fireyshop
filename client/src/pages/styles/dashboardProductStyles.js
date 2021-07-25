import styled from "styled-components/macro"

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 16px;
    button {
        background: rgba(27, 32, 33, 1);
        border: none;
        border-radius: 8px;
        width: 186px;
        height: 58px;
        outline: none;
        margin-bottom: 24px;
        font-family: "Poppins", sans-serif;
        font-size: 17px;
        text-transform: uppercase;
        white-space: nowrap;
        color: rgba(255, 255, 255, 0.8);
        transition: all 0.2s;
        &:hover {
            cursor: pointer;
            color: rgba(255, 255, 255, 1);
        }
    }
`;

export const ProductList = styled.div`
    width: 100%;
    height: auto;
    margin-bottom: 42px;
    display: grid;
    grid-gap: 32px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    @media (max-width: 1120px) {
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    @media (max-width: 1024px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    @media (max-width: 768px) {
        grid-gap: 16px;
        margin-bottom: 52px;
    }

    @media (max-width: 612px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    
    @media (max-width: 324px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`;

export const Product = styled.div`
    .func {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: -4px;
        span {
            margin: 0 2px;
            width: 42px;
            height: 42px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s;
            &:hover {
                cursor: pointer;
                background: rgba(220, 221, 225, 0.5);
                svg {
                    transition: all 0.2s;
                    stroke: rgba(0, 0, 0, 1);
                }
            }
        }
    }
    .img {
        background: rgba(244, 244, 246, 0.8);
        border-top-left-radius: 14px;
        border-top-right-radius: 14px;
        height: 196px;
        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }
    .meta {
        h3 {
            margin-top: 6px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-weight: 500;
            font-size: 16px;
        }
        h4 {
            font-style: italic;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        span {
            font-size: 15px;
        }
    }
`;