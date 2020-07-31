import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Axios from "axios";

import { myBlue, myBody, myInputShadow } from "./colores";

import icon_info_propiedad from "../img/icon-info-propiedad.svg";
import icon_tipo from "../img/icon-tipo.svg";
import icon_ubicacion from "../img/icon-ubicacion.svg";
import icon_s_util from "../img/icon-s-util.svg";
import icon_s_total from "../img/icon-s-total.svg";
import icon_dormitorios from "../img/icon-dormitorios.svg";
import icon_banos from "../img/icon-banos.svg";
import icon_estimar from "../img/icon-estimar.svg";

// Styled Components
const Formulario = styled.form`
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
`;

const FormGroup = styled.div`
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
    padding: 13px 25px;
    background-color: rgb(${myBody});
    border: none;
    border-radius: 21px;
    outline: none;
    box-shadow: inset 10px 10px 15px rgba(${myInputShadow}, 0.5);

    ::placeholder {
      color: rgba(0, 0, 0, 0.4);
    }
  }

  @media (min-width: 768px) {
    width: 45%;
  }
`;

// END OF Styled Components

const Form = () => {
  // States
  const [listaComunas, saveListaComunas] = useState([]);
  // End OF States

  //Consulta a API de comunas
  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://apis.digital.gob.cl/dpa/provincias/131/comunas`;

      const resultado = await Axios.get(url);
      saveListaComunas(resultado.data);
    };

    consultarAPI();
  }, []);

  return (
    <Formulario>
      <p className="section-title">
        <strong>
          <img
            src={icon_info_propiedad}
            alt="Info de la propiedad"
            className="left-icon"
          />
          Info de la propiedad
        </strong>
      </p>

      <div className="divider-container"><div className="divider"></div></div>

      <FormGroup>
        <label className="required">
          <img src={icon_tipo} alt="Tipo de propiedad" className="left-icon" />
          Tipo de propiedad
        </label>
        <select name="tipo" id="tipo">
          <option value="">Seleccionar ▾</option>
          <option value="Casa">Casa</option>
          <option value="Departamento">Departamento</option>
        </select>
      </FormGroup>

      <FormGroup>
        <label className="required">
          <img
            src={icon_ubicacion}
            alt="Ubicación (Comuna)"
            className="left-icon"
          />
          Ubicación (Comuna)
        </label>
        <select name="comuna" id="comuna">
          <option value="">Seleccionar ▾</option>
          {listaComunas.map((comuna) => (
            <option key={comuna.codigo} value={comuna.nombre}>
              {comuna.nombre}
            </option>
          ))}
        </select>
      </FormGroup>

      <FormGroup>
        <label className="required">
          <img
            src={icon_s_util}
            alt="Superficie útil (m²)"
            className="left-icon"
          />
          Superficie útil (m²)
        </label>
        <input
          type="number"
          name="superficie_util"
          id="superficie_util"
          placeholder="Ej. 110.00"
        />
      </FormGroup>

      <FormGroup>
        <label className="required">
          <img
            src={icon_s_total}
            alt="Superficie total (m²)"
            className="left-icon"
          />
          Superficie total (m²)
        </label>
        <input
          type="number"
          name="superficie_total"
          id="superficie_total"
          placeholder="Ej. 136.15"
        />
      </FormGroup>

      <FormGroup>
        <label className="required">
          <img
            src={icon_dormitorios}
            alt="Numero de dormitorios"
            className="left-icon"
          />
          Numero de dormitorios
        </label>
        <input
          type="number"
          name="dormitorios"
          id="dormitorios"
          placeholder="Ej. 4"
        />
      </FormGroup>

      <FormGroup>
        <label className="required">
          <img src={icon_banos} alt="Numero de banos" className="left-icon" />
          Numero de banos
        </label>
        <input type="number" name="banos" id="banos" placeholder="Ej. 2" />
      </FormGroup>

      <button type="submit" className="primary-button submit-btn">
        <img
          src={icon_estimar}
          alt="Estimar Precio de Venta"
          className="left-icon"
        />
        Estimar Precio de Venta
      </button>
    </Formulario>
  );
};

export default Form;
