import React from 'react'
import service1 from "../../assets/service1.png"
import service2 from "../../assets/service2.png"
import service3 from "../../assets/service3.png"
import service4 from "../../assets/service4.png"
import service5 from "../../assets/service5.jpg"
import service6 from "../../assets/service6.png"
import service7 from "../../assets/service7.png"
import {
    Container,
    Grid,
    InnerGrid
} from "./ServicesElements"
import { Row, Col } from "react-bootstrap"
import { Layout } from "../Layout/Layout"

export const Services = () => {
    return (
        <Layout>
            <Container>
                <h1>Services Available</h1>
                <p>Check out our available services. We have 3 pillars to support the development of solutions for you: <span>Business, Development, and Design.</span></p>

                <Grid>
                    <Row>
                        <Col sm={12} md={6} lg={4} xl={3} className="external">
                            <img src={service1} alt="" />
                            <InnerGrid className="inner" />
                            <h3>Interface design and user experience</h3>
                            <p>+ Details</p>
                        </Col>

                        <Col sm={12} md={6} lg={4} xl={3} className="external">
                            <img src={service2} alt="" />
                            <InnerGrid className="inner" />
                            <h3>Technology Strategy Consulting</h3>
                            <p>+ Details</p>
                        </Col>

                        <Col sm={12} md={6} lg={4} xl={3} className="external">
                            <img src={service3} alt="" />
                            <InnerGrid className="inner" />
                            <h3>Innovation Consulting</h3>
                            <p>+ Details</p>
                        </Col>

                        <Col sm={12} md={6} lg={4} xl={3} className="external">
                            <img src={service4} alt="" />
                            <InnerGrid className="inner" />
                            <h3>IoT development</h3>
                            <p>+ Details</p>
                        </Col>

                        <Col sm={12} md={6} lg={4} xl={3} className="external">
                            <img src={service5} alt="" />
                            <InnerGrid className="inner" />
                            <h3>E-commerce development</h3>
                            <p>+ Details</p>
                        </Col>

                        <Col sm={12} md={6} lg={4} xl={3} className="external">
                            <img src={service6} alt="" />
                            <InnerGrid className="inner" />
                            <h3>E-commerce development</h3>
                            <p>+ Details</p>
                        </Col>

                        <Col sm={12} md={6} lg={4} xl={3} className="external">
                            <img src={service7} alt="" />
                            <InnerGrid className="inner" />
                            <h3>Web development</h3>
                            <p>+ Details</p>
                            <p>+ Details</p>
                        </Col>

                        <Col sm={12} md={6} lg={4} xl={3} className="external">
                            <img src={service7} alt="" />
                            <InnerGrid className="inner" />
                            <h3>Web development</h3>
                            <p>+ Details</p>
                        </Col>
                    </Row>

                </Grid>


            </Container>
        </Layout>
    )
}
