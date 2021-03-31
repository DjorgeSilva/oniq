import styled from "styled-components"
import bannerIMG from "../../assets/service7.png"


export const Container = styled.div`
    width: 100%;
    height: fit-content;
`

export const BannerHome = styled.div`
    width: 100%;
    height: 400px;
    position: relative;
    overflow: hidden;
        img{
            width: 100%;
            object-fit: cover;
            z-index: 10;
            
        }

        .box-txt-banner{
            width: 100%;
            height: 100%;
            background-color:rgba(0, 40, 66, .5);
            position: absolute;
            top: 0;
            left:0;

            .inner{
                width: 90%;
                height: fit-content;
                position: absolute;
                top: 43%;

                h1{
                font-size: clamp(2.3rem, 2.5vw, 3rem);
                color: ${props => props.theme.primary_color}
                }
                h2{
                    font-size: clamp(2.5rem, 2.5vw, 3rem);
                    color: #fff;
                }
        }
    }
`

export const Main = styled.div`
    width: 100%;
    height: fit-content;
`

export const Share = styled.div`
    width: 100%;
    height: fit-content;
`