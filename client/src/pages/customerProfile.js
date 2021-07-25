import React, { useEffect, useState } from 'react'
import { Link, useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
// redux 
import { fetchAllOrders, getUserDetails, updateUserProfile } from "../redux/actions/userActions"
import { popupMessage } from '../redux/actions/statusActions'
// components
import { FixedScreen } from "../screens"
// styled components 
import { Wrapper, Inner, UserInformations, InputWrapper, UserOrders } from "./styles/customerProStyles"

export default function CustomerProfile() {
    const history = useHistory();
    const dispatch = useDispatch();
    const { userInfo } = useSelector(state => state.userLogin);
    const { loading, user } = useSelector(state => state.userDetails);
    const { success, loading: loadingUpdate } = useSelector(state => state.userUpdate);
    const { orders, loading: loadingOrders, error } = useSelector(state => state.userOrders);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(updateUserProfile({ id: user._id, name, email, password }));
    };

    useEffect(() => {
        if (!userInfo) {
            history.push('/login');
        } else {
            if (user !== undefined && !user.name) {
                dispatch(getUserDetails());
                dispatch(fetchAllOrders());
            } else {
                setName(user && user.name);
                setEmail(user && user.email);
            }
        }
    }, [userInfo, history, user, dispatch]);

    useEffect(() => {
        if (success) {
            dispatch(popupMessage('Change successful😅'));
            const timer = setTimeout(() => {
                window.location.reload();
            }, 3000)
            return () => clearTimeout(timer);
        }
    }, [success, dispatch])


    if (error) return <FixedScreen text={error.message} />
    if (loading || loadingOrders) return <FixedScreen text="Loading" />

    return (
        <Wrapper>
            <h1><span>Hope you are doing well, {user && user.name ? user.name : "BhaiBhai"}</span></h1>
            <h1><span>Welcome to FIREY SHOP 👊🏼🤙🏼</span></h1>
            <Inner>
                <UserInformations>
                    <h3>User Informations</h3>
                    <form onSubmit={handleSubmit}>
                        <InputWrapper>
                            <input type="text" name="name" id="name" required value={name} onChange={(e) => setName(e.target.value)} />
                            <label>name</label>
                        </InputWrapper>
                        <InputWrapper>
                            <input type="text" name="email" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                            <label>email</label>
                        </InputWrapper>
                        <InputWrapper>
                            <input type="password" name="password" required id="password" autoComplete="true" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <label>password</label>
                        </InputWrapper>
                        <button disabled={loadingUpdate} type="submit">save changes</button>
                    </form>
                </UserInformations>
                <UserOrders>
                    {orders && orders.length !== 0 ? (
                        <table>
                            <thead>
                                <tr className="head">
                                    <th className="order_id"><h3>Order ID</h3></th>
                                    <th className="order_date"><h3>Date</h3></th>
                                    <th className="order_price"><h3>Total</h3></th>
                                    <th className="paid_at"><h3>Paid at</h3></th>
                                    <th className="order_delivered"><h3>Delivered</h3></th>
                                    <th className="order_details"><h3>See details</h3></th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((item, index) => (
                                    <tr key={`user-orders-${index}`}>
                                        <td className="order_id order_id_td">{item._id}</td>
                                        <td className="order_date">{item.createdAt.substring(0, 10)}</td>
                                        <td className="order_price">${item.totalPrice}</td>
                                        <td className="paid_at">{item.isPaid ? `${item.paidAt.substring(0, 10)}` : `Not Paid`}</td>
                                        <td className="order_delivered">{item.isDelivered ? `Delivered` : `Not Delivered`}</td>
                                        <td className="order_details order_details_td"><Link to={`/orders/${item._id}`}>Details</Link></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : <h3 className="no_purchase">NO PURCHASE YET!😢</h3>}
                </UserOrders>
            </Inner>
        </Wrapper>
    )
}
