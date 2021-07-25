import styled from "styled-components/macro";

export const Wrapper = styled.div`
    width: 100%;
    min-height: calc(100vh - 124px);
    font-family: "Poppins", sans-serif;
    h1 {
        line-height: 38px;
        text-align: center; 
            &:last-of-type {
                padding-bottom: 12px;
            }
    }
    button {
        margin: 0 auto;
        border: none;
        outline: none;
        border-radius: 6px;
        margin-top: 32px;
        background: rgba(27, 32, 33, 1);
        color: rgba(255, 255, 255, 0.8);
        width: 180px;
        height: 54px;
        font-family: "Poppins", sans-serif;
        font-size: 15px;
        transition: 0.2s all;
        &:disabled {
            opacity: 0.6;
        }
        &:hover {
            cursor: pointer;
            color: rgba(255, 255, 255, 1);
        }
    }

    @media(max-width: 896px) {
        h1 {
            font-weight: 500;
            font-size: 26px;
            line-height: 34px;
        }
    }

    @media(max-width: 414px) {
        h1 {
            font-size: 18px;
            line-height: 24px;
            font-weight: 500;
        }
    }
`;

export const Inner = styled.div`
    margin-top: 20px;
    display: flex;
    width: 100%;

    @media(max-width: 768px) {
        flex-direction: column;
        margin: 0 auto;
    }
`;
export const UserInformations = styled.div`
    min-width: 320px;
    display: flex;
    flex-direction: column;
    padding: 0 16px 0 0;
    form {
        display: flex;
        flex-direction: column;
    }
    h3 {
        font-size: 26px;
        margin-left: 4px;
        margin-bottom: 14px;
    }


    @media(max-width: 896px) {
        h3 {
            font-size: 22px;
            font-weight: 600;
        }
    }

    @media(max-width: 768px) {
        padding: 0;
        margin: 0 auto;
        max-width: 420px;
    }

    @media(max-width: 414px) {
        min-width: 100%;
        h3 {
            font-size: 20px;
            font-weight: 600;
        }
    }
`;
export const InputWrapper = styled.div`
    margin: 8px 0;
    display: flex;
    flex-direction: column;
    position: relative;
        &:first-of-type {
            margin-top: 0;
        }
        input {
            transition: 200ms ease-in; 
            width: 100%;
            height: 48px;
            background: transparent;
            outline: none;
            border-radius: 10px;
            border: 2px solid rgba(0, 0, 0, 0.6);
            color: rgba(0, 0, 0, 0.8);
            font-family: "Poppins", san-serif;
            font-size: 17px;
            text-indent: 5px;
            &:focus {
                border: 2px solid rgba(0, 0, 0, 0.9);
            }
                &:focus ~ label, &:valid ~ label{
                transform: translateY(-22.3px);
                left: 8.8px;
                font-size: 15px;
            }
        }
        label {
            text-transform: uppercase;
            padding: 0 2px;
            transition: 200ms ease-in; 
            position: absolute;
            z-index: 20;
            background: rgba(255, 255, 255, 1);
            left: 9.2px;
            top: 11px;
        }

        @media(max-width: 896px) {
            input {
                min-width: 100%;
                height: 40px;
                font-size: 15px;
            }
            label {
                font-size: 14px;
                top: 10px;
                font-weight: 500;
            }
        }
`;
export const UserOrders = styled.div`
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0 24px 0;
    .no_purchase {
        font-size: 28px;
    }
    table {
        width: 100%;
        border-collapse: collapse;
        h3 {
            font-weight: 600;
            font-size: 17px;
            text-transform: uppercase;
        }
        td, th {
            border: 1px solid #ddd;
            padding: 8px;
        }
        td {
            font-size: 15px;
        }
        .order_id_td {
            font-weight: 500;
        }
        .order_id {
            max-width: 192px;
            text-align: left;
        }
        .order_date {
            max-width: 92px;
        }
        .order_price {
            max-width: 64px;
        }
        .order_details {
            max-width: 80px;
            a {
                color: rgba(0, 0, 0, 1);
                transition: all 0.2s;
                border-bottom: 1px dotted black;
                    &:hover {
                        font-weight: 600;
                    }
            }
        }
        .order_delivered {
            max-width: 92px;
        }
        .paid_at {
            max-width: 92px;
        }
    }

    @media(max-width: 1024px) {
        table {
            th {
                h3 {
                    font-size: 15px;
                    font-weight: 500;
                }
            }
            td {
                font-size: 14px;
            }
        }
    }

    @media(max-width: 896px) {
        .no_purchase {
            font-size: 24px;
            font-weight: 500;
        }
        .paid_at {
            display: none;
        }
        table {
            margin-top: 24px;
            td, th {
                padding: 4px;
            }
        }
    }

    @media(max-width: 768px) {
        .no_purchase {
            margin-top: 24px;
        }
    }

    @media(max-width: 486px) {
            table {
                th {
                    padding: 2px;
                    h3 {
                        font-size: 12px;
                    }
                }
                td {
                    font-size: 12px;
                    padding: 2px;
                }
                .order_id_td {
                    max-width: 20px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .order_id {
                    text-align: center;
                }
                .order_delivered {
                    display: none;
                }
            }
            
    }

    @media(max-width: 414px) {
        .no_purchase {
            margin-top: 24px;
            font-size: 20px;
            font-weight: 500;
        }
    }
`;