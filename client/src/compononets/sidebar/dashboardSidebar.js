import React from 'react'
import { Link } from 'react-router-dom'
// icons
import { GridIcon, LogoutIcon, PackageIcon, PlusIcon, UsersIcon } from '../../helpers/avatar'
// styled-components
import { Wrapper, NavWrapper } from "./styles/dashboardStyles"

export default function DashboardSidebar() {
    return (
        <Wrapper>
            <Link to="/dashboard/products">
                <NavWrapper>
                    <GridIcon />
                    <span>Products</span>
                </NavWrapper>
            </Link>
            <Link to="/dashboard/new-product">
                <NavWrapper>
                    <PlusIcon />
                    <span>New Product</span>
                </NavWrapper>
            </Link>
            <Link to="/dashboard/orders">
                <NavWrapper>
                    <PackageIcon />
                    <span>Orders</span>
                </NavWrapper>
            </Link>
            <Link to="/dashboard/customers">
                <NavWrapper>
                    <UsersIcon />
                    <span>Customers</span>
                </NavWrapper>
            </Link>
            <NavWrapper>
                <LogoutIcon />
                <span>Logout</span>
            </NavWrapper>
        </Wrapper>
    )
}
