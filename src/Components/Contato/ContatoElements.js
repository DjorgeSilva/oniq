import styled from "styled-components"

export const Container = styled.div`
    width: 100vw;
    height: fit-content;
    background: #071B4A;
    overflow: hidden;
`
export const BoxTxt = styled.div`
    width: 100%;
    height: fit-content;
    position: relative;
    top: 0;
    z-index: 1000000;
    margin-bottom: 80px;

    h1{
        width: 80%;
        font-size: clamp(3rem, 3vw, 3.2rem);
        color: ${props => props.theme.primary_color};
        margin: 10px auto;
        text-align: center;
        margin-top: 40px;
    }
    p{
        width: 90%;
        font-size: clamp(1.5rem, 2.5vw, 1.5rem);
        color: #fff;
        text-align: center;
        margin: 10px auto;
        overflow:hidden;
    }
`

export const Form = styled.form`
    width: 100%;
    height: 50%;

    input, textarea{
        display: block;
        width: 85%;
        height: 55px;
        margin: 10px auto;
        border-radius: 5px;
        border: none;
        border: 2px solid ${props => props.theme.primary_color};
        background: transparent;
        color: #fff;
        padding: 0 10px;
        outline: none;

        &::placeholder {
        color: #fff;
        opacity: 1;
    }
    }
    textarea{
        padding:10px;
        height: 200px;
    }

    button{
        display: block;
        width: 85%;
        padding: 15px 0;
        margin: 15px auto;
        margin-bottom: 30px;
        background: ${props=>props.theme.primary_color};
        border: none;
        border-radius: 5px;
        color: #fff;
        font-size: clamp(1.3rem, 2.5vw, 1.3rem);
        font-weight: bolder;
    }

    @media (min-width: 950px){
        width: 50%;
        margin: 0 auto;
    }

    @media (min-width: 1100px){
        width: 40%;
        margin: 0 auto;
    }
`