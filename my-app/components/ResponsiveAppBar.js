import React from "react";
import AppBar from '@mui/material/AppBar';

import Button from '@mui/material/Button';

const pages = ['About', 'Contact Us', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
import Link from 'next/link';
import styled from "styled-components";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function ResponsiveAppBar() {
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Profile', path: '/profile' },
        { name: 'Logout', path: '/logout' },

    ];

    return (
        <AppBar position = "absolute"  style = {{background: "#FFFFFF", boxShadow: "none", alignItems: "center", top: "10px", left: "10px", right: "10px", zIndex: 1}}>

            <nav>
                <ul>
                    {navItems.map((item) => (
                        <NavbarButton variant="text" color="primary" key={item.path}>
                            <Link legacyBehavior href={item.path}>
                                <a style={{ color: '#696969', textDecoration: 'none' }}>{item.name}</a>
                            </Link>
                        </NavbarButton>
                    ))}

                </ul>

            </nav>
        </AppBar>


    );
}

const NavbarButton = styled(Button)`
    font-size: 20px;

`
