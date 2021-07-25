import styled from "styled-components/macro"

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: hidden;
    display: flex;

    @media(max-width: 800px) {
        flex-direction: column;
        align-items: center;
        margin-bottom: 32px;
    }
`;
export const LeftSection = styled.div`
    width: calc(100% - 372px);
    height: calc(100vh - 124px);
    overflow-y: auto;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    &::-webkit-scrollbar {
        display: none;
    }

    @media(max-width: 800px) {
        height: auto;
        width: 100%;
    }
`;

export const Products = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;

    @media(max-width: 1024px) {
        justify-content: center;
    }
`;

export const Product = styled.div`
    position: relative;
    width: 186px;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .quantity_func {
        opacity: 0;
        font-family: "Poppins", sans-serif;
        transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
        button {
            font-family: "Poppins", sans-serif;
            font-size: 18px;
            border-radius: 50%;
            border: none;
            width: 32px;
            height: 32px;
            margin: 0 6px;
            transition: transform 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
            &:hover {
                cursor: pointer;
                transform: scale(1.15);
            }
        }
    }
    .func {
        opacity: 0;
        margin-top: 4px;
        font-family: "Poppins", sans-serif;
        button {
            font-family: "Poppins", sans-serif;
            font-size: 16px;
            border-radius: 50%;
            border: 1px solid rgba(0, 0, 0, 0.6);
            margin: 0 10px;
            width: 28px;
            height: 28px;
            &:hover {
                cursor: pointer;
            }
        }
    }
    .image {
        width: 100%;
        height: 186px;
        background: rgba(244, 244, 246, 0.7);
        padding: 8px;
        border-radius: 16px;
        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }
    .meta {
        padding: 4px;
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
            span {
                font-family: "Poppins", sans-serif;
                font-size: 14px;
                font-weight: 500;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        .spash {
            color: rgba(0, 0, 0, 0.7);
            font-size: 13px;
            font-weight: 500;
            margin-left: 1px;
            line-height: 18px;
        }
    }
    .cross {
        position: absolute;
        z-index: 8;
        right: -6px;
        top: -8px;
        background: transparent;
        outline: none;
        border: none;
        svg {
            width: 32px;
            height: 32px;
            opacity: 0;
        }
        &:hover {
            cursor: pointer;
        }
    }

    &:hover {
        .quantity_func {
                opacity: 1;
            }
        .func {
            opacity: 1;
            transition: 0.2s all cubic-bezier(0.215, 0.610, 0.355, 1);
        }
        button {
            svg {
                opacity: 1;
                transition: all 1.2s cubic-bezier(0.215, 0.610, 0.355, 1);
            }
        }
    }


    @media(max-width: 468px) {
        margin: 4px 8px;
        width: 144px;
        .image {
            height: 164px;
        }
    }

    @media(max-width: 352px) {
        margin: 4px 6px;
        width: 124px;
        .image {
            height: 156px;
        }
    }
`;

export const BagWrapper = styled.div`
    margin-top: 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
        font-family: "Poppins", sans-serif;
        font-size: 24px;
        margin-top: 8px;
    }
    svg {
        width: 120px;
        height: 120px;
        opacity: 0.9;
        margin-left: -10px;
    }
    span {
        font-family: "Poppins", sans-serif;
        color: rgba(0, 0, 0, 0.7);
    }

    @media(max-width: 468px) {
        margin-bottom: 16px;
        h3 {
            font-weight: 500;
            font-size: 20px;
        }

        svg {
            width: 100px;
            height: 100px;
        }
    }

    
`;

