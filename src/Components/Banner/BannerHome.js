import React from 'react'
import icone_startup from "../../assets/icone-startup.png"
import {
    BannerTxt
} from "./BannerHomeElements"
import { Layout } from "../Layout/Layout"

export const BannerHome = () => {
    return (
        <Layout>
            <BannerTxt>
                <img src={icone_startup} alt="" />
                <h1>Technology Strategy:</h1>
                <h2>Tech product development from the beginning to success!</h2>
                <p>Apps, Web sites, Artificial Intelligence, Internet of Things, and Big data we can provide to you!</p>
                <button type="button">Let's talk?</button>
            </BannerTxt>
        </Layout>
    )
}
