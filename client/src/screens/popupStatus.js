import React, { useEffect } from 'react'
import styled from 'styled-components/macro'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { popupMessageRemove } from "../redux/actions/statusActions"
import { AnimatePresence, motion } from 'framer-motion'

const Wrapper = styled(motion.div)`
    position: fixed;
    z-index: 120;
    right: 20px;
    top: 26px;
    width: 300px;
    height: auto;
    display: flex;
    flex-direction: column;

    @media(max-width: 640px) {
        width: 220px;
    }

    @media(max-width: 414px) {
        width: 192px;
        right: 10px;
    }
`;

const Inner = styled(motion.div)`
    padding: 24px;
    background: rgba(27, 32, 33, 1);
    text-align: center;
    margin: 10px 0;
    border-radius: 12px;
    h3 {
        color: #fff;
        font-family: "Poppins", sans-serif;
        font-size: 24px;
        line-height: 28px;
    }

    @media(max-width: 640px) {
        h3 {
            font-size: 20px;
            line-height: 24px;
        }
    }
    @media(max-width: 414px) {
        h3 {
            font-size: 18px;
        }
    }
    @media(max-width: 320px) {
        h3 {
            font-size: 16px;
            line-height: 20px;
        }
    }
`;

export default function PopupStatus() {
    const { statusMessages, flash } = useSelector(state => state.status);
    const dispatch = useDispatch();

    const item = statusMessages.map(item => item);

    // flash message and remove status message after 3sec from the array
    useEffect(() => {
        if (flash) {
            const timer = setTimeout(() => {
                dispatch(popupMessageRemove(item));
            }, 3000)
            return () => clearTimeout(timer);
        }
    }, [dispatch, item, flash]);

    return (
        <>
            <Wrapper>
                <AnimatePresence>
                    {statusMessages.map((item, index) => (flash && (
                        <Inner
                            key={`wishlist-status-${index}`}
                            exit={{ x: `100%` }}
                            initial={{ x: `100%` }}
                            animate={{ x: 0 }}
                            transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
                        >
                            <h3>{item.message}</h3>
                        </Inner>
                    )))}
                </AnimatePresence>
            </Wrapper>
        </>
    )
}
