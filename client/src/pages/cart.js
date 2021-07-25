import React from 'react'
// redux
import { useDispatch, useSelector } from "react-redux"
import { decreaseQuantity, removeFromCart, toCartWithQuantity } from '../redux/actions/cartActions'
import { popupMessage } from "../redux/actions/statusActions"
import EmptyCart from '../screens/emptyCart'
// components
import ShippingRequirements from '../compononets/shipping'
// icons
import { CrossLine, ShoppingBag } from "../helpers/avatar"
// styled
import { Wrapper, LeftSection, Products, Product, BagWrapper } from "./styles/cartStyles"

export default function Cart() {
    const dispatch = useDispatch();
    const { cartItems } = useSelector(state => state.cart);

    const handleRemove = (item) => {
        dispatch(removeFromCart(item));
        dispatch(popupMessage('Product removed from cart🙃'));
    };

    return (
        <Wrapper>
            <LeftSection>
                <BagWrapper>
                    <ShoppingBag />
                    <h3>Confirm & Pay</h3>
                    <span>({cartItems.length} items)</span>
                </BagWrapper>
                <Products>
                    {cartItems.length === 0 ? <EmptyCart /> : (cartItems.map(item => (
                        <Product key={item._id}>
                            <button className="cross" onClick={() => handleRemove(item)}>
                                <CrossLine />
                            </button>
                            <div className="image">
                                <img alt={item.name} src={item.imageSrc} />
                            </div>
                            <div className="meta">
                                <span>{item.name}</span>
                                <span>${item.price}</span>
                                <span className="spash">size: {item.size}</span>
                                <span className="spash">quantity: {item.quantity}</span>
                            </div>
                            <div className="quantity_func">
                                <button onClick={() => dispatch(decreaseQuantity(item))}>-</button>
                                <span>{item.q}</span>
                                <button onClick={() => dispatch(toCartWithQuantity(item))}>+</button>
                            </div>
                        </Product>
                    )))}
                </Products>
            </LeftSection>
            <ShippingRequirements />
        </Wrapper>
    )
}
