import styled from 'styled-components/macro'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    font-family: 'Poppins', sans-serif;
    .sidebar_nav_title {
        font-size: 20px;
        margin-bottom: 12px;
    }
`;

export const ExploreNav = styled.div`
    width: 100%;
    height: 100%;
    flex-grow: 1;
    @media(max-width: 962px) {
        display: flex;
        h3 {
            display: none;
        }
    }
    @media(max-width: 496px) {
        min-width: 300px;
        flex-wrap: wrap;
    }
`;

// sidebar nav items - start
export const NewIn = styled.div`
    width: 100px;
    height: auto;
    display: flex;
    margin-bottom: 10px;
    h3 {
        color: #000000;
        font-weight: 400;
        font-size: 17px;
        margin: 2px 0 0 8px;
    }
    svg {
        width: 32px;
        height: 32px;
    }
    &:hover {
        cursor: pointer;
            h3 {
                font-weight: 600;
            }
    }

    @media(max-width: 962px) {
        width: 100%;
        padding: 4px 24px;
        border-radius: 12px;
    }
`;
export const Clothing = styled.div`
    width: 120px;
    height: auto;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    color: #000000;
    h3 {
        font-weight: 400;
        font-size: 17px;
        margin: -1px 0 0 8px;
    }
    svg {
        width: 32px;
        height: 32px;
    }
    &:hover {
        cursor: pointer;
            h3 {
                font-weight: 600;
            }
    }

    @media(max-width: 962px) {
        width: 100%;
        padding: 4px 24px;
        border-radius: 12px;
    }
`;
export const Shoes = styled.div`
    width: 100px;
    height: auto;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    color: #000000;
    h3 {
        font-weight: 400;
        font-size: 17px;
        margin: 1px 0 0 8.5px;
    }
    svg {
        width: 32px;
        height: 32px;
    }
    &:hover {
        cursor: pointer;
            h3 {
                font-weight: 600;
            }
    }

    @media(max-width: 962px) {
        width: 100%;
        padding: 4px 24px;
        border-radius: 12px;
    }
`;
export const Accessories = styled.div`
    width: 150px;
    height: auto;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    cursor: pointer;
    color: #000000;
    h3 {
        font-weight: 400;
        font-size: 17px;
        margin: -1px 0 0 8px;
    }
    svg {
        width: 32px;
        height: 32px;
    }
    &:hover {
        cursor: pointer;
            h3 {
                font-weight: 600;
            }
    }

    @media(max-width: 962px) {
        width: 100%;
        padding: 4px 24px;
        border-radius: 12px;
    }
`;
export const ActiveWear = styled.div`
    width: 150px;
    height: auto;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    color: #000000;
    h3 {
        font-weight: 400;
        font-size: 17px;
        margin: 2px 0 0 9px;
    }
    svg {
        width: 32px;
        height: 32px;
        margin-left: -1px;
    }
    &:hover {
        cursor: pointer;
            h3 {
                font-weight: 600;
            }
    }

    @media(max-width: 962px) {
        width: 100%;
        padding: 4px 24px;
        border-radius: 12px;
    }
`;
export const Bags = styled.div`
    width: 90px;
    height: auto;
    display: flex;
    align-items: center;
    color: #000000;
    h3 {
        font-weight: 400;
        font-size: 17px;
        margin: -1px 0 0 7px;
    }
    svg {
        margin-left: 2.5px;
        width: 32px;
        height: 32px;
    }
    &:hover {
        cursor: pointer;
            h3 {
                font-weight: 600;
            }
    }

    @media(max-width: 962px) {
        width: 100%;
        padding: 4px 24px;
        border-radius: 12px;
    }
`;
