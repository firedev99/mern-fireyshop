import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
// redux
import { decreaseQuantity, toCartWithQuantity } from '../redux/actions/cartActions'
import { popupMessage } from '../redux/actions/statusActions'
// components
import FixedScreen from '../screens/fixedScreen'
import InlineProp from '../compononets/props/inlineProp'
import PaymentTransaction from "../compononets/payment/paypalTran"
// styled-components
import { Wrapper, ShippingDetails, ProductWrapper, Product, OrderSummary, OverView, ProductFunc } from "./styles/paymentStyles"

export default function Payment() {
    const { cartItems, shippingAddress } = useSelector(state => state.cart);
    const { loading, success, order, error } = useSelector(state => state.orders);
    const dispatch = useDispatch();
    const history = useHistory();

    const [newAddress, setNewAddress] = useState("");
    const [deliveringAddress, setDeliveringAddress] = useState(shippingAddress ? newAddress : "TheTechGuy, 901 StoneHead, San Bruno, CA 94066, United States");

    const total = parseFloat(cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity * cartItem.price, 0)).toFixed(2);

    useEffect(() => {
        if (shippingAddress) {
            const mergedAddress = Object.values(shippingAddress).join(", ").replace(/\s+/g, ' ');
            setDeliveringAddress(mergedAddress);
            setNewAddress(mergedAddress)
        }
    }, [shippingAddress]);

    useEffect(() => {
        if (cartItems.length === 0) {
            history.push('/products');
            dispatch(popupMessage("please add something cool, yk😭"));
        }
    }, [history, cartItems, dispatch]);

    useEffect(() => {
        if (success) {
            history.push(`/orders/${order._id}`);
        }
    }, [success, order, history]);

    useEffect(() => {
        if (error) {
            dispatch(popupMessage("please sign in to complete payment transaction"));

            const timer = setTimeout(() => {
                history.push('/login');
                window.location.reload();
            }, 3000)
            return () => clearTimeout(timer);
        }
    }, [error, dispatch, history])

    if (loading) return <FixedScreen text="Loading" />

    return (
        <Wrapper>
            <ShippingDetails>
                <h3>Delivering address</h3>
                <InlineProp text={deliveringAddress} onSetText={text => setDeliveringAddress(text)} />
            </ShippingDetails>
            <OverView>
                <ProductWrapper>
                    {cartItems.map((product, index) => (
                        <Product key={`orders-${product._id}-${index}`}>
                            <div className="img">
                                <img alt={product.name} src={product.imageSrc} />
                            </div>
                            <h3>
                                <span className="name">{product.name}</span>
                                <span className="price">Price ${product.price}</span>
                                <span className="quantity">Quantity: {product.quantity}x</span>
                            </h3>
                            <ProductFunc>
                                <span onClick={() => dispatch(decreaseQuantity(product))}>-</span>
                                <span onClick={() => dispatch(toCartWithQuantity(product))}>+</span>
                            </ProductFunc>
                        </Product>
                    ))}
                </ProductWrapper>
                <OrderSummary>
                    <h2>Order Summary</h2>
                    <div className="price_wrapper">
                        <h3>
                            <span>Subtotal:</span>
                            <span>${total}</span>
                        </h3>
                        <h3>
                            <span>Taxes:</span>
                            <span>Free</span>
                        </h3>
                        <h3>
                            <span>Total Price:</span>
                            <span>${total}</span>
                        </h3>
                    </div>
                </OrderSummary>
            </OverView>
            <div className="paypal" style={{ width: 392, marginTop: 8, display: success ? `none` : `block` }}>
                <PaymentTransaction />
            </div>
        </Wrapper>
    )
}
