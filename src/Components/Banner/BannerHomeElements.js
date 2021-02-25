import styled from "styled-components"

export const BannerTxt = styled.div`
    width: 100%;
    height: 80vh;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow-y: hidden;

    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;

    img{
        margin-bottom: 15px;
    }

    h1{
        font-size: clamp(2.5rem, 2.5vw, 3rem);
        color: #fff;
        margin: 10px 0;
        overflow:hidden;
    }

    h2{
        width: 70%;
        font-size: clamp(2.5rem, 3vw, 3rem);
        color: ${props=> props.theme.secundary_color};
        margin: 10px 0;
        overflow:hidden;
    }

    p{
        width: 85%;
        font-size: clamp(1.9rem, 2.5vw, 2.5rem);
        color: #333;
        text-align: center;
        margin: 10px auto;
        overflow:hidden;


        @media (max-width: 950px){
            display: none;
        }
    }
    button{
        cursor: pointer;
        outline: none;
        padding: 20px 40px;
        margin-top: 20px;
        border-radius: 100px;
        background: ${props=> props.theme.primary_color};
        color: #fff;
        border: none;
        font-size: 1.5rem;
        overflow:hidden;
    }

    @media (min-width: 1100px){
        width: 80%;
    }
`