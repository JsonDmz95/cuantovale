import styled from "@emotion/styled";

import { myBlue, myBody, myInputShadow } from "./colores";

// Styled Components
export const Formulario = styled.form`
  padding: 50px 0px;

  .section-title {
    font-size: 18px;
    margin-bottom: 30px;
    strong {
      font-weight: 500;
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
    padding-top: 70px
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

// END OF Styled Components