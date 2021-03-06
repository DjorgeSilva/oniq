import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: fit-content;
    overflow: hidden;
`
export const InnerGrid = styled.div`
    width: 80%;
    height: fit-content;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 950px){
        margin-top: 100px;
    }

    h1{
        display: block;
        font-size: clamp(2.8rem, 2.5vw, 5rem);
        color: ${props => props.theme.primary_color};
        margin: 20px auto;
        margin-top: 50px;
        text-align: center;
        font-weight: bolder;

        @media (min-width: 950px){
            text-align:left;
        }
    }

    p{
        display: block;
        width: 90%;
        font-size: clamp(1.4rem, 2.5vw, 1.4rem);
        color:#8f8f8f;
        margin: 20px auto;
        text-align: center;
        font-weight: 600;
        line-height: 30px;
        overflow:hidden;
        margin-bottom: 30px;

        @media (min-width: 950px){
            text-align:left;
        }
    }

    .coluna{
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        margin: 15px 0;
        img{
            width: 120px;
            object-fit: cover;

            @media (min-width: 950px){
                width: 100%;
            }

            @media (min-width: 1200px){
                width: 105%;
            }
        }
        @media (min-width: 1200px){
                margin-top: 60px;
            }
    }
`