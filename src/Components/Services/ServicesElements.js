import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: fit-content;
    margin-top: 200px;
    overflow-y:hidden;
    
    h1{
        display: block;
        font-size: clamp(4rem, 2.5vw, 5rem);
        color: ${props => props.theme.primary_color};
        margin: 20px auto;
        margin-top: 50px;
        text-align: center;
        font-weight: bolder;
    }
    p{
        display: block;
        width: 60%;
        font-size: clamp(1.4rem, 2.5vw, 1.4rem);
        color:#5e5e5e;
        margin: 20px auto;
        text-align: center;
        font-weight: 600;
        line-height: 30px;
        overflow:hidden;

        span{
            color: ${props => props.theme.secundary_color}
        }
    }
`;


export const Grid = styled.div`
    width: 100%;
    height: fit-content;
    overflow:hidden;

    .external{
        width: 80%;
        height: 350px;
        overflow:hidden;
        margin: 20px auto;
        cursor: pointer;
        
        &:hover > .inner{
            background: ${props=> props.theme.primary_color};
        }

        &:hover  p{
            background: ${props=> props.theme.primary_color};
    }

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: absolute;
            opacity: .9;
        }
    }
    h3{
        width: 80%;
        opacity: 1;
        color: #fff;
        font-weight: bolder;
        font-size: clamp(2rem, 2.5vw, 2rem);
        z-index: 40000000;
        text-align: center;
        position: absolute;
        top: 47%;
        left: 50%;
        transform: translate(-50%, -50%)
    }
    p{
        z-index: 40000000;
        width: 100%;
        height: 50px;
        position: absolute;
        bottom: -20px;
        color: #fff;
        background: ${props=> props.theme.secundary_color};
        padding-top: 10px;
    }
`

export const InnerGrid = styled.div`
    width: 100%;
    height: 350px;
    background: ${props=> props.theme.secundary_color};
    position: absolute;
    z-index: 20000;
    opacity: .7;
`
