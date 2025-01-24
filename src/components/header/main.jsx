import React from "react";
import * as S from "./styles"
import Logo from "../../../public/assets/svg/logo.svg"

const Header = () =>{
    return(
        <S.Header>
            <S.Background>
                <img src={Logo} />
                <h1>TOUR ACT:PROMISE</h1>
                <p>CONCERT MERCH</p>
            </S.Background>
        </S.Header>
    )
}

export default Header