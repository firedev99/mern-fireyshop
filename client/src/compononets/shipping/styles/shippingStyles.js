import styled, { keyframes } from "styled-components/macro";

export const Wrapper = styled.div`
    width: 372px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media(max-width: 425px) {
        width: 100%;
    }
`
// buy now button animation
const MoveRightInitial = keyframes`
    to {
        transform: translate3d(105%, 0, 0);
    }
`;
const MoveRightEnd = keyframes`
    from {
        transform: translate3d(-100%, 0, 0);
    }
    to {
        transform: translate3d(0, 0, 0);
    }
`;

export const Inner = styled.div`
    position: relative;
    background: rgba(244, 244, 246, 0.7);
    border-radius: 14px;
    padding: 24px 20px;
    h3 {
        font-size: 22px;
        letter-spacing: 0.2px;
        font-weight: 600;
    }
    .buy_button {
            margin-top: 24px;
            height: 72px;
            width: 100%;
            border: none;
            overflow: hidden;
            position: relative;
            span {
                overflow: hidden;
                font-family: "Poppins", sans-serif;
                color: #fff;
                font-size: 18px;
                font-style: italic;
                font-weight: 500;
                display: block;
                position: relative;
                z-index: 1;
                mix-blend-mode: difference;
            }
            &:before {
                position: absolute;
                left: 0;
                top: 0;
                content: '';
                background: #000;
                width: 120%;
                height: 100%;
                transform: translate3d(-100%,0,0);
            }

            &:after {
                position: absolute;
                content: '';
                top: 0;
                left: 0;
                background: #000;
                width: 105%;
                height: 100%;
                transform: translate3d(100%,0,0);
                transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);
            }

            &:hover {
                cursor: pointer;
                span > span {
                    animation: ${MoveRightInitial} 0.2s forwards, ${MoveRightEnd} 0.4s forwards 0.2s;
                }
                &:before {
                    transform: translate3d(0,0,0);
                    transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);
                }
                &:after {
                    transform: translate3d(0,0,0);
                    transition: transform 0.01s 0.3s cubic-bezier(0.7, 0, 0.2, 1);
                }
            }
    }


    @media(max-width: 425px) {
        h3 {
            font-size: 18px;
        }   
        .indivisual {
            font-size: 16px;
        }
    }

    @media(max-width:352px) {
        h3 {
            font-size: 17px;
        }   
        .indivisual {
            font-size: 15px;
        }
    }

    @media(max-width: 320px) {
        h3 {
            font-size: 16px;
        } 
    }
`
export const UserSection = styled.div`
    margin-top: 20px;
    svg {
        margin: 3px 6px 0 2px !important;
        opacity: 0.8;
        fill: #78c4d4;
        width: 18px !important;
        height: 18px !important;
    }
`
export const ShippingAddress = styled.div`
    margin-top: 12px;
    position: relative;
    .edit_button_active {
        transform: rotate(45deg);
    }
    .edit_button {
        top: 0;
        background: transparent;
        padding: 0;
        border: 0;
        transition: all 0.2s;
        opacity: 0.85;
        position: absolute;
        right: 0px;
        svg {
            width: 32px;
            height: 32px;
        }
        &:hover {
            cursor: pointer;
            transform: rotate(45deg);
        }
    }


    @media(max-width: 425px) {
        .edit_button {
            top: -2px;
            svg {
                width: 28px;
                height: 28px;
            }
        }
    }

    @media(max-width: 320px) {
        .edit_button {
            right: -8px;
        }
    }

    
`
export const PriceTag = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 8px 0;
    span, h3 {
        font-size: 18px;
    }
`
export const TotalPrice = styled.div`
    margin-top: 20px;
`
export const InlineWrapper = styled.div`
    display: flex;
    padding: 6px 0;
    margin-left: 4px;
    overflow: hidden;
    svg {
        stroke: #78c4d4;
        margin: 1px 5px 0 0;
        width: 21px;
        height: 21px;
    }


    @media(max-width: 425px) {
        font-size: 16px;
    }
    @media(max-width:352px) {
        font-size: 15px;
    }
`