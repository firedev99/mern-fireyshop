import React from 'react';
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { createNewOrder } from "../../redux/actions/orderActions";

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

export default function PaypalTransaction() {
    const dispatch = useDispatch();
    const { cartItems, shippingAddress } = useSelector(state => state.cart);
    const total = parseFloat(cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity * cartItem.price, 0)).toFixed(2);
    const orderItems = cartItems.map(({ name, quantity, imageSrc, price }) => ({ name, quantity, imageSrc, price }));

    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: total,
                    },
                },
            ],
        });
    };

    const onApprove = (data, actions) => {
        return actions.order.capture().then((paymentResult) => {
            dispatch(createNewOrder({
                orderItems,
                totalPrice: total,
                shippingAddress,
                paymentMethod: 'PayPal',
                paymentResult: {
                    ...paymentResult,
                    email_address: paymentResult.payer.email_address,
                }
            }))
        })
    };


    return (
        window.location.pathname === '/payment' ? (
            <PayPalButton
                createOrder={(data, actions) => createOrder(data, actions)}
                onApprove={(data, actions) => onApprove(data, actions)}
            />
        ) : <div />
    )
}

