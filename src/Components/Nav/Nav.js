import React from 'react'
import logoIMG from "../../assets/logo.png"
import menuMobile from "../../assets/menuMobile.png"
import {
    NavMenu,
    NavItemLogo,
    NavMenuDesktop,
    NavItemMenu,
    Translate,
    SideBar,
    Links,
    Linkss
} from "./NavElements"

export const Nav = ({ isOpen, setIsOpen }) => {
    return (
        <>
            <NavMenu>
                <NavItemLogo>
                    <img src={logoIMG} alt="logomarca oniQ" />
                </NavItemLogo>

                <NavMenuDesktop>
                    <nav>
                        <ul>
                            <li><Linkss to="/" style={{textDecoration: "none"}}>Home</Linkss></li>
                            <li><Linkss to="/" style={{textDecoration: "none"}}>Services</Linkss></li>
                            <li><Linkss to="/" style={{textDecoration: "none"}}>Customers</Linkss></li>
                            <li><Linkss to="/" style={{textDecoration: "none"}}>Blog</Linkss></li>
                            <li><Linkss to="/" style={{textDecoration: "none"}}>About us</Linkss></li>
                            <li><Linkss to="/" style={{textDecoration: "none"}}>Contact us</Linkss></li>
                        </ul>
                    </nav>
                </NavMenuDesktop>

                {/* <Translate>
                    <p>PT</p>
                    <p>EN</p>
                </Translate> */}

                <NavItemMenu>
                    <img src={menuMobile} alt="menu oniQ" onClick={() => setIsOpen(!isOpen)} />
                </NavItemMenu>
            </NavMenu>

            <SideBar isOpen={isOpen}>
                <nav>
                    <ul>
                        <li><Links to="/" style={{textDecoration: "none"}}>Home</Links></li>
                        <li><Links to="/" style={{textDecoration: "none"}}>Services</Links></li>
                        <li><Links to="/" style={{textDecoration: "none"}}>Customers</Links></li>
                        <li><Links to="/" style={{textDecoration: "none"}}>Blog</Links></li>
                        <li><Links to="/" style={{textDecoration: "none"}}>About us</Links></li>
                        <li><Links to="/" style={{textDecoration: "none"}}>Contact us</Links></li>
                    </ul>
                </nav>
            </SideBar>
        </>
    )
}
