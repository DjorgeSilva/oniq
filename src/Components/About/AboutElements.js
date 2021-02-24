import styled from "styled-components"
import aboutIMG from "../../assets/about-1.png"

export const Container = styled.div`
    width: 100%;
    height: fit-content;

    @media (min-width: 950px){
        display: flex;
        /* background-image: url(${aboutIMG});
        background-repeat:no-repeat;
        background-position-x:0px;
        background-size: 60vh;
        z-index: 10000; */
    }

    .coluna-txt{
        float: left;
    }

    img{
        width: 50vh;
        height: 50vh;
        object-fit: contain;
        position: absolute;
        top: 10%;
        right: 0;
        z-index: 10000;

    }
`

export const InnerGrid = styled.div`
    width: 100%;
    height: fit-content;
    margin: 0 12px;
    overflow: hidden;

    h1{
        display: block;
        font-size: clamp(3rem, 3vw, 5.5rem);
        color: ${props => props.theme.primary_color};
        margin: 20px auto;
        margin-top: 50px;
        text-align: left;
        font-weight: bolder;
    }

    p{
        display: block;
        width: 95%;
        font-size: clamp(1.3rem, 2.5vw, 1.4rem);
        color:#8f8f8f;
        text-align: justify;
        font-weight: 500;
        line-height: 30px;
        overflow:hidden;
        margin-bottom: 30px;

        @media (min-width: 950px){
            text-align:left;
        }

        span{
            color: ${props => props.theme.secundary_color};
        }
    }
`
export const Fundo = styled.div`
    display: none;
    width: 75vh;
    height: fit-content;
    position: relative;
    top: 0;
    overflow: hidden;   
    z-index: 10;

    @media (min-width: 960px){
        display: block;
    }

    .fundo{
        width: 75%;
        height: 70vh;
        background: ${props => props.theme.primary_color};
        position: relative;
        top: 0;
        margin-top: 40px;
    }
`