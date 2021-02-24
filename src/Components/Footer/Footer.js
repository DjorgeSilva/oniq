import React from 'react'
import { Row, Col } from "react-bootstrap"
import {
    Container,
    Links,
} from "./FooterElements"
import logoIMG from "../../assets/logo-2.png"
import {Layout} from "../Layout/Layout"

export const Footer = () => {
    return (
        <Container>
            <Row>
                <Col sm={12} md={3} className="Coluna-image">
                    <img src={logoIMG} alt="Logomarca oniQ" />
                </Col>

                <Col sm={12} md={2} className="Coluna">
                    <h4>Our Website</h4>
                    <nav>
                        <ul>
                            <li><Links to="/" style={{ textDecoration: "none" }}>Home</Links></li>
                            <li><Links to="/" style={{ textDecoration: "none" }}>Services</Links></li>
                            <li><Links to="/" style={{ textDecoration: "none" }}>Customers</Links></li>
                            <li><Links to="/" style={{ textDecoration: "none" }}>Blog</Links></li>
                            <li><Links to="/" style={{ textDecoration: "none" }}>About us</Links></li>
                            <li><Links to="/" style={{ textDecoration: "none" }}>Contact us</Links></li>
                        </ul>
                    </nav>
                </Col>

                <Col sm={12} md={2} className="Coluna">
                    <h4>Keeping in touch</h4>
                    <nav>
                        <ul>
                            <li><Links to="/" style={{ textDecoration: "none" }}>Facebook</Links></li>
                            <li><Links to="/" style={{ textDecoration: "none" }}>Instagram</Links></li>
                            <li><Links to="/" style={{ textDecoration: "none" }}>Linkedin</Links></li>
                            <li><Links to="/" style={{ textDecoration: "none" }}>Whatsapp</Links></li>
                        </ul>
                    </nav>
                </Col>

                <Col sm={12} md={2} className="Coluna endereco">
                    <p>contato@oniq.com.br</p>
                    <p>+5565981677770</p>
                    <p>+556521290041</p>
                    <p>Avenida Erico Preza Gonçalves Filho, 1253, Sala 14-A, Alpha Mall 1, Jd Italia, Cuiabá-MT</p>
                </Col>

                <Col sm={12} className="Coluna">
                    <hr />
                    <h6>All rights reserved © 2020 ONIQ TECNOLOGIA</h6>
                </Col>
            </Row>
        </Container>
    )
}
