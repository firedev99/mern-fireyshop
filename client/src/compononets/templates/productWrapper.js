import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useState } from 'react';
// redux
import { selectImage } from "../../redux/actions/imgActions";
import { addToCart } from "../../redux/actions/cartActions";
import { popupMessage } from '../../redux/actions/statusActions';
// components
import { Rating } from "../props";
// styled components
import { Wrapper, ProductImgOverlay, Coupons, SideImageOptions, SizeOptions, ColorOptions, ProductImgWrapper, ProductImg, ProductMeta, ProductTitle, ProductPrice, AvailableColors, AvailableSizes, Quantity, Buttons, ReviewSection } from "./styles/productStyles";
import { useHistory } from 'react-router-dom';


export default function ProductWrapper({ product }) {
    const dispatch = useDispatch();
    const { currentIndex } = useSelector(state => state.imgReducer);
    const history = useHistory();

    const [sideImages, setSideImgs] = useState([]);
    const [colors, setColors] = useState([]);
    const [sizes, setSizes] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [start, setStart] = useState(false);
    const [sizeToCart, setSizeToCart] = useState("");
    // concating image arrays
    const newImgArr = (colors || []).concat((sideImages || []));

    // add size to cart
    const activeSize = (size) => {
        setSizeToCart(size);
    };

    // buy or add this specific product and checkout rn
    const handlePurchase = (product, quantity, sizeToCart) => {
        if (sizeToCart.length === 0) {
            dispatch(popupMessage('Please add a size, cause size matters😉'));
        } else {
            dispatch(addToCart(product, quantity, sizeToCart));
            setTimeout(() => {
                history.push('/payment');
            }, 1000)
        }
    };

    // add product to cart along with size and quantity params
    const handleToCart = (product, quantity, sizeToCart) => {
        if (sizeToCart.length === 0) {
            dispatch(popupMessage('Please add a size, cause size matters😉'));
        } else {
            dispatch(addToCart(product, quantity, sizeToCart));
            dispatch(popupMessage('Product added to cart🐱‍👤'));
        }
    }

    // set side images, color variery images and sizes 
    useEffect(() => {
        window.scrollTo(0, 0);
        setSideImgs(product.sideImagesSrc);
        setColors(product.colors);
        setSizes(product.sizes);
    }, [product]);

    return (
        <Wrapper>
            <ProductImgWrapper>
                <ProductImgOverlay offset={currentIndex}>
                    {newImgArr && newImgArr.map((item, index) => (
                        <ProductImg key={`show-${index}`}>
                            <img src={start ? item.imageSrc : product.imageSrc} alt={product.name} />
                        </ProductImg>
                    ))}
                </ProductImgOverlay>
                <SideImageOptions>
                    {newImgArr && newImgArr.map((item, index) => (
                        !item.hasOwnProperty('colorName') && (
                            <div className="sideImgBox" key={item._id} onClick={() => { dispatch(selectImage(index)); setStart(true) }}>
                                <img src={item.imageSrc} alt={`side-imgs-${index}`} />
                            </div>
                        )
                    ))}
                </SideImageOptions>
            </ProductImgWrapper>
            <ProductMeta>
                <ProductTitle>
                    <h3>{product.name}</h3>
                </ProductTitle>
                <ReviewSection>
                    <Rating ratingValue={product.rating} reviews={product.numReviews} fontSize={"14px"} />
                </ReviewSection>
                <ProductPrice>
                    <h3>US$ {product.price}</h3>
                    <Coupons>
                        US $3.00 New User Coupon
                    </Coupons>
                </ProductPrice>
                <AvailableColors>
                    <span>Colors:</span>
                    <ColorOptions>
                        {newImgArr && newImgArr.map((item, index) => (
                            item.hasOwnProperty('colorName') && (
                                <div className="colorBox" key={item._id} onClick={() => { dispatch(selectImage(index)); setStart(true) }}>
                                    <img src={item.imageSrc} alt={`product-img-${item.colorName}`} />
                                </div>
                            )
                        ))}
                    </ColorOptions>
                </AvailableColors>
                <AvailableSizes>
                    <span>Sizes:</span>
                    <SizeOptions>
                        {sizes && sizes.map((letter, index) => (
                            <div className="sizesBox" style={{ border: sizeToCart === letter ? "2px solid rgba(0, 0, 0, 0.9)" : "2px solid rgba(0, 0, 0, 0.2)" }} key={`sizes-${index}`} onClick={() => activeSize(letter)}>
                                <span>{letter}</span>
                            </div>
                        ))}
                    </SizeOptions>
                </AvailableSizes>
                <Quantity>
                    <div className="quantity_display">
                        <span>Quantity:</span>
                    </div>
                    <div className="quantity_instance">
                        <button onClick={() => setQuantity(quantity - 1)} disabled={quantity <= 1}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)} disabled={quantity >= 10}>+</button>
                    </div>
                </Quantity>
                <Buttons>
                    <button className="buy" onClick={() => handlePurchase(product, quantity, sizeToCart)}><span><span>Buy Now</span></span></button>
                    <button className="add_cart_button" onClick={() => handleToCart(product, quantity, sizeToCart)}>
                        <span>Add to Cart</span>
                        <div className="add_cart">
                            <div className="add_cart_inner">
                                <span>Add to Cart</span>
                                <span>Add to Cart</span>
                                <span>Add to Cart</span>
                                <span>Add to Cart</span>
                            </div>
                        </div>
                    </button>
                </Buttons>
            </ProductMeta>
        </Wrapper >
    )
}
