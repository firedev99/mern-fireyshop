import styled from "styled-components/macro"
import { motion } from "framer-motion"

export const Wrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    font-family: 'Poppins', sans-serif;
    h3 {
        font-size: 17px;
        font-weight: 600;
        margin-bottom: 0.4rem;
    }

    @media(max-width: 962px) {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;
        background: rgba(255, 255, 255, 1);
        width: 232px;
        padding: 56px 32px;
        box-shadow: 6px 0 32px rgba(0, 0, 0, 0.3);
        overflow-y: auto;
    }
`;

export const Container = styled.div`
    width: 152px;
    .close_filter {
        background: transparent;
        border: none;
        position: absolute;
        top: 8px;
        right: 10px;
        svg {
            width: 36px;
            height: 36px;
        }

        &:hover {
            cursor: pointer;
        }
    }
`;

export const Categories = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    span {
        font-size: 16px;
        padding: 0.3rem 0.6rem;
        margin: 0.2rem 0;
        border-radius: 10px;
        display: flex;
        align-items: center;
        svg {
            width: 20px;
            height: 20px;
        }
        &:hover {
            cursor: pointer;
        }
    }
`;

export const SortingOptions = styled.div`
    margin-bottom: 1rem;
    select {
        border-radius: 4px;
        width: 100%;
        border: 2px solid rgba(148, 208, 204, 1);
        height: 2rem;
        color: rgba(0, 0, 0, 0.92);
        font-size: 16px;
    }
`;

export const CheckboxOptions = styled.div`
    display: flex;
    align-items: center;
    margin-left: 0.2rem;
    input {
        margin-right: 0.3rem;
        width: 17px;
        height: 17px;
        &:hover {
            cursor: pointer;
        }
    }
`;

export const RangeInput = styled.div`
    margin-top: 0.8rem;
`;