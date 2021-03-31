import React from 'react'
import { Row, Col } from "react-bootstrap"
import {
    Container,
    InnerGrid
} from "./OurCustomersElements"
import { Layout } from "../Layout/Layout"

import logo1 from "../../assets/logo1.jpg"
import logo2 from "../../assets/logo2.jpg"
import logo3 from "../../assets/logo3.jpg"
import logo4 from "../../assets/logo4.png"
import logo5 from "../../assets/logo5.jpg"
import logo6 from "../../assets/logo6.jpg"
import logo7 from "../../assets/logo7.png"
import logo8 from "../../assets/logo8.jpg"
import logo9 from "../../assets/logo9.jpg"
import logo10 from "../../assets/logo10.jpg"
import logo11 from "../../assets/logo11.png"
import logo12 from "../../assets/logo12.jpg"

export const OurCustomers = () => {
    return (
        <Layout>
            <Container id="container-costumer">
                <Row>

                    <Col lg={4}>
                        <InnerGrid>
                            <h1>Our Customers</h1>
                            <p>trust in our work and we are part of their success!</p>
                        </InnerGrid>
                    </Col>

                    <Col lg={8}>

                        <InnerGrid>
                            <Row>
                                <Col sm={6} md={4} lg={3} xl={2} className="coluna">
                                    <img src={logo1} alt="" />
                                </Col>

                                <Col sm={6} md={4} lg={3} xl={2} className="coluna">
                                    <img src={logo2} alt="" />
                                </Col>

                                <Col sm={6} md={4} lg={3} xl={2} className="coluna">
                                    <img src={logo3} alt="" />
                                </Col>

                                <Col sm={6} md={4} lg={3} xl={2} className="coluna">
                                    <img src={logo4} alt="" />
                                </Col>

                                <Col sm={6} md={4} lg={3} xl={2} className="coluna">
                                    <img src={logo5} alt="" />
                                </Col>

                                <Col sm={6} md={4} lg={3} xl={2} className="coluna">
                                    <img src={logo6} alt="" />
                                </Col>

                                <Col sm={6} md={4} lg={3} xl={2} className="coluna">
                                    <img src={logo7} alt="" />
                                </Col>

                                <Col sm={6} md={4} lg={3} xl={2} className="coluna">
                                    <img src={logo8} alt="" />
                                </Col>

                                <Col sm={6} md={4} lg={3} xl={2} className="coluna">
                                    <img src={logo9} alt="" />
                                </Col>

                                <Col sm={6} md={4} lg={3} xl={2} className="coluna">
                                    <img src={logo10} alt="" />
                                </Col>

                                <Col sm={6} md={4} lg={3} xl={2} className="coluna">
                                    <img src={logo11} alt="" />
                                </Col>

                                <Col sm={6} md={4} lg={3} xl={2} className="coluna">
                                    <img src={logo12} alt="" />
                                </Col>


                            </Row>
                        </InnerGrid>
                    </Col>
                </Row>
            </Container>
        </Layout>

    )
}
