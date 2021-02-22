import styled from "styled-components"


export const Container = styled.div`
    width: 70%;
    height:80vh;
    position: absolute;
    top: ${({ isOpen }) => (isOpen ? '120px' : '120px')};
    overflow-y:hidden;
    margin-bottom: 20px;
    left: 50%;
    transform: translate(-50%, -3%);
`
