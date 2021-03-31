import React, {useEffect, useState} from 'react'
import {Nav} from "../../Components/Nav/Nav"
import {ParticlesContainer} from "../../Components/Particles/Particles"
import {Services} from "../../Components/Services/Services"
import {OurCustomers} from "../../Components/OurCustomers/OurCustomers"
import {About} from "../../Components/About/About"
import {Contato} from "../../Components/Contato/Contato"

export const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    // retorna o tamanho da tela
    const size = useWindowSize();
  
    function useWindowSize() {
      const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
      });
  
      useEffect(() => {
        function handleResize() {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }
  
        window.addEventListener("resize", handleResize);
  
        handleResize();
  
        return () => window.removeEventListener("resize", handleResize);
      }, []);
  
      return windowSize;
    }
    // retorna o tamanho da tela

    
    return (
        <>
            <Nav isOpen={isOpen} setIsOpen={setIsOpen} sizeScreen={size.width} />

            <ParticlesContainer isOpen={isOpen} id="container-particles" />
            <Services id="container-service" />
            <OurCustomers id="container-costumer" />
            <About id="container-about" />
            <Contato id="container-contato" />
        </>
    )
}
