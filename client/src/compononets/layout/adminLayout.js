import React, { useEffect } from 'react'
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import styled from "styled-components/macro";
// components
import { DashboardSidebar, Sidebar } from '../sidebar';

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    @media(max-width: 962px) {
        flex-direction: column;
    }
`;
export default function AdminLayout({ children }) {
    const history = useHistory();
    const { userInfo } = useSelector(state => state.userLogin);

    useEffect(() => {
        if (userInfo && !userInfo.isAdmin) {
            history.push('/');
        } else if (!userInfo) {
            history.push('/login');
        }
    }, [userInfo, history])
    return (
        <Wrapper>
            <Sidebar width="182px">
                <DashboardSidebar />
            </Sidebar>
            {children}
        </Wrapper>
    )
};

AdminLayout.propTypes = {
    children: PropTypes.node.isRequired
};
