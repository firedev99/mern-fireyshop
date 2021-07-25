import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux'
// redux
import { popupMessage } from '../../../redux/actions/statusActions'
// hooks
import useForm from "../../../hooks/useForm"
import { createProductValidation } from "../../../helpers/validationParam"
// redux
import { createProduct } from '../../../redux/actions/productActions'
// components
import Form from "../../form"
import SignleFileDnD from "../../dnd/singleFileDnd"
import MultipleFileDnD from "../../dnd/multipleFileDnd"
// icons
import { CrossLine, PlusIcon } from '../../../helpers/avatar'
// styled-components
import { Wrapper, InputWrapper, PostWrapper, CheckboxWrapper, FeatureWrapper, ImageWrapper, SizePreview, CustomWrapper, ColorImage, VarietyPreview, Preview } from "../styles/createProductStyles"


const initialValues = {
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

export default function CreatProduct() {
    const { file } = useSelector(state => state.singleFileDnd);
    const { fileList } = useSelector(state => state.dndReducer);
    const { success } = useSelector(state => state.productCreate);
    const dispatch = useDispatch();

    const { values, setValues, touched, errors, handleBlur, handleChange, handleSubmit, isSubmitting } = useForm({ initialValues, onSubmit: (values) => manageData(values) }, createProductValidation)
    const { name, price, imageSrc, sideImagesSrc, colors, sizes, vendorName, description, category, gender, featuring, features, rating, countInStock } = values;
    const [colorName, setColorName] = useState('');
    const [colorImage, setColorImage] = useState('');
    const [sizeInput, setSizeInput] = useState('');
    const [featureInput, setFeatureInput] = useState('');

    // handle submit
    const manageData = (values) => {
        dispatch(createProduct(values));
    };

    // upload single image file (product main image)
    const uploadMainImage = async (event) => {
        event.preventDefault();
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
            console.error(error)
        }
    }

    // upload multiple image files (side images)  
    const uploadSideImages = async (event) => {
        event.preventDefault();
        if (fileList.length !== 0) {
            const formData = new FormData();
            for (let i = 0; i < fileList.length; i++) {
                formData.append('imageSrc', fileList[i])
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
            dispatch(popupMessage('Please insert an image'));
        }
    };

    // upload color image source
    const uploadColorImage = async (event) => {
        event.preventDefault();
        const formData = new FormData()
        formData.append('imageSrc', colorImage);
        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
            const response = await axios.post('/api/upload/side-images', formData, config)
            if (response.status === 201) {
                dispatch(popupMessage('Color variety image uploaded boss!'))
                setColorImage(response.data);
            }
        } catch (error) {
            console.error(error)
        }
    };

    // Push color items to color array
    const pushColorVariety = (e, colorName, colorImage) => {
        e.preventDefault();
        const newVariety = {
            colorName: colorName,
            imageSrc: colorImage[0].imageSrc
        }
        setValues({ ...values, colors: [...colors, newVariety] });
        setColorName('');
        setColorImage('');
    };

    // Delete color item from colors array
    const deleteColor = (colorName) => {
        setValues({ ...values, colors: colors.filter(color => color.colorName !== colorName) })
    };

    // Push size items to sizes array
    const pushSizeOptions = (e, size) => {
        e.preventDefault();
        setValues({ ...values, sizes: [...sizes, size] });
        setSizeInput('');
    };

    // Delete size item from sizes array
    const deleteSize = (size) => {
        setValues({ ...values, sizes: sizes.filter(item => item !== size) })
    };

    // Push feature items to features array
    const pushFeaturesDesc = (e, line) => {
        e.preventDefault();
        setValues({ ...values, features: [...features, line] });
        setFeatureInput('');
    };

    const deleteFeature = (line) => {
        setValues({ ...values, features: features.filter(item => item !== line) });
    };

    useEffect(() => {
        if (success) {
            dispatch(popupMessage('Product created boss 🧢'));
            const timer = setTimeout(() => {
                window.location.reload();
            }, 2600)
            return () => clearTimeout(timer);
        }
    }, [success, dispatch])

    return (
        <Wrapper>
            <h3>Keep always slaying.</h3>
            <PostWrapper>
                <Form onSubmit={handleSubmit} isSubmitting={isSubmitting} buttonTag={"SUBMIT"}>
                    <h1>Create a product.</h1>
                    <InputWrapper>
                        <Form.Variable type="text" name="name" value={name || ''} onChange={handleChange} onBlur={handleBlur} />
                        {touched.name || errors.name ? <Form.Error errorStatus={errors.name} /> : <div />}
                    </InputWrapper>
                    <InputWrapper>
                        <Form.Variable type="text" name="price" value={price || ''} onChange={handleChange} onBlur={handleBlur} />
                        {touched.price || errors.price ? <Form.Error errorStatus={errors.price} /> : null}
                    </InputWrapper>
                    <ImageWrapper>
                        <SignleFileDnD setValues={setValues} values={values} />
                        <button disabled={imageSrc.length !== 0} onClick={uploadMainImage}>upload image</button>
                    </ImageWrapper>
                    {touched.imageSrc || errors.imageSrc ? <Form.Error errorStatus={errors.imageSrc} /> : null}
                    <ImageWrapper>
                        <MultipleFileDnD setValues={setValues} values={values} />
                        <button disabled={sideImagesSrc.length !== 0} className="single_upload" onClick={uploadSideImages}>upload images</button>
                    </ImageWrapper>
                    {touched.sideImagesSrc || errors.sideImagesSrc ? <Form.Error errorStatus={errors.sideImagesSrc} /> : null}
                    <h3 className="color">Add some fancy colors.</h3>
                    <div>
                        <CustomWrapper>
                            <Form.Variable type="text" value={colorName || ''} label="product color name" onChange={(e) => setColorName(e.target.value)} />
                            <ColorImage>
                                <input type="file" id="color-img" onChange={(e) => setColorImage(e.target.files[0])} />
                                <button onClick={uploadColorImage}>upload image</button>
                            </ColorImage>
                            <button className="color_add" onClick={(e) => pushColorVariety(e, colorName, colorImage)}><PlusIcon /></button>
                        </CustomWrapper>
                        {colors && colors.length !== 0 && colors.map((color, index) => (
                            <VarietyPreview key={`color-img-${index}`}>
                                <Preview>
                                    <span>{color.colorName}</span>
                                    <img src={color.imageSrc} alt={`color-img-${index}`} />
                                    <button onClick={() => deleteColor(color.colorName)}><CrossLine /></button>
                                </Preview>
                            </VarietyPreview>
                        ))}
                        {touched.colors || errors.colors ? <Form.Error errorStatus={errors.colors} /> : null}
                    </div>
                    <div>
                        <h3 className="color">Add some comfortable sizes.</h3>
                        <CustomWrapper>
                            <Form.Variable type="text" value={sizeInput || ''} label="available sizes" onChange={(e) => setSizeInput(e.target.value)} />
                            <button className="size_add" onClick={(e) => pushSizeOptions(e, sizeInput)}><PlusIcon /></button>
                        </CustomWrapper>
                        {sizes && sizes.length !== 0 && sizes.map((size, index) => (
                            <SizePreview key={`color-img-${index}`}>
                                <Preview>
                                    <span className="size">{size}</span>
                                </Preview>
                                <button className="delete_size" onClick={() => deleteSize(size)}><CrossLine /></button>
                            </SizePreview>
                        ))}
                        {touched.sizes || errors.sizes ? <Form.Error errorStatus={errors.sizes} /> : null}
                    </div>
                    <InputWrapper>
                        <Form.Variable type="text" name="vendorName" value={vendorName || ''} label="vendor name" onChange={handleChange} onBlur={handleBlur} />
                        {touched.vendorName || errors.vendorName ? <Form.Error errorStatus={errors.vendorName} /> : null}
                    </InputWrapper>
                    <InputWrapper>
                        <Form.Variable type="text" name="category" value={category || ''} onChange={handleChange} onBlur={handleBlur} />
                        {touched.category || errors.category ? <Form.Error errorStatus={errors.category} /> : null}
                    </InputWrapper>
                    <InputWrapper>
                        <Form.TextArea name="description" placeholder="describe your product" value={description || ''} rows="5" onChange={(e) => setValues({ ...values, description: e.target.value })} />
                        {touched.description || errors.description ? <Form.Error errorStatus={errors.description} /> : null}
                    </InputWrapper>
                    <div className="features">
                        <h3 className="color">Write some cool features of the product.</h3>
                        <FeatureWrapper>
                            <Form.Variable type="text" value={featureInput || ''} label="cool things about yout product" onChange={(e) => setFeatureInput(e.target.value)} />
                            <button className="size_add" onClick={(e) => pushFeaturesDesc(e, featureInput)}><PlusIcon /></button>
                        </FeatureWrapper>
                        {features && features.length !== 0 && features.map((line, index) => (
                            <VarietyPreview key={`color-img-${index}`}>
                                <Preview>
                                    <h3 className="size">{line}</h3>
                                    <button onClick={() => deleteFeature(line)}><CrossLine /></button>
                                </Preview>
                            </VarietyPreview>
                        ))}
                        {touched.features || errors.features ? <Form.Error errorStatus={errors.features} /> : null}
                    </div>
                    <CheckboxWrapper>
                        <span>choose gender: </span>
                        <Form.CheckBox name="male" checked={gender === 'male' ? true : false} onChange={(e) => setValues({ ...values, gender: e.target.name })} />
                        <Form.CheckBox name="female" checked={gender === 'female' ? true : false} onChange={(e) => setValues({ ...values, gender: e.target.name })} />
                        {touched.gender || errors.gender ? <Form.Error errorStatus={errors.gender} /> : null}
                    </CheckboxWrapper>
                    <CheckboxWrapper>
                        <Form.CheckBox label="make this a featuring product" name="featuring" checked={featuring || false} onChange={handleChange} />
                    </CheckboxWrapper>
                    <InputWrapper>
                        <Form.Variable type="text" name="rating" value={rating || ''} label="rate your product" onChange={handleChange} onBlur={handleBlur} />
                        {touched.rating || errors.rating ? <Form.Error errorStatus={errors.rating} /> : null}
                    </InputWrapper>
                    <InputWrapper>
                        <Form.Variable type="text" name="countInStock" value={countInStock || ''} label="count in stock" onChange={handleChange} onBlur={handleBlur} />
                        {touched.countInStock || errors.countInStock ? <Form.Error errorStatus={errors.countInStock} /> : null}
                    </InputWrapper>
                </Form>
            </PostWrapper>
        </Wrapper>
    )
}
