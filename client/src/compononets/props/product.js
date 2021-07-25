import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// redux
import { useDispatch, useSelector } from "react-redux"
import { toCartWithQuantity } from "../../redux/actions/cartActions"
import { addProductToWishlist } from '../../redux/actions/wishlistActions'
import { popupMessage, popupMessageProducts } from '../../redux/actions/statusActions'
// components
import Rating from "./rating"
// icons
import { HeartLogo, ShoppingCartLogo } from "../../helpers/avatar"
// styled-components
import { ProductWrapper, ImageWrapper, ProductDetails, Pricing, Meta, AddItem, Wishlist } from "./style/productStyles"

export default function Product({ product }) {
    const { statusMessages } = useSelector(state => state.status);
    const dispatch = useDispatch();

    const [hoverStart, setHoverStart] = useState(false);
    const productExist = statusMessages.find(item => item._id === product._id);
    const message = `${productExist ? `Already you have loved it 🤟🏼` : `Added to the wishlist of your 💕`}`;

    // add product to wishlist
    const handleWishlist = () => {
        dispatch(addProductToWishlist(product));
        dispatch(popupMessageProducts(product, message));
    };

    // add order to cart
    const handlePurchase = (product) => {
        dispatch(toCartWithQuantity(product));
        dispatch(popupMessage('Product added to cart🐱‍👤'));
    };

    return (
        <ProductWrapper onHoverStart={() => setHoverStart(true)} onHoverEnd={() => setHoverStart(false)}>
            <Link to={`/products/${product._id}`}>
                <ImageWrapper>
                    <img src={product?.imageSrc} alt={product?.name} />
                </ImageWrapper>
            </Link>
            <ProductDetails>
                <Link to={`/products/${product._id}`}>
                    <h3>{product?.name}</h3>
                </Link>
                <span>by {product?.vendorName}</span>
            </ProductDetails>
            <Pricing>
                <h3>US ${product?.price}</h3>
            </Pricing>
            <Meta>
                <Rating ratingValue={product?.rating} reviews={product?.rating} />
                <AddItem onClick={() => handlePurchase(product)}>
                    <ShoppingCartLogo />
                </AddItem>
            </Meta>
            <Wishlist
                whileTap={{ scale: 0.9, boxShadow: `1px 2px 2px rgba(0, 0, 0, 0.4)` }}
                initial={{ opacity: 0 }}
                animate={{ opacity: hoverStart ? 1 : 0 }}
                onClick={() => handleWishlist()}
            >
                <HeartLogo />
            </Wishlist>
        </ProductWrapper>
    )
}
