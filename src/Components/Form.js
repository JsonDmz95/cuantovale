import React, { useState, useEffect } from "react";
import Axios from "axios";

import { Formulario, FormGroup } from "./StyledComponents";

import icon_info_propiedad from "../img/icon-info-propiedad.svg";
import icon_tipo from "../img/icon-tipo.svg";
import icon_ubicacion from "../img/icon-ubicacion.svg";
import icon_s_util from "../img/icon-s-util.svg";
import icon_s_total from "../img/icon-s-total.svg";
import icon_dormitorios from "../img/icon-dormitorios.svg";
import icon_banos from "../img/icon-banos.svg";
import icon_estimar from "../img/icon-estimar.svg";

const Form = ({propiedad, updatePropiedad, updateConsulta}) => {
  // States
  const [listaComunas, saveListaComunas] = useState([]);
  // End OF States

  //Destructuring
  const {
    tipo,
    comuna,
    superficie_util,
    superficie_total,
    dormitorios,
    banos
  } = propiedad;
  //END OF Destructuring

  //Consulta a API de comunas
  useEffect(() => {
    const consultarAPI = async () => {
      const url = 'https://real-estate-api-ndtm7xbgda-uc.a.run.app/features_info';

      const resultado = await Axios.get(url);
      saveListaComunas(resultado.data.categorical_features[0].allowed_values);
    };

    consultarAPI();
  }, [listaComunas]);

  //obtener valores del formulario
  const handleChange = (e) => {
    
    if(e.target.type === "number"){
      updatePropiedad({
        ...propiedad,
        [e.target.name]: parseFloat(e.target.value)
      });
    } else{
      updatePropiedad({
        ...propiedad,
        [e.target.name]: e.target.value
      });
    }
  };

  //Envío de formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    updateConsulta(true);
  };

  return (
    <Formulario onSubmit={handleSubmit}>
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

      <div className="divider-container">
        <div className="divider"></div>
      </div>

      <FormGroup>
        <label className="required">
          <img src={icon_tipo} alt="Tipo de propiedad" className="left-icon" />
          Tipo de propiedad
        </label>
        <select
          name="tipo"
          id="tipo"
          onChange={handleChange}
          value={tipo || ""}
          required
        >
          <option value="">Seleccionar ▾</option>
          <option value="casa">Casa</option>
          <option value="departamento">Departamento</option>
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
        <select
          name="comuna"
          id="comuna"
          onChange={handleChange}
          value={comuna || ""}
          required
        >
          <option value="">Seleccionar ▾</option>
          {listaComunas.map((comuna) => (
            <option key={comuna} value={comuna}>
              {comuna}
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
          onChange={handleChange}
          value={superficie_util || ""}
          required
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
          onChange={handleChange}
          value={superficie_total || ""}
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
          onChange={handleChange}
          value={dormitorios || ""}
        />
      </FormGroup>

      <FormGroup>
        <label className="required">
          <img src={icon_banos} alt="Numero de banos" className="left-icon" />
          Numero de banos
        </label>
        <input
          type="number"
          name="banos"
          id="banos"
          placeholder="Ej. 2"
          onChange={handleChange}
          value={banos || ""}
        />
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
