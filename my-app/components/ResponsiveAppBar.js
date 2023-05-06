import React from "react";
import AppBar from '@mui/material/AppBar';

import Button from '@mui/material/Button';

const pages = ['About', 'Contact Us', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
import Link from 'next/link';
import styled from "styled-components";



export default function ResponsiveAppBar() {
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'University', path: '/university' },
        { name: 'Blog', path: '/blog' },
        { name: 'Culture', path: '/culture' },
        { name: 'Hobbies', path: '/hobbies' },
    ];

    return (
        <AppBar position = "absolute" style = {{background: "#FFFFFF", boxShadow: "none", alignItems: "center"}}>
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
