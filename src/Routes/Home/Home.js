import React from 'react'
import { ParticlesContainer } from "../../Components/Particles/Particles"
import { Services } from "../../Components/Services/Services"
import {OurCustomers} from "../../Components/OurCustomers/OurCustomers"
import {About} from "../../Components/About/About"
import {Contato} from "../../Components/Contato/Contato"
export const Home = ({ isOpen }) => {
    return (
        <>
            <ParticlesContainer isOpen={isOpen} />
            <Services id="container-service"/>
            <OurCustomers id="container-costumer"/>
            <About id="container-about"/>
            <Contato id="container-contato"/>
        </>
    )
}
