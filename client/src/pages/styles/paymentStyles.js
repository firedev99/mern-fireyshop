import styled from "styled-components/macro"

export const Wrapper = styled.div`
    width: 100%;
    min-height: calc(100vh - 124px);
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(max-width: 432px) {
        .paypal {
            width: 232px !important;
        }
    }
`;

export const ShippingDetails = styled.div`
    padding: 24px;
    align-self: flex-start;
    margin-top: 20px;
    border-radius: 12px;
        h3 {
            font-size: 19px;
            font-weight: 600;
            text-transform: uppercase;
            color: rgba(0, 0, 0, 0.9);
        }
        .indivisual {
           font-size: 17px;
           font-weight: 500;
           color: rgba(0, 0, 0, 0.9);
        }

        @media(max-width: 376px) {
            padding: 24px 0;
        }
`;

export const ProductFunc = styled.div`
    width: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 36px;
    opacity: 0;
    transition: 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    span {
        cursor: pointer;
        margin: 0 4px;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background: rgba(244, 244, 246, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.8);
    }

    @media(max-width: 601px) {
        margin-top: 72px;
    } 
`;

export const ProductWrapper = styled.div`
   height: 100%;
   width: 100%;
   display: flex;
   flex-direction: column;
   position: relative;
`;


export const Product = styled.div`
   width: 100%;
   height: 80px;
   display: flex;
   margin: 16px 0;
   &:hover ${ProductFunc} {
       opacity: 1;
   }
   .img {
       min-width: 112px;
       height: 98px;
       img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
   }
   h3 {
        display: flex;
        flex-direction: column;
        font-weight: 500;
        font-size: 16px;
        width: 694px;
        .name {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 18px;
        }
        .price {
            color: rgba(0, 0, 0, 0.9);
            font-size: 17px;
        }
        .quantity {
            letter-spacing: 0.3px;
            color: rgba(0, 0, 0, 0.7);
        }
   }

   @media(max-width: 1112px) {
        h3 {
            .name {
                font-size: 16px;
                max-width: 400px;
            }
        }
    }

    @media(max-width: 768px) {
        h3 {
            margin-left: 10px;
        }
    }

    @media(max-width: 601px) {
        margin: 24px 0;
        h3 {
            .name {
                max-width: 220px;
            }
        }
    } 

    @media(max-width: 376px) {
        h3 {
            .name {
                max-width: 172px;
            }
        }
        .img {
            min-width: 86px !important;
        }
    }

    @media(max-width: 296px) {
        h3 {
            .name {
                max-width: 148px;
            }
        }
    } 
`;

export const OrderSummary = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 270px;
    margin-top: -48px;
    color: rgba(0, 0, 0, 0.94);
        h2 {
            margin-bottom: 20px;
            white-space: nowrap;
        }
    .price_wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;
            h3 {
                display: flex;
                justify-content: space-between;
                margin: 5px 0;
                font-weight: 600;
                font-size: 18px;
            }
    }

    @media(max-width: 1024px) {
        margin: 24px 0;
    }
`;
export const OverView = styled.div`
    width: 100%;
    display: flex;

    @media(max-width: 1024px) {
        flex-direction: column;
        align-items: center;
    }
`;

