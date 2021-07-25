import styled from "styled-components/macro";

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const AdminList = styled.div`
    margin-bottom: 32px;
    display: flex;
    .admin {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        font-style: italic;
        min-width: 264px;
        margin: 0px;
        position: relative;
        .admin_delete {
            top: 0;
            right: 26px;
            position: absolute;
            border-radius: 50%;
            height: 42px;
            width: 42px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s;
            svg {
                transition: all 0.2s;
                width: 28px;
                height: 28px;
                opacity: 0.78;
            }
            &:hover {
                    cursor: pointer;
                    background: rgba(220, 221, 225, 0.5);
                    svg {
                        opacity: 1;
                    }
                }
        }
        .admin_img {
            width: 82px;
            height: 82px;
        }
        img {
           height: 100%;
           width: 100%;
           padding: 4px;
           object-fit: cover;
           border-radius: 50%;
        }
        h3 {
            margin-top: -6px;
            font-style: italic;
        }
        h4 {
            font-weight: 500;
        }
        span {
            font-weight: 600;
            font-size: 16px;
        }
    }

    @media(max-width: 601px) {
        .admin {
            min-width: 200px;
            .admin_img {
                width: 64px;
                height: 64px;
            }
        }
        h4 {
            font-size: 14px;
        }
    }

    @media(max-width: 411px) {
        .admin {
            min-width: 164px;
            h3 {
                font-size: 15px;
                font-weight: 600;
            }
            h4 {
                font-size: 13px;
            }
            span {
                font-size: 13px;
            }
        }
        .admin_img {
            width: 56px;
            height: 56px;
        }
    }

    @media(max-width: 352px) {
        .admin {
            min-width: 140px;
            h4 {
                display: none;
            }
        }
    }
`
export const CustomerList = styled.div`
    h3 {
        font-size: 24px;
        margin-bottom: 16px;
    }
    table {
        width: 100%;
        border-collapse: collapse;
        .func {
            display: flex;
            justify-content: center;
            span {
                margin: 0 4px;
                width: 42px;
                height: 42px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.2s;
                &:hover {
                    cursor: pointer;
                    background: rgba(220, 221, 225, 0.5);
                    svg {
                        transition: all 0.2s;
                        stroke: rgba(0, 0, 0, 1);
                    }
                }
            }
        }
        h3 {
            font-weight: 600;
            font-size: 17px;
            text-transform: uppercase;
        }
        td, th {
            border: 1px solid #ddd;
            padding: 8px 12px;
            text-align: center;
        }
        td {
            font-size: 15px;
        }
    }

    @media(max-width: 924px) {
        table {
            td, th {
                padding: 0;
                font-size: 14px;
            }
            th {
                h3 {
                    font-size: 16px;
                    font-weight: 500;
                    margin-bottom: 0;
                    padding: 4px;
                }
            }
        }
    }

    @media(max-width: 768px) {
        td, th {
            max-width: 100px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
    }

    @media(max-width: 601px) {
        .customer_id {
            display: none;
        }
    }
    @media(max-width: 486px) {
        table {
            h3 {
                font-size: 14px !important;
            }
        }
    }

    @media(max-width: 411px) {
        h3 {
            white-space: nowrap;
            font-size: 20px;
        }
        .created_at {
            display: none;
        }
        table {
            .func {
                span {
                    padding: 7px 0;
                    height: 100%;
                    width: 100%;
                }
            }
        }
    }


    @media(max-width: 308px) {
        h3 {
            font-size: 18px;
            font-weight: 600;
        }
        table {
            th {
                h3 {
                    font-size: 13px;
                    max-width: 82px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
            td {
                max-width: 88px;
                font-size: 12px;
            }
        }
    }
`;

export const UserInformations = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    span {
        position: absolute;
        right: -5px;
        top: -36px;
        svg {
            width: 46px;
            height: 46px;
            opacity: 0.7;
            transition: all 0.2s;
        }
        &:hover {
            svg {
                cursor: pointer;
                opacity: 1;
            }
        }
    }
    h3 {
        margin-bottom: 24px;
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
`;
export const InputWrapper = styled.div`
    margin: 16px 0;
    display: flex;
    flex-direction: column;
    position: relative;
        &:first-of-type {
            margin-top: 0;
        }
        input {
            transition: 200ms ease-in; 
            width: 100%;
            height: 42px;
            background: transparent;
            outline: none;
            border-radius: 4px;
            border: 2px solid rgba(0, 0, 0, 0.7);
            color: rgba(0, 0, 0, 0.8);
            font-family: "Poppins", san-serif;
            font-size: 16px;
            text-indent: 5px;
            &:focus {
                border: 2px solid rgba(0, 0, 0, 0.9);
            }
                &:focus ~ label, &:valid ~ label{
                transform: translateY(-22.3px);
                left: 8.8px;
                font-size: 15px;
                font-weight: 600;
            }
        }
        label {
            text-transform: uppercase;
            padding: 0 2px;
            transition: 200ms ease-in; 
            position: absolute;
            z-index: 20;
            background: rgba(255, 255, 255, 1);
            color: rgba(0, 0, 0, 0.8);
            font-size: 17px;
            font-weight: 500;
            left: 9.2px;
            top: 9px;
        }
`;
export const AdminFunc = styled.div`
    display: flex;
    align-items: center;
    input { margin-right: 4px };
    label {
        margin-top: -2px;
        font-weight: 500;
        font-style: italic;
    }
`;