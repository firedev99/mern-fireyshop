import React from 'react'
import PropTypes from "prop-types"
// redux
import { useSelector } from "react-redux"
// components
import Header from "../header"
import Footer from "../footer"
import { PopupStatus, WishlistModal } from "../../screens"
// styles 
import { GlobalStyles, Wrapper } from "./styles/layoutStyles"

export default function Layout({ children }) {
    const { modal } = useSelector(state => state.wishlist);

    return (
        <>
            <GlobalStyles />
            <Wrapper>
                <Header />
                <PopupStatus />
                {modal ? <WishlistModal /> : <div />}
                <main>{children}</main>
                <Footer />
            </Wrapper>
        </>
    )
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};