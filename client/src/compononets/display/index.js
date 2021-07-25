import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
// react-redux
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../../redux/actions/productActions"
import FixedScreen from '../../screens/fixedScreen'
// components
import { Product } from "../props"
import NoProduct from '../../screens/noProduct'
// styled components
import { Wrapper, NavigateScheme, DisplayMeta, LeftSchemes, Fifty, Thirty, RightSchemes, ProductsAdLeft, ProductsAdRight, ProductsWrapper } from "./displayStyles"
// scene
import Banner1 from "../../assests/b1.jpg"
import Banner2 from "../../assests/b2.png"
import Banner3 from "../../assests/b3.jpg"
import Banner4 from "../../assests/b4.png"

export default function Display() {
    const dispatch = useDispatch();
    const { loading, error, filteredProducts } = useSelector(state => state.productList);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch])

    if (loading) return <FixedScreen text="Loading" />;
    if (error) return <FixedScreen text={`${error}`} />;
    if (typeof filteredProducts === 'undefined') return <div></div>;
    return (
        <Wrapper>
            <NavigateScheme>
                <LeftSchemes>
                    <Fifty>
                        <img src={Banner1} alt="behance_banner1" />
                    </Fifty>
                    <Thirty>
                        <img src={Banner3} alt="behance_banner2" />
                    </Thirty>
                </LeftSchemes>
                <RightSchemes>
                    <ProductsAdLeft>
                        <img src={Banner2} alt="behance_banner3" />
                    </ProductsAdLeft>
                    <ProductsAdRight>
                        <img src={Banner4} alt="behance_banner4" />
                    </ProductsAdRight>
                </RightSchemes>
            </NavigateScheme>
            <DisplayMeta>
                <h2 className="products_title">New-in Summer Collection</h2>
                <Link to="/products">See more</Link>
            </DisplayMeta>
            {filteredProducts.length === 0 ? <NoProduct /> : (
                <ProductsWrapper>
                    {filteredProducts.map(product => (
                        <Product key={`product-key-${product._id}`} product={product} />
                    ))}
                </ProductsWrapper>
            )}
        </Wrapper>
    )
}
