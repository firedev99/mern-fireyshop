import React, { useLayoutEffect, useRef } from 'react';
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from 'react-redux';
import useOnclickOutside from '../hooks/useOnclickOutside';
import { closeEditScreen } from '../redux/actions/userActions';

const Wrapper = styled(motion.div)`
    position: fixed;
    z-index: 99;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0; 
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(3px);
`;

const Inner = styled.div`
    padding: 56px 32px;
    background: rgba(255, 255, 255, 1);
    position: relative;
    z-index: 110;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background: rgba(253, 250, 246, 1);
    border-radius: 24px;
`;

export default function EditScreen({ children, height = 480, width = 372 }) {
    const { modal } = useSelector(state => state.userUpdate);
    const dispatch = useDispatch();
    const ref = useRef(null);

    useOnclickOutside(ref, () => dispatch(closeEditScreen()));

    useLayoutEffect(() => {
        // Get original body overflow
        const originalStyle = window.getComputedStyle(document.body).overflow;
        // Prevent Scrolling on mount
        document.body.style.overflow = "hidden";
        // Re-enable scrolling when component unmounts
        return () => (document.body.style.overflow = originalStyle);
    }, []);

    return (
        <>
            <AnimatePresence>
                {modal && (
                    <Wrapper exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2, ease: [0.43, 0.13, 0.23, 0.96] }}>
                        <Inner ref={ref} style={{ height: height, width: width }}>
                            {children}
                        </Inner>
                    </Wrapper>
                )}
            </AnimatePresence>
        </>
    )
};

EditScreen.propTypes = {
    children: PropTypes.node.isRequired
};
