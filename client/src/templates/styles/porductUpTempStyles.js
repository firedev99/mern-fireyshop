import styled from "styled-components/macro";

export const ProductImg = styled.div`
    width: 400px;
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`
export const ProductImgOverlay = styled.div`
    input {
        margin-top: 12px;
    }
`
export const ProductImgWrapper = styled.div`
        width: 450px !important;
        height: 548px !important;
        img {
            height: 100%;
            width: 100%;
        }
`
export const ProductMeta = styled.div`

`
export const ProductPrice = styled.div`
    h3 {
        font-weight: 400;
        input {
            font-size: 19px;
            margin-left: 2px;
        }
    }
`
export const ProductTitle = styled.div`
    input {
        width: 100%;
        height: 32px;
        font-size: 19px;
        font-family: 'Poppins', sans-serif;
    }
`
export const SideImageOptions = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
        margin-top: 8px;
    }
    .side_img_wrap {
        display: flex;
    }
    .side_img {
        width: 60px;
        height: 60px;
        margin: 6px;
        border-radius: 4px;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
        }
    }
`;


export const AvailabeSizes = styled.div`
        button {
            background: transparent;
            border: none;
            outline: none;
            svg {
                width: 32px;
                height: 32px;
                margin-top: -2px;
                &:hover {
                    cursor: pointer;
                }
            }
        }
        .push {
            margin-top: 26px;
        }
    .size_wrap {
        margin-top: 10px;
        display: flex;
    }
    .add_size {
        display: flex;
        input {
            margin-top: 24px;
            border-radius: 4px;
            width: 100%;
            height: 36px;
            border: 1px solid black;
            font-size: 16px;
        }
    }
    .sizesBox {
        &:hover {
            button {
                opacity: 1;
            }
        }
        button {
            transition: all 0.2s;
            opacity: 0;
            position: absolute;
            left: -5px;
            top: 30px;
        }
        position: relative;
        margin: 4px 6px;
        padding: 5px 12px;
        border-radius: 4px;
        border: 1px solid black;
            span {
                font-family: "Poppins", sans-serif;
                user-select: none;
            }
        &:first-of-type {
            margin-left: 0;
        }
    }
`;

export const Wrapper = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    .submit {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%);
        background: rgba(0, 0, 0, 0.96);
        border: none;
        outline: none;
        color: rgba(255, 255, 255, 0.9);
        padding: 12px 24px;
        cursor: pointer;
    }
    input {
        outline: none;
        border: none;
        font-family: 'Poppins', sans-serif;
    }
`