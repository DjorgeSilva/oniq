import React from 'react'
import Particles from 'react-particles-js';
import { Container, Wrapper } from "./ParticleElements"
import { BannerHome } from "../Banner/BannerHome"
import { Layout } from "../Layout/Layout"

export const ParticlesContainer = ({ isOpen }) => {
  return (
    <Layout>
      <Container isOpen={isOpen}>
        <Particles style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)"}}
          params={{
            "particles": {
              "number": {
                "value": 150,
                "density": {
                  "enable": true,
                  "value_area": 1400
                }
              },
              "color": {
                "value": ["#00416d"]
              },
              "shape": {
                "type": "circle",
                "width": 1,
                "stroke": {
                  "width": 0,
                  "color": "#ff6621"
                }
              },
              "opacity": {
                "value": 0.5211089197812949,
                "random": false,
                "anim": {
                  "enable": true,
                  "speed": 1,
                  "opacity_min": 1,
                  "sync": false
                }
              },
              "size": {
                "value": 5.017060304327615,
                "random": true,
                "anim": {
                  "enable": true,
                  "speed": 15.181158184520175,
                  "size_min": .6,
                  "sync": true
                }
              },
              "line_linked": {
                "enable": true,
                "distance": 130,
                "color": "#ff6621",
                "opacity": 1,
                "width": 3
              },
              "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "bounce",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onhover": {
                  "enable": false,
                  "mode": "repulse"
                },
                "onclick": {
                  "enable": false,
                  "mode": "push"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 400,
                  "line_linked": {
                    "opacity": 1
                  }
                },
                "bubble": {
                  "distance": 400,
                  "size": 10,
                  "duration": 2,
                  "opacity": 8,
                  "speed": 3
                },
                "repulse": {
                  "distance": 200,
                  "duration": 0.4
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": true

          }} />

        <BannerHome />
      </Container>
    </Layout>
  )
}