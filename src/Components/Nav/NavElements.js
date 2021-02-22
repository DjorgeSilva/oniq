import styled from "styled-components"
import { Link } from "react-router-dom"

export const NavMenu = styled.nav`
    width: 100%;
    height: 80px;
    padding: 10px 15px;
    overflow: hidden;
    position: fixed;
    background: #fff;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -610%);

    z-index: 600000000000;

    @media (min-width: 1300px){
        width: 1300px;
        margin: 0 auto;
    }

`

export const NavItemLogo = styled.div`
    width: 50%;
    height: fit-content;
    float: left;

    img{
        cursor: pointer;
        width: 165px;
        float: left;

        @media (max-width: 400px){
            width: 140px;
        }
    }

    @media (min-width: 950px){
            width: 20%;
    }
`
export const NavMenuDesktop = styled.div`
    width: 70%;
    height: 80px;

    nav{
        width: 100%;
        @media (min-width: 1100px){
            padding-left: 100px;
    }
        ul{
            display: inline-block;
            li{
                display: inline;
            }
        }
    }


    @media (max-width: 950px){
            display: none;
    }
`
// export const Translate = styled.div`
//     display: none;
//     width: 10%;
//     background: red;
//     display: flex;
//     justify-content: space-around;
//         p{
//             display: none;
//             font-weight: bolder;
//             @media (min-width: 950px){
//         display: block;
//     }
//         }

//         @media (min-width: 950px){
//         display: block;

// `

export const Linkss = styled(Link)`
    font-size: 1.5rem;
    text-align: center;
    margin-right: 15px;
    color: ${props => props.theme.secundary_color};
`

export const NavItemMenu = styled.div`
    width: 45%;
    height: fit-content;
    float: right;

    img{
        cursor: pointer;
        float: right;
    }

    @media (min-width: 950px){
            display: none;
    }
`
export const SideBar = styled.div`
    width: 100%;
    height: 70vh;
    position: relative;
    top: ${({ isOpen }) => (isOpen ? '20px' : '-1000px')};
    background: ${props => props.theme.ternary_color};
    z-index: 10000;
    overflow-y: hidden;
    nav{
        width: 100%;
        height: 70vh;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow-y: hidden;
        ul{
            width: 100%;
            list-style: none;
            li{
                width: 100%;
                text-align: center;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 60px;
                &:hover{
                    background: #f7f5f5
                }
            }
        }
    }
`

export const Links = styled(Link)`
    font-size: 2.2rem;
    text-align: center;
    font-weight: bolder;
    color: ${props => props.theme.secundary_color}
`