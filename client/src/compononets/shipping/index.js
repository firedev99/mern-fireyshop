import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom"
// components
import InlineProp from '../props/inlineProp'
import { Wrapper, Inner, UserSection, ShippingAddress, InlineWrapper, PriceTag, TotalPrice } from "./styles/shippingStyles"
// redux
import { saveShippingAddress } from '../../redux/actions/cartActions'
import { popupMessage } from '../../redux/actions/statusActions'
import { manageEditing, stopEditing } from "../../redux/actions/cartActions"
// icons
import { EditIcon, AtSign, UserIcon, PinMap, PostalMark, FeatherIcon, GlobeIcon } from "../../helpers/avatar"

export default function ShippingRequirements() {
    const history = useHistory();
    const { cartItems, shippingAddress, edit } = useSelector(state => state.cart);
    const { userInfo } = useSelector(state => state.userLogin)
    const dispatch = useDispatch();
    //total price from cart items 
    const total = cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity * cartItem.price, 0);

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState(shippingAddress ? shippingAddress.address : "TheTechGuy, 901 StoneHead");
    const [city, setCity] = useState(shippingAddress ? shippingAddress.city : "San Bruno");
    const [postalCode, setPostalCode] = useState(shippingAddress ? shippingAddress.postalCode : "CA 94066");
    const [country, setCountry] = useState(shippingAddress ? shippingAddress.country : "United States");

    const handleClick = () => {
        if (cartItems.length === 0) {
            dispatch(popupMessage("please add something cool, yk😭"));
        } else {
            dispatch(saveShippingAddress({ address, city, postalCode, country }));
            dispatch(stopEditing());
            history.push('/payment');
        }
    };

    const openInputs = () => {
        dispatch(manageEditing());
    };

    useEffect(() => {
        if (userInfo) {
            setEmail(userInfo.email);
            setName(userInfo.name);
        } else {
            setEmail("guest@fireyShop.com");
            setName("Joshua Weighman");
        }
    }, [userInfo])

    return (
        <Wrapper>
            <Inner>
                <UserSection>
                    <h3>User Information</h3>
                    <InlineWrapper>
                        <AtSign />
                        <span>{email}</span>
                    </InlineWrapper>
                    <InlineWrapper>
                        <UserIcon />
                        <span>{name}</span>
                    </InlineWrapper>
                </UserSection>
                <ShippingAddress>
                    <h3>Shipping Information</h3>
                    <button className={`edit_button edit_button_${edit ? 'active' : 'default'}`} onClick={openInputs}>
                        <EditIcon />
                    </button>
                    <InlineWrapper>
                        <PinMap />
                        <InlineProp text={address} onSetText={text => setAddress(text)} />
                    </InlineWrapper>
                    <InlineWrapper>
                        <FeatherIcon />
                        <InlineProp text={city} onSetText={text => setCity(text)} />
                    </InlineWrapper>
                    <InlineWrapper>
                        <PostalMark />
                        <InlineProp text={postalCode} onSetText={text => setPostalCode(text)} />
                    </InlineWrapper>
                    <InlineWrapper>
                        <GlobeIcon />
                        <InlineProp text={country} onSetText={text => setCountry(text)} />
                    </InlineWrapper>
                </ShippingAddress>
                <TotalPrice>
                    <PriceTag className="same">
                        <span>Subtotal:</span>
                        <span>${parseFloat(total).toFixed(2)}</span>
                    </PriceTag>
                    <PriceTag className="same">
                        <span>Taxes:</span>
                        <span>Free</span>
                    </PriceTag>
                    <PriceTag className="same">
                        <h3>Total Price:</h3>
                        <h3>${parseFloat(total).toFixed(2)}</h3>
                    </PriceTag>
                </TotalPrice>
                <button className="buy_button" onClick={handleClick}><span><span>Confirm & Pay Now</span></span></button>
            </Inner>
        </Wrapper>
    )
}
