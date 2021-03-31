import React from 'react'
import {
    Container,
    InnerGrid,
    imgAbout,
    Fundo
} from "./AboutElements"
import { Layout } from "../Layout/Layout"
import aboutIMG from "../../assets/about.png"
import { Row, Col } from "react-bootstrap"
export const About = () => {
    return (
        <Container id="container-about">
            <Row>
                <Col sm={0} lg={5}>
                    <Fundo>
                        <div className="fundo"></div> 
                    </Fundo>
                    <img src={aboutIMG} alt="" />
                </Col>
                <Col sm={12} lg={6} className="coluna-txt">
                    <Layout>
                        <InnerGrid>
                            <h1>About us</h1>
                            <p>Oniq can help your business to achieve great results. Our development process of products and services is based on the best market practices. Moreover, we encourage the customers' presence in all development steps to ensure their satisfaction. We strive to achieve the best results and satisfaction.</p>
                            <p>We care about developing products that our customers love: Mobile apps, Web sites, and IoT enabled projects. Our team is capable of solving problems that may be annoying you and standing in the way of your business' progress. We can help you overcome the most challenging obstacles.</p>
                            <p><span>We have a highly qualified team and we work with the best suppliers. Therefore we deliver security and quality in our products and services.</span></p>
                        </InnerGrid>
                    </Layout>
                </Col>
            </Row>
        </Container>
    )
}
