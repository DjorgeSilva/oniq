import React, {useState} from 'react'
import logoIMG from "../../assets/logo.png"
import menuMobile from "../../assets/menuMobile.png"
import fecharMenu from"../../assets/botao-fechar.png"

import {
    Container,
    NavMenu,
    NavItemLogo,
    NavMenuDesktop,
    NavItemMenu,
    SideBar,
    Linksss,
    Linkss
} from "./NavElements"

export const Nav = ({ isOpen, setIsOpen }) => {

    const handler = (scroll, section) =>{
        if(section === "service"){
            window.scrollTo(0, scroll);
            setIsOpen(!isOpen);
        }
        if(section === "home"){
            window.scrollTo(0, scroll);
            setIsOpen(!isOpen);
        }
        if(section === "costumer"){
            window.scrollTo(0, scroll);
            setIsOpen(!isOpen);
        }
        if(section === "about"){
            window.scrollTo(0, scroll);
            setIsOpen(!isOpen);
        }
        if(section === "contato"){
            window.scrollTo(0, scroll);
            setIsOpen(!isOpen);
        }
    }

    return (
        <>
            <Container>
                <NavMenu>
                    <NavItemLogo>
                        <img src={logoIMG} alt="logomarca oniQ" />
                    </NavItemLogo>

                    <NavMenuDesktop>
                        <nav>
                            <ul>
                                <li><Linkss to="/" style={{ textDecoration: "none" }} onClick={()=>handler(0, "home")}>Home</Linkss></li>
                                <li><Linkss to="/" style={{ textDecoration: "none" }} onClick={()=>handler(800, "service")}>Services</Linkss></li>
                                <li><Linkss to="/" style={{ textDecoration: "none" }} onClick={()=>handler(1800, "costumer")}>Customers</Linkss></li>
                                <li><Linkss to="/" style={{ textDecoration: "none" }}  onClick={()=>handler(2200, "about")}>About us</Linkss></li>
                                <li><Linkss to="/" style={{ textDecoration: "none" }} onClick={()=>handler(2945, "contato")}>Contact us</Linkss></li>
                            </ul>
                        </nav>
                    </NavMenuDesktop>

                    <NavItemMenu>
                        <img src={(isOpen?fecharMenu:menuMobile)} alt="menu oniQ" onClick={() => setIsOpen(!isOpen)}/>
                    </NavItemMenu>
                </NavMenu>
            </Container>
            <SideBar isOpen={isOpen}>
                <nav>
                    <ul>
                        <li><Linksss to="/" style={{ textDecoration: "none" }} onClick={()=>handler(0, "home")}>Home</Linksss></li>
                        <li><Linksss to="/" style={{ textDecoration: "none" }} onClick={()=>handler(800, "service")}>Services</Linksss></li>
                        <li><Linksss to="/" style={{ textDecoration: "none" }} onClick={()=>handler(1800, "costumer")}>Customers</Linksss></li>
                        <li><Linksss to="/" style={{ textDecoration: "none" }}  onClick={()=>handler(2200, "about")}>About us</Linksss></li>
                        <li><Linksss to="/" style={{ textDecoration: "none" }} onClick={()=>handler(2945, "contato")}>Contact us</Linksss></li>
                    </ul>
                </nav>
            </SideBar>
        </>
    )
}
