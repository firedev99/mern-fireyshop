import React from 'react'
import { Link } from "react-router-dom"
// logos
import { NewInLogo, ClothingLogo, ShoesLogo, AccessoriesLogo, ActiveWearLogo, BagsLogo } from "../../helpers/avatar"
// styled-components
import { Wrapper, ExploreNav, NewIn, Clothing, Shoes, Accessories, ActiveWear, Bags } from "./styles/navSidebarStyles"


export default function NavSidebar() {
    return (
        <Wrapper>
            <h2 className="sidebar_nav_title">Explore</h2>
            <ExploreNav>
                <Link to="/products">
                    <NewIn>
                        <NewInLogo />
                        <h3>New in</h3>
                    </NewIn>
                </Link>
                <Link to="/products">
                    <Clothing>
                        <ClothingLogo />
                        <h3>Clothing</h3>
                    </Clothing>
                </Link>
                <Link to="/products">
                    <Shoes>
                        <ShoesLogo />
                        <h3>Shoes</h3>
                    </Shoes>
                </Link>
                <Link to="/products">
                    <Accessories>
                        <AccessoriesLogo />
                        <h3>Accessories</h3>
                    </Accessories>
                </Link>
                <Link to="/products">
                    <ActiveWear>
                        <ActiveWearLogo />
                        <h3>Active Wear</h3>
                    </ActiveWear>
                </Link>
                <Link to="/products">
                    <Bags>
                        <BagsLogo />
                        <h3>Bags</h3>
                    </Bags>
                </Link>
            </ExploreNav>
        </Wrapper>
    )
}
