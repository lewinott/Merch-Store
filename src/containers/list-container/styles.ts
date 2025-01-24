import styled from "styled-components";


export const Background = styled.div`
    width: 100vw;
    height: 50%;
    grid-gap: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
`
export const ListProducts = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    grid-gap: 22px;

    img{
        margin-bottom: 60px;
        width: 35px;
        cursor: pointer;
    }
`

export const Product = styled.div`
    width: 300px;
    height: 400px;

`
export const ProductImage = styled.div`
    width: 100%;
    height: 70%; 
    background-color: rgba(249, 249, 249, 0.95);
    border-radius: 20px;
    cursor: pointer;

    &:hover{
        border: 1.5px solid;
        border-color: #053B5D;
    }
`

export const ProductInfo = styled.div` 
    display: flex;
    flex-direction: column; 
    justify-content: center; 
    align-items: left;
    padding: 10px;
`
