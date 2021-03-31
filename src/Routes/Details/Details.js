import React from 'react'
import {
    Container,
    BannerHome,
    Main,
    Share
} from "./DetailsElements"
import { Layout } from "../../Components/Layout/Layout"
import bannerIMG from "../../assets/service7.png"

export const Details = ({ DetailsData }) => {
    return (
        <Container>
            <BannerHome>
                <img src={bannerIMG} alt="Banner Detalhes oniQ" />

                <div className="box-txt-banner">
                    <Layout>
                        <div className="inner">
                            <h1>Services Available</h1>
                            <h2>{DetailsData[0].title}</h2>
                        </div>
                    </Layout>
                </div>

            </BannerHome>

            <Layout>
                <Main>
                    <p>{DetailsData[0].desc}</p>

                    <button type="Talk with a consultant"></button>
                    <Share>
                        <p>share</p>
                    </Share>
                </Main>
            </Layout>

        </Container>
    )
}
