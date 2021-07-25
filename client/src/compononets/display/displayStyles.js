import styled from "styled-components/macro"

export const Wrapper = styled.div`
    width: 100%;
    margin-left: auto;
    .products_title {
        margin-top: 16px;
        font-family: "Poppins", sans-serif;
        font-size: 20px;
    }
`;

export const NavigateScheme = styled.div`
    height: 348px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media(max-width: 962px) {
        margin-top: 16px;
    }
    @media(max-width: 800px) {
        display: none;
    }
`;

export const DisplayMeta = styled.div`
    width:100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    a {
        color: #007185;
        margin: 16px 4px 0 0;
        &:hover {
            cursor: pointer;
            text-decoration: underline;
        }
    }

    @media(max-width: 425px) {
        font-size: 14px;
        white-space: nowrap;
        h2 {
            font-size: 16px !important;
            font-weight: 600;
        }
    }

    @media(max-width: 338px) {
        font-size: 13px;
        white-space: nowrap;
        h2 {
            font-size: 15px !important;
        }
    }

    @media(max-width: 316px) {
        font-size: 12px;
        h2 {
            font-size: 13px !important;
        }
    }
`;


export const LeftSchemes = styled.div`
    width: 49%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const cImg = `img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 16px;
    filter: grayscale(1);
}`

export const Fifty = styled.div`
    width: 100%;
    height: 48.5%;
    background: pink;
    border-radius: 16px;
    ${cImg};
`;

export const Thirty = styled.div`
    width: 100%;
    height: 48.5%;
    background: green;
    border-radius: 16px;
    ${cImg};
`;

export const RightSchemes = styled.div`
    width: 49%;
    height: 100%;
    display: flex;
    justify-content: space-between;
`;

export const ProductsAdLeft = styled.div`
    width: 48.5%;
    height: 100%;
    background: aqua;
    border-radius: 16px;
    ${cImg};
`;

export const ProductsAdRight = styled.div`
    width: 48.5%;
    height: 100%;
    background: goldenrod;
    border-radius: 16px;
    ${cImg};
`;

export const ProductsWrapper = styled.div`
    width: 100%;
    height: auto;
    margin-top: 16px;
    margin-bottom: 92px;
    display: grid;
    grid-gap: 32px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
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
