import styled from "styled-components";

export const Nav = styled.div`
    width: 100vw;
    height: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Items = styled.div`
    width: 50%;
    margin-right: 50px;
    display: flex;
    flex-direction: row;
    grid-gap: 20px;    
    justify-content: right;
`

export const IconUser = styled.div`
    width: 30px;
    height: 30px;
    background-image: url("../../../public/assets/svg/usuario.svg");
    background-repeat: no-repeat;
    cursor: pointer;
`

export const Cesta = styled.div`
    width: 30px;
    height: 30px;
    background-image: url("../../../public/assets/svg/cesta.svg");
    background-repeat: no-repeat;
    cursor: pointer;
`