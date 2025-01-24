import React from "react";
import Carousel from "../../containers/carousel/main"
import Navbar from "../../components/navbar/main"
import Header from "../../components/header/main"
import ListProducts from "../../containers/list-container/main";
import Menu from "../../components/menu/main";
import * as S from "./styles"


const Home = () => {
    return (
        <S.Background>
            <Carousel />
            <Navbar />
            <Header />
            <ListProducts />
            <Menu />
        </S.Background>
    )
}

export default Home