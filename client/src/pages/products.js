import React, { useEffect, useLayoutEffect, useState } from 'react'
import styled from "styled-components/macro"
import { useDispatch, useSelector } from "react-redux"
// redux
import { fetchProducts } from "../redux/actions/productActions";
// components
import NoProduct from "../screens/noProduct"
import FixedScreen from "../screens/fixedScreen"
import { Sidebar, ProductSidebar } from "../compononets/sidebar"
import { Product } from "../compononets/props"
// styled components
import { ProductsWrapper } from "./styles/productStyles"
import { FilterIcon } from '../helpers/avatar';
import { useWindow } from '../hooks/useWindow';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    .filter_icon {
        background: rgba(244, 244, 246, 0.8);
        padding: 6px 8px;
        border-radius: 4px;
        outline: none;
        border: none;
        cursor: pointer;
        margin-bottom: 8px;
        svg {
            margin-top: 2px;
            color: rgba(255, 194, 180, 0.75);
            width: 24px;
            height: 24px;
        }
    } 

    
    @media(max-width: 962px) {
        flex-direction: column;
    }
`;

export default function Products() {
    const { loading, filteredProducts } = useSelector(state => state.productList);
    const dispatch = useDispatch();
    const dimensions = useWindow();

    const [modal, setModal] = useState(false);
    // fetch all products
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    useLayoutEffect(() => {
        if (modal) {
            // Get original body overflow
            const originalStyle = window.getComputedStyle(document.body).overflow;
            // Prevent Scrolling on mount
            document.body.style.overflow = "hidden";
            // Re-enable scrolling when component unmounts
            return () => (document.body.style.overflow = originalStyle);
        }
    }, [modal]);

    if (loading) return <FixedScreen text="Loading" />;
    if (typeof filteredProducts === 'undefined') return <div />;
    return (
        <Wrapper>
            <Sidebar>
                {dimensions.width <= 962 ? (
                    <>
                        <button className="filter_icon" onClick={() => setModal(true)}>
                            <FilterIcon />
                        </button>
                        {modal && <ProductSidebar modal={modal} setModal={setModal} />}
                    </>
                ) : (
                    <ProductSidebar />
                )}
            </Sidebar>
            {filteredProducts.length === 0 ? <NoProduct width="100%" /> : (
                <ProductsWrapper>
                    {filteredProducts.map(product => (
                        <Product key={`product-key-${product._id}`} product={product} />
                    ))}
                </ProductsWrapper>
            )}
        </Wrapper>
    )
};
