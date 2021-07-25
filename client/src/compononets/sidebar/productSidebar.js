import React, { useState, useEffect } from 'react'
// redux
import { useDispatch, useSelector } from "react-redux"
import { filterByClick, sortByAlphabet, sortByPrice, filterByCheckbox, filterByRange, resetFilters } from "../../redux/actions/filterActions"
// icons
import { CrossLine } from '../../helpers/avatar'
// styled
import { Wrapper, Categories, Container, SortingOptions, CheckboxOptions, RangeInput } from './styles/productSidebarStyles'
import { AnimatePresence } from 'framer-motion'

const options = [
    { id: 0, value: 'price_asc', name: 'Lowest to Highest' },
    { id: 1, value: 'price_desc', name: 'Highest to Lowest' },
    { id: 2, value: 'alphabet_asc', name: 'Name - A - Z' },
    { id: 3, value: 'alphabet_desc', name: 'Name - Z - A' },
];

export default function ProductSidebar({ modal, setModal }) {
    const { products, filters } = useSelector(state => state.productList);
    const dispatch = useDispatch();

    const [price, setPrice] = useState(0);
    const [active, setActive] = useState('')
    const minPrice = products && Math.round(Math.min(...products.map(item => item.price)));
    const maxPrice = products && Math.round(Math.max(...products.map(item => item.price)));
    // filter gender and remove duplicate values
    const gender = products && products.map(item => item.gender);
    const uniqeGender = Array.from(new Set(gender));
    // filter category and remove duplicate values
    const categories = products && products.map(item => item.category);
    const uniqueCategories = Array.from(new Set(categories));

    const handleSelect = (event) => {
        let value = event.target.value;
        let direction = value.endsWith('asc') ? 'asc' : 'desc';
        if (value.startsWith('price')) {
            dispatch(sortByPrice({ direction }));
        } else {
            dispatch(sortByAlphabet({ direction }));
        }
        setModal && setModal(false);
    };

    const handleRange = (event) => {
        let value = event.target.value;
        dispatch(filterByRange({ rangeValue: value }));
        setPrice(value);
    };

    const handleCheckBox = (event) => {
        let value = event.target.value;
        dispatch(filterByCheckbox({ checked: value }))
        setModal && setModal(false);
    };

    const handleClick = (item) => {
        dispatch(filterByClick({ clickEvent: item }))
        setActive(item);
        setModal && setModal(false);
    };

    useEffect(() => {
        setPrice(maxPrice)
    }, [maxPrice]);

    if (products.length === 0) return <div></div>;
    return (
        <AnimatePresence>
            <Wrapper initial={{ x: modal ? '-100%' : 0 }} animate={{ x: '0', transition: { duration: 0.2, ease: [0.43, 0.13, 0.23, 0.96] } }}>
                <Container>
                    {modal && (
                        <button className="close_filter" onClick={() => setModal(false)}>
                            <CrossLine />
                        </button>
                    )}
                    <Categories>
                        <h3>Filter by category</h3>
                        {products && uniqueCategories.map((item, index) => (
                            <span onClick={() => handleClick(item)} style={{ border: item === active ? `2px solid rgba(166, 214, 214, 1)` : `2px solid rgba(166, 214, 214, 0.3)`, fontWeight: item === active ? `500` : `400` }} key={index}>{item}</span>
                        ))}
                        <span style={{ border: `2px solid rgba(166, 214, 214, 0.3)` }} onClick={() => { dispatch(resetFilters()); setActive('') }}>
                            <CrossLine />
                            <span>reset filters</span>
                        </span>
                    </Categories>
                    <div className="rest_props">
                        <SortingOptions>
                            <select defaultValue="Sort By" onChange={e => { handleSelect(e) }}>
                                <option value="Sort By" disabled>Sort by</option>
                                {options.map(item => (
                                    <option key={`options-${item.id}`} value={item.value}>{item.name}</option>
                                ))}
                            </select>
                        </SortingOptions>

                        {products && uniqeGender.map((item) => (
                            <CheckboxOptions key={`checkbox-${item}`}>
                                <input type="checkbox" id={item} name={item} value={item} checked={filters.includes(item)} onChange={handleCheckBox} />
                                <label htmlFor={item}>{item}</label>
                            </CheckboxOptions>
                        ))}
                        <RangeInput style={{ display: `flex`, flexDirection: `column` }}>
                            <input type="range" id="price_range" min={minPrice} max={maxPrice} value={price} onChange={handleRange} />
                        </RangeInput>
                    </div >
                </Container>
            </Wrapper>
        </AnimatePresence>
    )
}
