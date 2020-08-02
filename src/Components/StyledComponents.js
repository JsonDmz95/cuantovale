import styled from "@emotion/styled";

import { myBlue, myBody, myInputShadow, cardShadoe } from "./colores";

import icon_ubicacion from "../img/icon-ubicacion.svg";
import icon_dormitorios from "../img/icon-dormitorios.svg";
import icon_banos from "../img/icon-banos.svg";
import icon_ubicacion_white from "../img/icon-ubicacion-white.svg";
import icon_dormitorios_white from "../img/icon-dormitorios-white.svg";
import icon_banos_white from "../img/icon-banos-white.svg";

// Styled Components
export const Formulario = styled.form`
  padding: 50px 0px;

  .section-title {
    font-size: 18px;
    margin-bottom: 30px;
    strong, b {
      font-weight: 500;
    }

    label{
      margin-left: 10px;
      sup{
        color: rgb(${myBlue});
      }
    }
  }

  #specific{
    &, &+label{
      cursor: pointer;
    }
  }

  .left-icon {
    margin-right: 15px;
  }

  .divider {
    height: 2px;
    width: 25px;
    background: rgba(${myBlue}, 0.3);
    margin-bottom: 15px;
  }

  @media (min-width: 768px) {
    padding: 50px 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .section-title {
      width: 100%;
    }

    .divider-container {
      flex-basis: 100%;
    }
  }

  @media (min-width: 992px){
    flex-direction: column;
    justify-content: flex-start;
    padding: 50px 25px 0px 25px;
  }

  @media (min-width: 1200px){
    /* padding-top: 70px */
  }

  @media (min-width: 1400px){
    padding-left: 45px;
    padding-right: 45px;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  line-height: 1;
  color: rgba(0, 0, 0, 0.75);
  margin-bottom: 30px;

  label {
    margin-bottom: 15px;

    &.required::after {
      content: "*";
      color: rgb(${myBlue});
    }
  }

  select,
  input {
    appearance: none;
    padding: 13px 10px 13px 25px;
    background-color: rgb(${myBody});
    border: none;
    border-radius: 21px;
    outline: none;
    box-shadow: inset 10px 10px 15px rgba(${myInputShadow}, 0.5);
    text-transform: capitalize;

    ::placeholder {
      color: rgba(0, 0, 0, 0.4);
    }
  }

  @media (min-width: 768px) {
    width: 45%;
  }

  @media (min-width: 992px) {
    width: 100%;
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    label{
      margin-bottom: 0px;
    }

    select{
      width: 200px;
      cursor: pointer;
    }

    input{
      width: 120px
    }
  }

`;

export const ImageBg = styled.img`
  opacity: 0.03;
`;

export const MainTitle = styled.h2`
    font-size: 40px;
    color: #000;
    margin-bottom: 30px;

    &.second{
      margin-top: 100px;
      margin-bottom: 0px;
    }
`;

export const ResultCard = styled.div`
  background: #fff;
  border-radius: 40px;
  box-shadow: -10px 4px 60px rgba(${cardShadoe}, 0.5); 
  padding: 30px;

  .resultado-container{
    .division-title{
      font-size: 18px;
      font-weight: 700;
      text-transform: uppercase;
      color: #000;
      margin-bottom: 30px;
    }

    .item-info{
      margin-bottom: 30px;
      /* text-transform: capitalize; */
    }

    .resultado{
      padding-top: 30px;

      .precio{
        font-weight: 800;
        font-size: 42px;
        text-shadow: 0px 10px 15px rgba(${myBlue}, 0.2);
        padding-top: 20px;
      }

      .btn-container{
        padding-top: 50px;
      }
    }
  }

  @media (min-width: 1400px){
    padding: 50px;
    .resultado-container{
      display: flex;
      flex-direction: row;
      align-items: flex-start;

      .resultado{
        padding-top: 0px;
        width: 50%;
        padding-left: 15px;
      }
    }
  }
`;

export const ItemCard = styled.div`
  background: #fff;
  padding: 30px 25px;
  border-radius: 40px;
  box-shadow: -10px 4px 60px rgba(${cardShadoe}, 0.5);
  transition: all ease 0.5s;

  p{
    margin-bottom: 15px;
  }

  .info{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    span{
      margin-bottom: 10px;

      &::before{
        content:'';
        display: inline-block;
        height: 18px;
        width: 18px;
        margin-right: 10px;
      }

      &.dormitorios::before{
        background-image: url(${icon_dormitorios}) 
      }
      &.banos::before{
        background-image: url(${icon_banos}) 
      }
      &.comuna::before{
        background-image: url(${icon_ubicacion}) 
      }
      
    }
  }

  @media (min-width: 768px){
    .info{
      flex-direction: row;
      justify-content: space-between;

      span{
        margin-bottom: 0;
      }
    }
  }
`;

export const ItemCardLink = styled.a`
  &:hover, &:focus{
    text-decoration: none;

    .item-card{
      background: rgb(${myBlue});
      box-shadow: -10px 4px 40px rgba(${myBlue}, 0.3);
      color: #fff;
      p{
        color: #fff;
      }

      .info span{
        &.dormitorios::before{
        background-image: url(${icon_dormitorios_white}) 
      }
      &.banos::before{
        background-image: url(${icon_banos_white}) 
      }
      &.comuna::before{
        background-image: url(${icon_ubicacion_white}) 
      }
      }
    }
  }
`;

// END OF Styled Components