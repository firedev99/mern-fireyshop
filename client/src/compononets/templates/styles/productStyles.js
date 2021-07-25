import styled, { keyframes } from "styled-components/macro";

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    @media(max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const ProductImgWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 450px;
    height: 548px;
    position: relative;
    overflow: hidden;
    z-index: 19;

    @media(max-width: 896px) {
        width: 356px;
        height: 442px;
    }

    @media(max-width: 394px) {
        width: 312px;
        height: 440px;
    }
`;

export const ProductImgOverlay = styled.div`
    width: 100%;
    position: absolute;
    top: 14px;
    display: flex;
    transform: translateX(-${(props) => props.offset * 100}%);

    @media(max-width: 768px) {
        top: -28px;
    }

`;
export const ProductImg = styled.div`
    height: 450px;
    width: 450px;
    img {
        width: 450px;
        height: 450px;
        object-fit: cover;
    }

    @media(max-width: 896px) {
        width: 332px;
        height: 332px;
        img {
            width: 332px;
            height: 332px;
            object-fit: cover;
        }
    }


    @media(max-width: 768px) {
        width: 356px;
        height: 442px;
        img {
            width: 356px;
            height: 442px;
            object-fit: cover;
        }
    }

    @media(max-width: 394px) {
        width: 312px;
        height: 440px;
        img {
            width: 312px;
            height: 440px;
            object-fit: cover;
        }
    }
`;


export const SideImageOptions = styled.div`
    display: flex;
    position: absolute;
    z-index: 99;
    left: 50%;
    transform: translateX(-50%);
    bottom: 24px;
    margin-top: 6px;
        .sideImgBox {
            width: 60px;
            height: 60px;
            margin: 6px;
            border-radius: 4px;
            border: 1.5px solid rgba(179, 179, 179, 1);
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            &:first-of-type {
                margin-left: 0;
            }
            &:hover {
                cursor: pointer;
                border-radius: 4px;
            }
        }

        @media(max-width: 768px) {
            bottom: -6px;
            .sideImgBox {
                width: 42px;
                height: 42px;
            }
        }
`;

export const ProductMeta = styled.div`
    padding: 16px 0 0 28px;
    width: calc(100% - 450px);
    min-height: 520px;
    display: flex;
    flex-direction: column;

    @media(max-width: 896px) {
        width: calc(100% - 332px);
    }
    @media(max-width: 768px) {
        width: 100%;
    }
`;

export const ProductTitle = styled.div`
    width: 100%;
    height: auto;
    h3 {
        font-family: "Poppins", sans-serif;
        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
    }

    @media(max-width: 896px) {
        h3 {
            font-size: 17px;
            line-height: 24px;
        }
    }
`;

export const ReviewSection = styled.div`
    position: relative;
    margin: 6px 0 16px -2px;
    &:after {
        position: absolute;
        margin-top: 10px;
        content: '';
        width: 99%;
        height: 4px;
        background: rgba(0, 0, 0, 0.03);
        border-radius: 2px;
    }
`;

export const ProductPrice = styled.div`
    width: 100%;
    height: auto;
    margin: 16px 0 16px 0;
    position: relative;
    h3 {
        font-family: "Poppins", sans-serif;
        font-size: 24px;
        font-weight: 500;
        line-height: 28px;
    }
    &:after {
        position: absolute;
        margin-top: 10px;
        content: '';
        width: 99%;
        height: 4px;
        background: rgba(0, 0, 0, 0.03);
        border-radius: 2px;
    }
`;

export const Coupons = styled.div`
    position: relative;
    color: rgba(255, 255, 255, 0.8);
    max-width: 164px;
    background: #ff4747;
    padding: 4px 0;
    margin: 4px 9px;
    font-size: 12px;
    font-family: "Poppins", sans-serif;
    &:hover {
        cursor: pointer;
    }
    &:before {
        position: absolute;
        content: "";
        width: 16px;
        height: 26px;
        top: 0;
        left: -13px;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAsCAYAAABsSzi3AAAAAXNSR0IArs4c6QAAAJxJREFUSA1j/O/u/p+BAsBEgV6w1mFhACNjBgMj4z1yw4IRpPG/n584w8+fN4FMflINAgci46ZNL4EaV5GqGaQeORZeUWYAI6M52Qb89/JKZPj/34UcAxj/e3hcBWrWIkczSA8TJZohBpBrNVQfEzARjSYkWCCOJiRYSJBMjyYk5CJtNCGRnIBgGkYT0mhCAqUF5PYBLG2QRA8DAwBc41ZIOPfvrQAAAABJRU5ErkJggg==) 50% no-repeat;
        background-size: contain;
    }
    &:after {
        position: absolute;
        content: "";
        width: 16px;
        height: 26px;
        top: 0;
        right: -13px;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAsCAYAAABsSzi3AAAAAXNSR0IArs4c6QAAAJxJREFUSA1j/O/u/p+BAsBEgV6w1mFhACNjBgMj4z1yw4IRpPG/n584w8+fN4FMflINAgci46ZNL4EaV5GqGaQeORZeUWYAI6M52Qb89/JKZPj/34UcAxj/e3hcBWrWIkczSA8TJZohBpBrNVQfEzARjSYkWCCOJiRYSJBMjyYk5CJtNCGRnIBgGkYT0mhCAqUF5PYBLG2QRA8DAwBc41ZIOPfvrQAAAABJRU5ErkJggg==) 50% no-repeat;
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
        background-size: contain;
    }
`;


export const AvailableColors = styled.div`
    margin: 16px 0;
    display: flex;
    flex-direction: column;
    span {
        font-family: "Poppins", sans-serif;
        opacity: 0.85;
    }
`;

export const ColorOptions = styled.div`
    display: flex;
    .colorBox {
        width: 60px;
        height: 60px;
        margin: 6px;
        border-radius: 4px;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        &:first-of-type {
            margin-left: 0;
        }
        &:hover {
            cursor: pointer;
            border-radius: 4px;
        }
    }
`;
export const AvailableSizes = styled.div`
    width: 100%;
    height: 100%;
    margin: 6px 0 24px 0;
    span {
        font-family: "Poppins", sans-serif;
        opacity: 0.9;
    }
`;
export const SizeOptions = styled.div`
    display: flex;
    flex-wrap: wrap;
    .sizesBox {
        margin: 4px 6px;
        padding: 5px 14px;
        border-radius: 4px;
            span {
                font-family: "Poppins", sans-serif;
                user-select: none;
            }
        &:first-of-type {
            margin-left: 0;
        }
        &:hover {
            cursor: pointer;
            border-radius: 4px;
            border: 2px solid rgba(0, 0, 0, 0.7) !important; 
        }
    }

    @media(max-width: 536px) {
        justify-content: center;
    }
`;

export const Quantity = styled.div`
    margin: 0 0 32px 0;
    display: flex;
    align-items: center;
    .quantity_instance {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 142px;
        span {
            font-size: 18px;
        }
    }
    span {
        font-size: 16px;
        font-family: "Poppins", sans-serif;
    }
    button {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 1px solid rgba(0, 0, 0, 0.7);
        background: none;
        font-size: 24px;
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.7);
            &:disabled {
                border: 1px solid rgba(0, 0, 0, 0.3);
                color: rgba(0, 0, 0, 0.3);
                    &:hover {
                        border: 1px solid rgba(0, 0, 0, 0.3);
                        color: rgba(0, 0, 0, 0.3);
                    }
            }
            &:hover {
                cursor: pointer;
                color: rgba(0, 0, 0, 0.9);
                border: 2px solid rgba(0, 0, 0, 0.7);
            }
    }
`;

// buy now animation
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

// add to cart animation
const play = keyframes`
    from {
		transform: translate3d(calc(25% + 1rem), 0, 0);
	}
	to {
		transform: translate3d(calc(-50% + 1rem), 0, 0);
	}
`;

export const Buttons = styled.div`
    margin-bottom: 8px;
    /* buy now button */
    .buy {
        padding: 14px 36px;
        border: none;
        overflow: hidden;
        position: relative;
        margin-right: 28px;
        span {
            overflow: hidden;
            font-family: "Poppins", sans-serif;
            color: #fff;
            font-size: 17px;
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
            width: 135%;
            height: 100%;
            -webkit-clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 0% 0%);
            clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 0% 0%);
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
                animation: ${MoveRightInitial} 0.1s forwards, ${MoveRightEnd} 0.3s forwards 0.2s;
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
    /* add to cart */
    .add_cart_button {
        padding: 14px 36px;
        position: relative;
        border: none;
        > span {
            display: inline-block;
        }
        span {
            font-family: "Poppins", sans-serif;
            color: #000;
            font-size: 17px;
            font-style: italic;
            font-weight: 600;
        }
        .add_cart {
            padding: 14px 36px;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            overflow: hidden;
            pointer-events: none;
            span {
                text-align: center;
                white-space: nowrap;
                font-style: italic;
                padding: 0 16px;
            }
            .add_cart_inner {
                width: fit-content;
                transform: translate3d(calc(-25% + 1rem), 0, 0);
                animation: ${play} 2s linear infinite;
                animation-play-state: paused;
                opacity: 0;
            }
        }
        &:hover {
            cursor: pointer;
            > span {
                opacity: 0;
            }
            .add_cart_inner {
                animation-play-state: running;
                opacity: 1;
                transition-duration: 3s;
            }
        }
    }


    @media(max-width: 896px) {
        white-space: nowrap;
    }

    @media(max-width: 768px) {
        display: flex;
        justify-content: center;
        margin-left: -20px;
        margin-bottom: 32px;
    }

    @media(max-width: 394px) {
        margin-left: -30px;
        .add_cart_button, .buy { 
            padding: 10px 20px;
        }
        .buy {
            margin-right: 16px;
        }
    }
`;