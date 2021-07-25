import React from 'react'
import styled from "styled-components/macro"
// components
import { Display } from "../compononets"
// styled-component
import { NavSidebar, Sidebar } from '../compononets/sidebar'

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    @media(max-width: 962px) {
        flex-direction: column;
    }
`;

export default function Home() {

    return (
        <Wrapper>
            <Sidebar>
                <NavSidebar />
            </Sidebar>
            <Display />
        </Wrapper>
    )
}
