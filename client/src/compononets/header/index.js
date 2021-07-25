import React, { useRef, useState } from "react"
import { Link } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
// redux
import { useDispatch, useSelector } from "react-redux"
import { filterByValue } from "../../redux/actions/filterActions"
import { openModal } from "../../redux/actions/wishlistActions"
import { setLogout } from "../../redux/actions/authenticationActions"
// hooks
import useOnclickOutside from "../../hooks/useOnclickOutside"
import { useWindow } from "../../hooks/useWindow"
// styled-components
import { Wrapper, Logo, SearchInput, Meta, CartFunc, UserProfile, Wishlist, NavWrapper } from "./styles/headerStyles"
// logos
import { HeartLogo, MyLogo, SearchLogo, ShoppingCartLogo } from "../../helpers/avatar"
import dummyUserWebp from '../../assests/avatar.jpg'

export default function Header() {
    const { cartItems } = useSelector(state => state.cart)
    const { userInfo } = useSelector(state => state.userLogin);
    const dispatch = useDispatch();
    const dimensions = useWindow();

    const ref = useRef(null);
    const [navToggle, setNavToggle] = useState(false);
    const [expanded, setExpanded] = useState(false);
    // sum of total quantity
    const quantity = cartItems.map(item => item.quantity).reduce((a, c) => { return a + c }, 0);

    // handle search onchange
    const handleSearch = (event) => {
        let input = event.target.value;
        dispatch(filterByValue({ value: input }));
    };

    // handle click outside the wrapper
    useOnclickOutside(ref, () => setNavToggle(false));

    return (
        <Wrapper>
            <Link to="/">
                <Logo>
                    <MyLogo />
                    <span />
                </Logo>
            </Link>
            <SearchInput expanded={expanded}>
                <button onClick={dimensions.width <= 656 ? () => setExpanded(!expanded) : null}>
                    <SearchLogo />
                </button>
                <input type="text" onChange={(e) => handleSearch(e)} placeholder="Search for items, brands and happiness..." />
            </SearchInput>
            <Meta>
                <Wishlist
                    whileTap={{ scale: 0.9 }}
                    onClick={() => dispatch(openModal())}
                >
                    <HeartLogo />
                </Wishlist>
                <CartFunc>
                    <Link to="/cart">
                        <ShoppingCartLogo />
                    </Link>
                    {quantity !== 0 && (
                        <span className="lilboi">
                            <span className="cart_counter">{quantity}</span>
                        </span>
                    )}
                </CartFunc>
                <UserProfile ref={ref} onClick={() => setNavToggle(!navToggle)}>
                    <img src={dummyUserWebp} alt={`dribbble`} />
                    {navToggle && (
                        <AnimatePresence>
                            <NavWrapper exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2, ease: 'linear' }}>
                                <Link to="/products">products</Link>
                                {userInfo && userInfo.isAdmin && <Link to="/dashboard/products">admin</Link>}
                                {userInfo && <Link to="/profile">profile</Link>}
                                <Link to="/register">register</Link>
                                {userInfo ? <span onClick={() => { dispatch(setLogout()); window.location.reload() }}>sign out</span> : <Link to="/login">sign in</Link>}
                            </NavWrapper>
                        </AnimatePresence>
                    )}
                </UserProfile>
            </Meta>
        </Wrapper>
    )
}
