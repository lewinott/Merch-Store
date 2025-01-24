import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import * as S from "./styles";

// Lista de imagens
const images = [
    { src: "/assets/svg/header-1.svg", alt: "Imagem 1" },
    { src: "/assets/svg/header-2.svg", alt: "Imagem 2" },
    { src: "/assets/svg/header-3.svg", alt: "Imagem 3" },
];

const Carousel = () => {
    return (
        <S.Header>
            <S.Title>
                <h1>+OMORROW X +OGETHER</h1>
                <p>OFFICIAL MERCH STORE</p>
            </S.Title>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={-450} // Espaçamento entre slides
                slidesPerView={1.6} // Exibe a imagem principal e partes das laterais
                centeredSlides={true} // Centraliza o slide ativo
                loop={true} // Ativa o looping
                pagination={{ clickable: true }}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <S.SwiperSlideStyled>
                            <img src={image.src} alt={image.alt} />
                        </S.SwiperSlideStyled>
                    </SwiperSlide>
                ))}
            </Swiper>
        </S.Header>
    );
};

export default Carousel;
