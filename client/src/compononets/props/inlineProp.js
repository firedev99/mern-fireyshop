import React, { useState, useRef, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";
import DOMPurify from "dompurify";
import useOnclickOutside from "../../hooks/useOnclickOutside";
import useKeypress from "../../hooks/useKeypress";

const PropWrapper = styled.span`
  .inline_text_copy_hidden,
  .inline_text_input_hidden {
    display: none;
  }
  .inline_text_copy_active {
    cursor: pointer;
    padding: 0;
  }
  .inline_text_input_active {
    padding: 0;
    outline: none;
    border: none;
    font: inherit;
    color: inherit;
    text-align: inherit;
    background: transparent;
  }
`;

export default function InlineProp({ text, onSetText }) {
    const { edit } = useSelector(state => state.cart);

    const [isActive, setIsActive] = useState(edit);
    const [inputValue, setInputValue] = useState(text);
    const wrapperRef = useRef(null);
    const textRef = useRef(null);
    const inputRef = useRef(null);

    const enter = useKeypress("Enter");
    const esc = useKeypress("Escape");

    const handleChange = useCallback(
        (event) => {
            setInputValue(DOMPurify.sanitize(event.target.value));
        },
        [setInputValue]
    );

    const onSpanClick = useCallback(() => setIsActive(true), [setIsActive]);

    useOnclickOutside(wrapperRef, () => {
        if (isActive) {
            onSetText(inputValue);
            setIsActive(false);
        }
        if (inputValue.length === 0) {
            onSetText(text);
            setInputValue(text);
        }
    });

    const onEnter = useCallback(() => {
        if (enter) {
            onSetText(inputValue);
            setIsActive(false);
        }
        if (inputValue.length === 0) {
            onSetText(text);
        }
    }, [enter, inputValue, onSetText, text]);

    const onEsc = useCallback(() => {
        if (esc) {
            setInputValue(text);
            setIsActive(false);
        }
    }, [esc, setInputValue, text]);

    useEffect(() => {
        if (isActive) {
            inputRef.current.focus();
        }
    }, [isActive]);

    useEffect(() => {
        if (edit) {
            setIsActive(true);
        }
    }, [edit])

    useEffect(() => {
        if (isActive) {
            onEnter();
            onEsc();
        }
    }, [isActive, onEsc, onEnter]);

    if (typeof inputValue === 'undefined') {
        return null;
    }

    return (
        <PropWrapper ref={wrapperRef} className="indivisual">
            <span
                ref={textRef}
                className={`inline_text_copy_${!isActive ? `active` : `hidden`}`}
                onClick={onSpanClick}
            >
                {text}
            </span>
            <input
                type="text"
                style={{ minWidth: Math.ceil(inputValue.length) + "ch" }}
                className={`inline_text_input_${isActive ? `active` : `hidden`}`}
                ref={inputRef}
                value={inputValue}
                onChange={handleChange}
            />
        </PropWrapper>
    );
}
