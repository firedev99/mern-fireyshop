import styled from "styled-components/macro"

export const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    padding: 16px 0 16px 24px;
    button {
        &:disabled {
            opacity: 0.5;
        }
    }
    .submit_button {
        padding: 10px 42px;
        font-size: 15px;
        border-radius: 12px;
        border: none;
        outline: none;
        background: rgba(52, 152, 219,1.0);
        color: rgba(255, 255, 255, 0.9);
    }
    .color {
        margin-top: 16px;
    }

    @media(max-width: 556px) {
        padding: 0;
        h1 {
            white-space: nowrap;
        }
    }
    @media(max-width: 320px) {
        h1 {
            font-size: 27px;
        }
    }
`;

export const PostWrapper = styled.div`
    max-width: 480px;
    @media(max-width: 768px) {
        margin-bottom: 24px;
    }
`;

export const InputWrapper = styled.div`
    margin: 10px 0;
    input {
        text-indent: 4px;
        font-size: 16px;
        height: 34px;
        border-radius: 4px;
        border: 1px solid black;
        outline: none;
    }
`;


export const CheckboxWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0;
    input {
        margin:  2px 6px 0 0;
    }
    span {
        margin: 0.5px 8px 0 0;
        font-weight: 500;
    }
`;
export const ImageWrapper = styled.div`
    .single_upload {
        margin: 10px 0 5px 0;
    }
    button {
    background: rgba(52, 152, 219,1.0);
    outline: none;
    color: rgba(255, 255, 255, 1);
    font-size: 16px;
    border-radius: 9px;
    cursor: pointer;
    margin-bottom: 18px;
    padding: 10px 17px;
    border: none;
    &:hover {
      cursor: pointer;
    }
}
`;

export const FeatureWrapper = styled.div`
    margin-top: 16px;
    width: 100%;
    display: flex;
    &:hover {
        .color_add {
            opacity: 1;
        }
        .size_add {
            opacity: 1;
        }
    }
    .size_add {
        transition: all 0.2s;
        margin-top: -26px;
        opacity: 0;
        background: transparent;
        border: none;
        outline: none;
        svg {
            width: 30px;
            height: 30px;
            &:hover {
                cursor: pointer;
            }
        }
    }
    .color_add {
        transition: all 0.2s;
        margin-top: -59px;
        opacity: 0;
        background: transparent;
        border: none;
        outline: none;
        svg {
            width: 30px;
            height: 30px;
            &:hover {
                cursor: pointer;
            }
        }
    }
    input[type=text] {
        outline: none;
        text-indent: 5px;
        margin-top: -5px;
        margin-right: 16px;
        width: 360px;
        height: 32px;
        border: 1px solid rgba(0, 0, 0, 1);
        border-radius: 6px;
        font-size: 15px;
    }


    @media(max-width: 320px) {
        input {
            max-width: 248px;
        }
    }
`;

export const CustomWrapper = styled.div`
    margin-top: 16px;
    width: 100%;
    display: flex;
    &:hover {
        .color_add {
            opacity: 1;
        }
        .size_add {
            opacity: 1;
        }
    }
    .size_add {
        transition: all 0.2s;
        margin-top: -26px;
        opacity: 0;
        background: transparent;
        border: none;
        outline: none;
        svg {
            width: 30px;
            height: 30px;
            &:hover {
                cursor: pointer;
            }
        }
    }
    .color_add {
        transition: all 0.2s;
        margin-top: -59px;
        opacity: 0;
        background: transparent;
        border: none;
        outline: none;
        svg {
            width: 30px;
            height: 30px;
            &:hover {
                cursor: pointer;
            }
        }
    }
    input[type=text] {
        outline: none;
        text-indent: 5px;
        margin-top: -5px;
        margin-right: 16px;
        width: 200px;
        height: 32px;
        border: 1px solid rgba(0, 0, 0, 1);
        border-radius: 6px;
        font-size: 15px;
    }

    @media(max-width: 425px) {
        flex-direction: column;
        input {
            margin-bottom: 10px;
        }
        input[type=file] {
            margin-top: 10px;
        }
    }
`;

export const ColorImage = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: -5px;
    button {
        margin-top: 6px;
        background: rgba(52, 152, 219,1.0);
        outline: none;
        color: rgba(255, 255, 255, 1);
        font-size: 16px;
        border-radius: 9px;
        cursor: pointer;
        margin-bottom: 18px;
        height: 32px;
        width: 132px;
        border: none;
    }
`;

export const VarietyPreview = styled.div`
    padding: 0 16px;
    width: 200px;
    margin-bottom: 24px;
`;
export const Preview = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    h3 {
        font-size: 19px;
        margin: 0 0 -4px 0;
    }
    &:hover {
        button {
            opacity: 1;
        }
    }
    button {    
            opacity: 0;
            transition: 0.2s all;
            position: absolute;
            right: -54px;
            outline: none;
            border: none;
            background: transparent;
            margin-top: 3px;
            &:hover {
                cursor: pointer;
            }
            svg {
                width: 24px;
                height: 24px;
            }
        }
    span {
        font-size: 20px;
        font-weight: 500;
    }
    img {
        width: 60px;
        height: 60px;
        object-fit: cover;
    }
`;
export const SizePreview = styled.div`
    margin: 4px 0;
    display: flex;
    position: relative;
    &:hover {
        button {
            opacity: 1;
        }
    }
    button {    
            opacity: 0;
            transition: 0.2s all;
            position: absolute;
            left: 40px;
            outline: none;
            border: none;
            background: transparent;
            margin-top: 3px;
            &:hover {
                cursor: pointer;
            }
            svg {
                width: 24px;
                height: 24px;
            }
        }
    span {
        border: 2px solid rgba(52, 152, 219,1.0);
        border-radius: 4px;
        width: 30px;
        text-align: center;
        font-size: 20px;
        font-weight: 500;
    } 
`;

export const FeaturePreview = styled.div`
    position: relative;
    button {
        position: absolute;
        right: 0;
    }
`;