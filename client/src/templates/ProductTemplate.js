import React, { useEffect } from 'react'
// redux
import { useDispatch, useSelector } from "react-redux"
import { fetchProductDetails } from "../redux/actions/productActions"
// components
import FixedScreen from "../screens/fixedScreen"
import ProductWrapper from "../compononets/templates/productWrapper"
// styled components
import { Wrapper } from './styles/productTempStyles'

export default function ProductTemplate({ match }) {
    const { params: { id } } = match;

    const dispatch = useDispatch();
    const productDetails = useSelector(state => state.productDetails);
    const { loading, error, product } = productDetails;

    // fetch product details
    useEffect(() => {
        dispatch(fetchProductDetails(id));
    }, [dispatch, id]);

    if (loading) return <FixedScreen text="Loading" />;
    if (error) return <FixedScreen text={error} />;
    return (
        <Wrapper>
            <ProductWrapper product={product} id={id} />
        </Wrapper>
    )
}
