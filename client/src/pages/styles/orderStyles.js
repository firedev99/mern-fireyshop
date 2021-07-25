import styled from "styled-components/macro";

export const Wrapper = styled.div`
    padding: 12px 16px;
    height: 100%;

    @media(max-width: 320px) {
        padding: 12px 0;
    }
`;

export const OrderList = styled.div`
    .title {
        margin-bottom: 12px;
    }
    table {
        width: 100%;
        border-collapse: collapse;
        text-align: center;
        th, td {
            padding: 4px;
        }
            .sender_th {
                text-align: center;
            }
            .sender {
                max-width: 180px;
                text-align: left;
            }
            .address {
                text-align: left
            }
            .delivery {
                position: relative;
                &:hover {
                    .update{
                        transition: all 0.3s;
                        display: none;
                        opacity: 0;
                    }
                    .func {
                        background: rgba(236, 240, 241, 0.4);
                        display: block;
                        opacity: 1;
                    }
                }
                .func {
                    cursor: pointer;
                    transition: all 0.3s;
                    position: absolute;
                    left: 0;
                    font-weight: 600;
                    top: 50%;
                    transform: translateY(-50%);
                    opacity: 0;
                    display: none;
                }
            }
    }
    tr {
        border: 0.5px solid rgba(0, 0, 0, 0.5);
        font-size: 14px;
    }
    th, td {
        border: 0.5px solid rgba(0, 0, 0, 0.5);
    }

    @media(max-width: 1112px) {
        table {
            .sender {
                max-width: 100px;
            }
            .order_id {
                max-width: 100px;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }
        }
    }

    @media(max-width: 768px) {
        table {
            td {
                font-size: 13px;
            }
            th {
                font-size: 13px;
            }
        }
        .sender, .sender_th {
            display: none;
        }
    }
    @media(max-width: 600px) {
        line-height: 18px;
        .method {
            display: none;
        }
        table {
            th, td {
                padding: 2px;
            }
            th {
                h3 {
                    font-weight: 500;
                }
            }
        }
    }

    @media(max-width: 495px) {
        .func {
            line-height: 10px !important;
            font-weight: 500 !important;
            font-size: 12px;
        }
        table {
            td, .order_id {
                max-width: 72px;
            }
            .address {
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        }
    }
    @media(max-width: 436px) {
        .paid_at, .delivered_at {
            display: none;
        }
    }
    @media(max-width: 292px) {
        table {
            td, .order_id {
                max-width: 56px;
            }
        }
    }
`;