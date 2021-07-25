import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// redux
import { deleteProduct, fetchProducts } from '../redux/actions/productActions'
import { popupMessage } from '../redux/actions/statusActions'
// components
import AdminLayout from '../compononets/layout/adminLayout'
import { FixedScreen } from '../screens'
// icons
import { EditIconSquare, TrashIcon } from '../helpers/avatar'
// styled-components
import { ProductList, Wrapper, Product } from "./styles/dashboardProductStyles"

export default function DashboardPorducts() {
    const { products, loading } = useSelector(state => state.productList);
    const { success: deleteSuccessful, loading: loadingDelete } = useSelector(state => state.productDelete);
    const dispatch = useDispatch();

    const handleProductDelete = (id) => {
        dispatch(deleteProduct(id));
    };

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch])

    useEffect(() => {
        if (deleteSuccessful) {
            dispatch(popupMessage('Product has been deleted, boss 🦹‍♂️'));
            const timer = setTimeout(() => {
                window.location.reload();
            }, 2600)
            return () => clearTimeout(timer);
        }
    }, [deleteSuccessful, dispatch])

    if (loading || loadingDelete) return <FixedScreen text="Loading" />
    return (
        <AdminLayout>
            <Wrapper>
                <Link to="/dashboard/new-product">
                    <button>
                        Create Product
                    </button>
                </Link>
                <ProductList>
                    {products && products.map((product, index) => (
                        <Product key={`dashboard-products-${index}`}>
                            <div className="img">
                                <img src={product.imageSrc} alt={product.name} />
                            </div>
                            <div className="meta">
                                <h3>{product.name}</h3>
                                <h4>{product.vendorName}</h4>
                                <span>US {product.price}</span>
                            </div>
                            <div className="func">
                                <Link to={`/dashboard/products/${product._id}`}>
                                    <span><EditIconSquare /></span>
                                </Link>
                                <span onClick={() => handleProductDelete(product._id)}><TrashIcon /></span>
                            </div>
                        </Product>
                    ))}
                </ProductList>
            </Wrapper>
        </AdminLayout>
    )
}
