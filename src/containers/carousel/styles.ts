import styled from "styled-components";

export const Header = styled.div`
    width: 100vw;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    cursor: grab;
    
    h1 {
        color: white;
    }
`;

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 1;
    grid-gap: 10px;
    position: absolute;
    align-items: center;
    color: white;
    height: 100px;

    
    h1 {
        font-size: 40px;
        font-family: 'Ciutadella Bold';
    }

    p {
        font-size: 20px;
    }
`;

export const SwiperSlideStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 80%; /* Tamanho relativo da imagem */
        margin: 0 auto; /* Centraliza horizontalmente */
        transition: transform 0.3s ease, opacity 0.3s ease; /* Transições suaves */
        transform: scale(1); /* Escala inicial */

        /* Quando for o slide ativo */
        &.swiper-slide-active {
            transform: scale(1.2); /* Destaque maior para o slide ativo */
        }
    }
`;