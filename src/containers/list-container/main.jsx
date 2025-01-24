import React from "react";
import * as S from "./styles"
import ScrollLeft from "../../../public/assets/svg/scroll-left.svg"

const ListProducts = () =>{
    return(
<S.Background>
            <S.ListProducts>
                <S.Product>
                    <S.ProductImage />
                    <S.ProductInfo>
                        <p>Nome do Produto</p>
                        <p>R$ 100,00</p>
                    </S.ProductInfo>
                </S.Product>
                <S.Product>
                    <S.ProductImage />
                    <S.ProductInfo>
                        <p>Nome do Produto</p>
                        <p>R$ 150,00</p>
                    </S.ProductInfo>
                </S.Product>
                <S.Product>
                    <S.ProductImage />
                    <S.ProductInfo>
                        <p>Nome do Produto</p>
                        <p>R$ 150,00</p>
                    </S.ProductInfo>
                </S.Product>
                <img src={ScrollLeft}/>
            </S.ListProducts>
        </S.Background>
    )
}

export default ListProducts