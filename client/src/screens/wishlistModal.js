import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
// redux 
import { useSelector, useDispatch } from "react-redux"
import { closeModal, removeProductFromWishlist } from "../redux/actions/wishlistActions"
import { popupMessage } from "../redux/actions/statusActions"
// hooks
import useKeypress from '../hooks/useKeypress'
import useOnclickOutside from '../hooks/useOnclickOutside'
// icons
import { BrokenHeart, CrossLine } from '../helpers/avatar'
// styled components
import { Inner, Product, ProductsWrapper, Wrapper, NoLoveWrapper } from "./styles/wishlistStyles"

export default function WishlistModal() {
    const { modal, wishlist } = useSelector(state => state.wishlist);
    const dispatch = useDispatch();
    const ref = useRef(null);

    const esc = useKeypress("Escape");

    useOnclickOutside(ref, () => dispatch(closeModal()));

    const handleRemove = (product) => {
        dispatch(removeProductFromWishlist(product));
        dispatch(popupMessage('Product removed from wishlist😞'));
    };

    useLayoutEffect(() => {
        // Get original body overflow
        const originalStyle = window.getComputedStyle(document.body).overflow;
        // Prevent Scrolling on mount
        document.body.style.overflow = "hidden";
        // Re-enable scrolling when component unmounts
        return () => (document.body.style.overflow = originalStyle);
    }, []);

    useEffect(() => {
        if (esc) {
            dispatch(closeModal());
        }
    }, [esc, dispatch])

    return (
        <AnimatePresence>
            {modal && (
                <Wrapper exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2, ease: [0.43, 0.13, 0.23, 0.96] }}>
                    <Inner ref={ref}>
                        <button className="cross" onClick={() => dispatch(closeModal())}>
                            <CrossLine />
                        </button>
                        <ProductsWrapper>
                            {wishlist.length === 0 ? <NoLove /> : (wishlist.map(product => (
                                <Product key={`wishlist-item-${product._id}`}>
                                    <img src={product.imageSrc} alt={product.name} />
                                    <div className="meta">
                                        <Link onClick={() => dispatch(closeModal())} to={`/products/${product._id}`}>
                                            <h3>{product.name}</h3>
                                        </Link>
                                        <span>Price: US {product.price}$</span>
                                        <button onClick={() => handleRemove(product)}>Remove</button>
                                    </div>
                                </Product>
                            )))}
                        </ProductsWrapper>
                    </Inner>
                </Wrapper>
            )}
        </AnimatePresence>
    )
}

function NoLove() {
    return (
        <NoLoveWrapper>
            <BrokenHeart />
            <h1>No love given yet :)</h1>
        </NoLoveWrapper>
    )
}