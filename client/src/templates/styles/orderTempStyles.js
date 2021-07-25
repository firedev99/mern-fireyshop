import styled from "styled-components/macro";

export const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;

    
    @media(max-width: 768px) {
        flex-direction: column-reverse;
        align-items: center;
    }
`
export const Overview = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    .boss {
        text-align: center;
        margin-left: -24px;
        margin-top: 24px;
        text-transform: uppercase;
    }
    h3 {
        font-size: 24px;
        letter-spacing: 0.2px;
        font-weight: 600;
    }

    @media(max-width: 860px) {
        .boss {
            margin-left: 0 !important;
        }
    }

    @media(max-width: 490px) {
        .id {
            font-size: 18px !important;
        }
    }

    @media(max-width: 490px) {
        .boss {
            font-size: 21px;
        }
    }

    @media(max-width: 382px) {
        .id {
            font-size: 16px !important;
        }
    }

    @media(max-width: 292px) {
        .id {
            font-weight: 500;
        }
    }
`
export const ClientDetails = styled.div`
    width: 96%;
    margin-top: 16px;
    background: rgba(253, 121, 168, 0.2);
    border-radius: 12px;
    padding: 16px;
    h2 {
        font-weight: 600;
        font-size: 20px;
        text-decoration: underline;
    }
    h3 {
        font-size: 15px;
        line-height: 20px;
        font-weight: 500;
        letter-spacing: 0;
    }

    
    @media(max-width: 768px) {
        width: 100%;        
    }

    @media(max-width: 490px) {
        h2 {
            font-size: 18px;
        }
        h3 {
            font-size: 14px;
        }
    }

    @media(max-width: 382px) {
        h2 {
            font-size: 16px;
        }
        h3 {
            font-size: 14px;
        }
    }

    @media(max-width: 292px) {
        h3 {
            font-size: 13px;
        }
    }

    
`
export const PaymentMethod = styled.div`
    margin-top: 24px;
    padding: 16px;
    background: rgba(162, 155, 254, 0.2);
    border-radius: 8px;
    width: 96%;
    .status {
        margin-top: 4px;
        padding: 4px;
        width: 92px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        span {
            font-weight: 500;
            color: rgba(0, 0, 0, 0.85);
            text-transform: uppercase;
        }
    }
    h3 {
        font-weight: 500;
        font-size: 18px;
    }

    @media(max-width: 768px) {
        width: 100%;        
    }
    @media(max-width: 490px) {
        h3 {
            font-size: 16px;
        }
        span {
            font-size: 15px;
        }
    }
`
export const ProductSummary = styled.div`
    width: 96%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;

    @media(max-width: 768px) {
        width: 100%;        
    }
`
export const OrderSummary = styled.div`
    margin-top: 52px;
    width: 420px;
    height: 162px;
    border-radius: 14px;
    background: rgba(84, 109, 229, 0.2);
    table {
        padding: 16px;
        width: 100%;
        font-size: 17px;
        font-weight: 500;
        tr {
            display: flex;
            justify-content: space-between;
        }
        .head {
            margin-bottom: 6px;
            text-decoration: underline;
            th {
                margin: 0 auto;
                h3 {
                    text-align: center;
                }
            }
        }
    }

    
    @media(max-width: 768px) {
        margin-bottom: 24px;
        margin-top: 0;        
    }

    @media(max-width: 490px) {
        width: 100%;
        table {
            font-size: 16px;
        }
        .head {
            h3 {
                font-size: 18px;
                font-weight: 600;
            }
        }
    }
`

export const Product = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 68px;
    background: rgba(189, 195, 199, 0.35);
    border-radius: 8px;
    margin: 8px 0;
        .price {
            margin-right: 12px;
            span {
                font-weight: 600;
            }
        }
        .dis {
            display: flex;
            align-items: center;
            span {
                width: 500px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .img {
                width: 58px;
                height: 58px;
                margin-right: 12px;
                img {
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                }
            }
        }

        @media(max-width: 1024px) {
            .dis {
                span {
                    width: 320px;
                }
            }
        }

        @media(max-width: 490px) {
            .dis {
                span {
                    width: 200px;
                    font-size: 15px;
                    font-weight: 500;
                }
            }
            .price {
                span {
                    font-size: 14px;
                }
            }
        }


        @media(max-width: 382px) {
            .dis {
                span {
                    width: 132px;
                }
            }
            .price {
                span {
                    font-size: 13px;
                }
            }
        }

        @media(max-width: 292px) {
            .dis {
                span {
                    font-size: 13px;
                    width: 124px;
                }
            }
            .price {
                margin-top: -2px;
                span {
                    font-size: 12px;
                    font-weight: 500;
                }
            }
        }
`;