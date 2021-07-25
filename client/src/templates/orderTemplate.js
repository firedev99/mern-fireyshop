import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from 'react-router-dom'
// redux
import { getOrderDetails } from '../redux/actions/orderActions'
import { resetCart } from '../redux/actions/cartActions'
// components
import { FixedScreen } from '../screens'
// styled components
import { Wrapper, Overview, ClientDetails, PaymentMethod, ProductSummary, OrderSummary, Product } from "./styles/orderTempStyles"


export default function OrderTemplate({ match }) {
    const { params: { orderId } } = match;
    const history = useHistory();
    const dispatch = useDispatch();
    const { success } = useSelector(state => state.orders);
    const { loading, order } = useSelector(state => state.orderDetails);
    const { userInfo } = useSelector(state => state.userLogin);
    const [address, setAddress] = useState("");

    useEffect(() => {
        if (!userInfo) {
            history.push('/login');
        } else if (order) {
            const mergedAddress = Object.values(order.shippingAddress).join(", ").replace(/\s+/g, ' ');
            setAddress(mergedAddress)
        }
    }, [userInfo, history, order]);

    // fetch specific order details
    useEffect(() => {
        if (orderId) {
            dispatch(getOrderDetails(orderId));
        }
    }, [orderId, dispatch, success]);

    // reset the cart and reload the page
    useEffect(() => {
        if (success) {
            dispatch(resetCart());
            window.location.reload();
        }
    }, [success, dispatch]);


    if (loading) return <FixedScreen text="Loading" />;

    return (
        <Wrapper>
            <Overview>
                <h3 className="id">ORDER #{orderId}</h3>
                <ClientDetails>
                    <h2>User Information</h2>
                    <h3>
                        <span>Email: </span>
                        <span>{order && order.user.email}</span>
                    </h3>
                    <h3>
                        <span>Name: </span>
                        <span>{order && order.user.name}</span>
                    </h3>
                    <h3>
                        <span>Address: </span>
                        <span>{order && address}</span>
                    </h3>
                </ClientDetails>
                <PaymentMethod>
                    {order && (
                        <>
                            <h3>Payment Method: {order.paymentMethod}</h3>
                            <div className="status" style={{ background: order.isPaid ? `rgba(46, 204, 113, 0.5)` : `rgba(214, 48, 49, 0.4)` }}>
                                {order.isPaid ? <span>Paid</span> : <span>Not Paid</span>}
                            </div>
                        </>
                    )}
                </PaymentMethod>
                <ProductSummary>
                    {order && order.orderItems.map((item, index) => (
                        <Product key={`orders-item-${index}`}>
                            <div className="dis">
                                <div className="img">
                                    <img src={item.imageSrc} alt={item.name} />
                                </div>
                                <span>{item.name}</span>
                            </div>
                            <div className="price">
                                <span>{item.quantity}x {item.price}</span>
                            </div>
                        </Product>
                    ))}
                </ProductSummary>
                <h3 className="boss">{order && <span>{`Thankyou, for choosing us 👑 ${order.user.name}`} 🙌🏼</span>}</h3>
            </Overview>
            <OrderSummary>
                {order && (
                    <table>
                        <thead>
                            <tr className="head">
                                <th><h3>Order Summary</h3></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Subtotal:</td>
                                <td>${order.totalPrice}</td>
                            </tr>
                            <tr>
                                <td>Taxes</td>
                                <td>Free</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>Total</td>
                                <td>${order.totalPrice}</td>
                            </tr>
                        </tfoot>
                    </table>
                )}
            </OrderSummary>
        </Wrapper>
    )
}
