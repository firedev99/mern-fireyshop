import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductDetails, updateProduct } from '../redux/actions/productActions';
import { FixedScreen } from '../screens';
import { ProductImg, ProductImgOverlay, ProductImgWrapper, ProductMeta, ProductPrice, ProductTitle, SideImageOptions, Wrapper, AvailabeSizes } from "./styles/porductUpTempStyles";
import useForm from '../hooks/useForm';
import { updateProductValidation } from "../helpers/validationParam";
import { CrossLine, PlusIcon } from '../helpers/avatar';
import { popupMessage } from '../redux/actions/statusActions';

const initialValues = {
    id: '',
    name: '',
    price: 0,
    imageSrc: '',
    sideImagesSrc: [],
    colors: [],
    sizes: [],
    vendorName: '',
    description: '',
    features: [],
    category: '',
    gender: '',
    featuring: false,
    rating: '',
    countInStock: '',
}

export default function ProductUpdateTemp({ match }) {
    const { params: { id } } = match;
    const dispatch = useDispatch();
    const { loading, product } = useSelector(state => state.productDetails)
    const { success } = useSelector(state => state.productUpdate)

    const { values, setValues, handleSubmit, isSubmitting } = useForm({ initialValues, onSubmit: (values) => manageData(values) }, updateProductValidation)
    const { name, price, imageSrc, sideImagesSrc, sizes } = values;
    const [sizeValue, setSizeValue] = useState('');

    const manageData = (values) => {
        dispatch(updateProduct(values));
    };

    const uploadSideImages = async (event) => {
        event.preventDefault();
        const files = event.target.files;
        if (files.length <= 6) {
            const formData = new FormData();
            for (let i = 0; i < files.length; i++) {
                formData.append('imageSrc', files[i])
            };
            try {
                const config = {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
                const { data } = await axios.post('/api/upload/side-images', formData, config)
                setValues({ ...values, sideImagesSrc: data });
            } catch (error) {
                console.error(error)
            }
        } else {
            dispatch(popupMessage('Only ^6^ BOSS'));
        }
    };

    const uploadMainImg = async (event) => {
        event.preventDefault();
        const file = event.target.files[0];
        const formData = new FormData()
        formData.append('singleImageSrc', file);
        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
            const { data } = await axios.post('/api/upload/main-image', formData, config)
            setValues({ ...values, imageSrc: data });
        } catch (error) {
            console.error(error);
        }
    };

    const pushSize = (event, size) => {
        event.preventDefault();
        setValues({ ...values, sizes: [...sizes, size] });
        setSizeValue('');
    };

    const deleteSize = (size) => {
        setValues({ ...values, sizes: sizes.filter(item => item !== size) })
    };

    useEffect(() => {
        dispatch(fetchProductDetails(id));
    }, [dispatch, id]);

    useEffect(() => {
        if (!loading && typeof product !== 'undefined') {
            setValues({
                id: product._id,
                name: product.name,
                price: product.price,
                imageSrc: product.imageSrc,
                sideImagesSrc: product.sideImagesSrc,
                sizes: product.sizes,
                vendorName: product.vendorName,
                colors: product.colors,
                description: product.description,
                features: product.features,
                category: product.category,
                gender: product.gender,
                featuring: product.featuring,
                rating: product.rating,
                countInStock: product.countInStock,
            })
        }
    }, [product, loading, setValues]);

    useEffect(() => {
        if (success) {
            dispatch(popupMessage('Update Done boss 🧢'));
            const timer = setTimeout(() => {
                window.location.reload();
            }, 2600);
            return () => clearTimeout(timer);
        }
    }, [success, dispatch]);

    if (loading) return <FixedScreen text="Loading" />;
    return (
        <Wrapper onSubmit={handleSubmit}>
            <ProductImgWrapper>
                <ProductImgOverlay>
                    <ProductImg>
                        <img src={imageSrc} alt={name} />
                    </ProductImg>
                    <input id="update-img" type="file" onChange={uploadMainImg} />
                </ProductImgOverlay>
                <SideImageOptions>
                    <div className="side_img_wrap">
                        {sideImagesSrc && sideImagesSrc.map((item, index) => (
                            <div className="side_img" key={`sid-img-src-${index}`}>
                                <img src={item.imageSrc} alt={`side-img-src-alt-${index}`} />
                            </div>
                        ))}
                    </div>
                    <span>
                        <input id="update-side-imgs" type="file" multiple onChange={uploadSideImages} />
                    </span>
                </SideImageOptions>
            </ProductImgWrapper>
            <ProductMeta>
                <ProductTitle>
                    <input type="text" name="input" value={name || ''} onChange={(e) => setValues({ ...values, name: e.target.value })} />
                </ProductTitle>
                <ProductPrice>
                    <h3 className="price">US$
                        <input type="text" name="price" value={price || ''} onChange={(e) => setValues({ ...values, price: e.target.value })} />
                    </h3>
                </ProductPrice>
                <AvailabeSizes>
                    <div className="size_wrap">
                        {sizes && sizes.map((letter, index) => (
                            <div className="sizesBox" key={`let-up-${index}`}>
                                <span>{letter}</span>
                                <button onClick={() => deleteSize(letter)}><CrossLine /></button>
                            </div>
                        ))}
                    </div>
                    <div className="add_size">
                        <input type="text" id="size" name="size" placeholder="add a new product size" value={sizeValue} onChange={(e) => setSizeValue(e.target.value)} />
                        <button className="push" onClick={(event) => pushSize(event, sizeValue)}><PlusIcon /></button>
                    </div>
                </AvailabeSizes>
            </ProductMeta>
            <button disabled={isSubmitting} className="submit" type="submit">SUBMIT</button>
        </Wrapper>
    )
}
