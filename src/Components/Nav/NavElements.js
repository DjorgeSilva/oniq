import styled from "styled-components"
import { Link } from "react-scroll"



export const Container = styled.div`
    width: 100%;
    height: 120px;
    padding: 20px 15px;
    overflow: hidden;
    position: fixed;
    background: #fff;

    top: 3%;
    left: 50%;
    transform: translate(-50%, -50%);

    z-index: 600000000000;


`;

export const NavMenu = styled.nav`
    width: 100%;
    height: 100px;
    margin-top: 22px;

    @media (min-width: 1300px){
        width: 1300px;
        margin: 0 auto;
        margin-top: 20px;
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
            width: 25%;
    }

`
export const NavMenuDesktop = styled.div`
    width: 75%;
    height: 80px;
    float: right;

    nav{
        width: fit-content;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        float: right;

        ul{
            display: inline-block;
            li{
                display: inline;
                margin-left: 5px;
                .link-menu{
                    cursor: pointer;
                    font-size: 1.5rem;
                    text-align: center;
                    font-weight: bolder;
                    color: ${props => props.theme.secundary_color};
                    margin-right: 10px;
                    text-decoration: none;
                    &:hover{
                        color: ${props => props.theme.primary_color};
                    }
                }
            }
        }

    }


    @media (max-width: 950px){
            display: none;
    }
`

export const Linkss = styled(Link)`
    cursor: pointer;
    font-size: 1.3rem;
    text-align: center;
    margin-right: 15px;
    color: ${props => props.theme.secundary_color};
    text-transform: uppercase;
    font-weight: bold;
`

export const NavItemMenu = styled.div`
    width: 50%;
    height: fit-content;

    img{
        width: 40px;
        cursor: pointer;
        float: right;
        margin-top: 10px;
      
    }

    @media (min-width: 950px){
            display: none;
    }
`
export const SideBar = styled.div`
    width: 100%;
    height: 70vh;
    position: fixed;
    top: ${({ isOpen }) => (isOpen ? '20px' : '-1000px')};
    background: ${props => props.theme.ternary_color};
    z-index: 100000000;
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

                .link-menu-sidebar{
                    font-size: 1.8rem;
                    font-weight: bolder;
                    color: ${props => props.theme.secundary_color};
                    text-decoration: none;
                    &:hover{
                        color: ${props => props.theme.primary_color};
                    }
                }
            }
        }
    }

    @media (min-width: 950px){
        visibility: hidden;
    }

`

export const Linksss = styled(Link)`
    font-size: 2.2rem;
    text-align: center;
    font-weight: bolder;
    color: ${props => props.theme.secundary_color}
`