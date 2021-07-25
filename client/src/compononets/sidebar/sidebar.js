import React from 'react'
import styled from 'styled-components'
import PropTypes from "prop-types"

const Wrapper = styled.div`
    height: calc(100vh - 132px);
    position: sticky;
    top: 12px;
    @media(max-width: 1280px) {
        width: 200px !important;
    }
    @media(max-width: 962px) {
        height: 100%;
        position: relative;
        margin-top: -10px;
    }
`;

export default function Sidebar({ children, width = '262px' }) {
    return (
        <Wrapper style={{ width: width }}>
            {children}
        </Wrapper>
    )
}

Sidebar.propTypes = {
    children: PropTypes.node.isRequired
}

