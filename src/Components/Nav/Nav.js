import React, { useState } from 'react'
import logoIMG from "../../assets/logo.png"
import menuMobile from "../../assets/menuMobile.png"
import fecharMenu from "../../assets/botao-fechar.png"
import { Link, animateScroll as scroll } from "react-scroll";

import {
    Container,
    NavMenu,
    NavItemLogo,
    NavMenuDesktop,
    NavItemMenu,
    SideBar,
} from "./NavElements"

export const Nav = ({ isOpen, setIsOpen }) => {



    const scrollToTop = () => {
        scroll.scrollToTop(-100);
        setIsOpen(!isOpen)
    };


    return (
        <>
            <Container>
                <NavMenu>
                    <NavItemLogo>
                        <img src={logoIMG} alt="logomarca oniQ" onClick={scrollToTop} />
                    </NavItemLogo>

                    <NavMenuDesktop>
                        <nav>
                            <ul>
                                <li><Link className="link-menu" activeClass="active" onClick={() => scrollToTop()} spy={true} offset={-130} smooth={true} duration={100}>Home</Link></li>
                                <li><Link className="link-menu" activeClass="active" to="container-service" spy={true} offset={-30} smooth={true} duration={100}>Services</Link></li>
                                <li><Link className="link-menu" activeClass="active" to="container-costumer" spy={true} offset={-100} smooth={true} duration={100}>Customers</Link></li>
                                <li><Link className="link-menu" activeClass="active" to="container-about" spy={true} offset={-110} smooth={true} duration={100}>About us</Link></li>
                                <li><Link className="link-menu" activeClass="active" to="container-contato" spy={true} offset={-80} smooth={true} duration={100}>Contact us</Link></li>
                            </ul>
                        </nav>
                    </NavMenuDesktop>

                    <NavItemMenu>
                        <img src={(isOpen ? fecharMenu : menuMobile)} alt="menu oniQ" onClick={() => setIsOpen(!isOpen)} />
                    </NavItemMenu>
                </NavMenu>
            </Container>
            <SideBar isOpen={isOpen}>
                <nav>
                    <ul>
                        <li><Link className="link-menu-sidebar" activeClass="active" onClick={() => scrollToTop()} spy={true} offset={-130} smooth={true} duration={100}>Home</Link></li>
                        <li><Link className="link-menu-sidebar" activeClass="active" onClick={() => setIsOpen(!isOpen)} to="container-service" spy={true} offset={-30} smooth={true} duration={100}>Services</Link></li>
                        <li><Link className="link-menu-sidebar" activeClass="active" onClick={() => setIsOpen(!isOpen)} to="container-costumer" spy={true} offset={-100} smooth={true} duration={100}>Customers</Link></li>
                        <li><Link className="link-menu-sidebar" activeClass="active" onClick={() => setIsOpen(!isOpen)} to="container-about" spy={true} offset={-110} smooth={true} duration={100}>About us</Link></li>
                        <li><Link className="link-menu-sidebar" activeClass="active" onClick={() => setIsOpen(!isOpen)} to="container-contato" spy={true} offset={-80} smooth={true} duration={100}>Contact us</Link></li>
                    </ul>
                </nav>
            </SideBar>
        </>
    )
}
