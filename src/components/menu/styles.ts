import styled from "styled-components"

export const Background = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Menu = styled.div`
    width: 50%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    grid-gap: 100px;
    p{
        color: rgba(3, 28, 38, 0.63);
        cursor: pointer;

        &:hover{
            color: #092B40;
        }
    }
`