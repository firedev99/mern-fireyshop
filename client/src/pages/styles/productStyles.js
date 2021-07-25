import styled from "styled-components/macro";


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
    }
    @media (max-width: 612px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    @media(max-width: 324px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    
`;
