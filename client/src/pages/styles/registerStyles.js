import styled from "styled-components/macro";

export const Wrapper = styled.div`
        width: 100%;
        max-height: calc(100vh - 156px);
        display: flex;
        align-items: center;
        justify-content: center;
`;

export const InputWrapper = styled.div`
    margin: 26px 0;
    &:first-of-type {
        margin-top: 0;
    }
    label {
        position: absolute;
        z-index: -1;
        left: 9px;
        margin-top: 10px;
    }
    input {
        width: 100%;
        height: 44px;
        position: relative;
        background: transparent;
        outline: none;
        border-radius: 10px;
        border: 2px solid rgba(255, 255, 255, 0.7);
        color: rgba(255, 255, 255, 0.8);
        font-family: "Poppins", san-serif;
        font-size: 14px;
        text-indent: 5px;
        &:focus {
            border: 2px solid rgba(255, 255, 255, 0.9);
        }
        &:focus ~ label, &:valid ~ label{
            transform: translateY(-32px);
            left: 8px;
            font-size: 14px;
        }
    }

    @media(max-width: 800px) {
        margin: 18px 0;
    }
`;

export const RegistrationForm = styled.div`
    color: white;
    font-family: 'Poppins', sans-serif;
    h1 {
        font-size: 30px;
        margin-bottom: 28px;
        text-align: center;
    }
    h3 {
        text-align: center;
        margin-top: 12px;
        font-size: 15px;
        color: rgba(255, 255, 255, 0.9);
        font-weight: 400;
        a {
            color: rgba(41, 128, 185, 0.8);
            font-size: 16px;
            transition: all 0.2s;
            font-weight: 600;
            margin-left: 4px;
            &:hover {
                cursor: pointer;
                color: rgba(41, 128, 185, 1);
            }
        }
    }
    button {
        margin-top: 0;
        width: 100%;
        padding: 12px 0;
        background: rgb(34,139,34, 0.8);
        outline: none;
        border: none;
        border-radius: 10px;
        color: rgba(255, 255, 255, 0.7);
        font-family: "Poppins", sans-serif;
        font-size: 16px;
        letter-spacing: 0.6px;
        transition: all 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
            &:disabled {
                opacity: 0.5;
            }
            &:hover {
                cursor: pointer;
                background: rgb(34,139,34, 0.9);
                color: rgba(255, 255, 255, 0.9);
            }
    }

    @media(min-width: 800px) {
        position: absolute;
        z-index: 10;
        top: 50%;
        right: 0;
        transform: translate(-50%, -50%);
    }

    @media(max-width: 800px) {
        position: relative;
        z-index: 10;
        max-width: 420px;
        margin: 0 auto;
    }

    @media(max-width: 486px) {
        h1 {
            font-size: 24px;
        }
        h3 {
            font-size: 14px;
        }
    }
`;

export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    background-image: linear-gradient(170deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7));
    position: absolute;
    z-index: 4;
    top: 0;
    left: 0;
`;

export const LoginWrapper = styled.div`
    width: 100%;
    height: 100%;
    img {
        height: 100%;
        width: 100%;
        position: absolute;
        z-index: 2;
        top: 0;
        left: 0;
        object-fit: cover;
    }
`;