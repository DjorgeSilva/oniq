import React from 'react'
import { ParticlesContainer } from "../../Components/Particles/Particles"
import { Services } from "../../Components/Services/Services"
import {OurCustomers} from "../../Components/OurCustomers/OurCustomers"

export const Home = ({ isOpen }) => {
    return (
        <>
            <ParticlesContainer isOpen={isOpen} />

            <Services />
            <OurCustomers/>
        </>
    )
}
