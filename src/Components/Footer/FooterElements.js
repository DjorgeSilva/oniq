import styled from "styled-components"
import {Link} from "react-router-dom"

export const Container = styled.div`
    width: 100%;
    height: fit-content;    
    color: #fff;
    
    @media (min-width: 1200px){
        width: 1200px;
        margin: 0 auto;
    }

    .Coluna-image{
        width: 50%;
        height: fit-content;
        margin-bottom: 40px;

        img{
            display: block;
            width: 200px;
            margin: 0 auto;
            
        }
    }
    .Coluna{
        margin: 20px 25px; 

        h4{
            font-size: 1.4rem;
        }

        nav{
            width: 100%;
            height: fit-content;
            margin-top: 20px;
        }
        p{
            cursor: pointer;
        }
        hr{
            width: 90%;
            background-color: #fff;
            margin: 30px 0;
        }
        h6{
            font-size: 1.2rem;
            text-align: center;
        }
    }

    .endereco{
        width: 100%;
    }
`
export const Links = styled(Link)`
    font-size: 1.2rem;
    text-align: center;
    margin-right: 15px;
    color: #fff;

    &:hover{
        color: #fff;
    }
    
`
