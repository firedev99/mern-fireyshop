import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// redux
import { getOrderList, updateOrderDelivery } from "../redux/actions/orderActions"
import { popupMessage } from '../redux/actions/statusActions'
// components
import AdminLayout from '../compononets/layout/adminLayout'
import { FixedScreen } from "../screens/index"
// styled-components
import { Wrapper, OrderList } from "./styles/orderStyles"

export default function Orders() {
    const { loading, orders, error } = useSelector(state => state.orderList);
    const { success, error: updateError } = useSelector(state => state.orderDelivery);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOrderList());
    }, [dispatch]);

    useEffect(() => {
        if (success) {
            dispatch(popupMessage('Updated to delivered🧢'));
            const timer = setTimeout(() => {
                window.location.reload();
            }, 2500);
            return () => clearTimeout(timer);
        }
    }, [success, dispatch])

    const updateToDelivered = (id) => {
        dispatch(updateOrderDelivery({ id }));
    };

    if (loading) return <FixedScreen text="Loading" />
    if (error || updateError) return <FixedScreen text={error} />
    return (
        <AdminLayout>
            <Wrapper>
                <OrderList>
                    <h3 className="title">Orders of FIREYSHOP🔥</h3>
                    <table>
                        <thead>
                            <tr className="head">
                                <th><h3 className="order_id">order id</h3></th>
                                <th><h3>shipping address</h3></th>
                                <th><h3>total</h3></th>
                                <th className="paid_at"><h3>paid at</h3></th>
                                <th className="method"><h3>method</h3></th>
                                <th className="sender_th"><h3>sender</h3></th>
                                <th><h3>delivered</h3></th>
                                <th className="delivered_at"><h3>delivered at</h3></th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders && orders.map((order, index) => (
                                <tr key={`customers-${index}`}>
                                    <td className="order_id">{order._id}</td>
                                    <td className="address">{order.shippingAddress && Object.values(order.shippingAddress).join(", ").replace(/\s+/g, ' ')}</td>
                                    <td>{order.totalPrice}</td>
                                    <td className="paid_at">{order.paidAt.substring(0, 10)}</td>
                                    <td className="method">{order.paymentMethod}</td>
                                    <td className="sender">{order.paymentResult && order.paymentResult.email_address}</td>
                                    <td className="delivery">
                                        {!order.isDelivered && <span className="func" onClick={() => updateToDelivered(order._id)}>mark as delivered</span>}
                                        <span className='update'>{order.isDelivered ? `delivered` : `not delivered`}</span>
                                    </td>
                                    <td className="delivered_at">{order.deliveredAt.substring(0, 10)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </OrderList>
            </Wrapper>
        </AdminLayout>
    )
}
