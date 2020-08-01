import React, { useState, useEffect } from "react";
import Axios from "axios";

import { Formulario, FormGroup } from "./StyledComponents";
import LocalizationForm from "./LocalizationForm";

import icon_info_propiedad from "../img/icon-info-propiedad.svg";
import icon_tipo from "../img/icon-tipo.svg";
import icon_ubicacion from "../img/icon-ubicacion.svg";
import icon_s_util from "../img/icon-s-util.svg";
import icon_s_total from "../img/icon-s-total.svg";
import icon_dormitorios from "../img/icon-dormitorios.svg";
import icon_banos from "../img/icon-banos.svg";
import icon_estimar from "../img/icon-estimar.svg";

const Form = ({ propiedad, updatePropiedad, updateConsulta }) => {
  // States
  const [listaComunas, saveListaComunas] = useState([]);
  const [limites, saveLimites] = useState([]);
  const [printed, updatePrinted] = useState(false);
  const [locaEspecifica, updatelocaEspecifica] = useState(false);
  // End OF States

  //Destructuring
  const {
    tipo,
    comuna,
    superficie_util,
    superficie_total,
    dormitorios,
    banos,
    latitud,
    longitud
  } = propiedad;
  //END OF Destructuring

  //Consulta a API de comunas
  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://real-estate-api-ndtm7xbgda-uc.a.run.app/features_info";

      const resultado = await Axios.get(url);
      saveListaComunas(resultado.data.categorical_features[0].allowed_values);
      saveLimites(resultado.data.numerical_features);
      updatePrinted(true);
    };

    if (!printed) {
      consultarAPI();
    }
  }, [listaComunas, printed]);

  //obtener valores del formulario
  const handleChange = (e) => {
    if (e.target.type === "number") {
      updatePropiedad({
        ...propiedad,
        [e.target.name]: parseFloat(e.target.value),
      });
    } else {
      updatePropiedad({
        ...propiedad,
        [e.target.name]: e.target.value,
      });
    }
  };

  //Mostrar campos de localizacion especifica
  const handleCheck = (e) => {
    if(e.target.checked){
      updatelocaEspecifica(true);
    } else{
      updatelocaEspecifica(false);
    }

    updatePropiedad({
      ...propiedad,
      longitud: 0,
      latitud: 0
    });
  }

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
          // min={limites[0].min === undefined ? null : limites[0].min}
          min={printed ? limites[0].min : null}
          max={printed ? limites[0].max : null}
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
          required
          min={printed ? limites[1].min : null}
          max={printed ? limites[1].max : null}
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
          required
          min={printed ? limites[2].min : null}
          max={printed ? limites[2].max : null}
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
          required
          min={printed ? limites[3].min : null}
          max={printed ? limites[3].max : null}
        />
      </FormGroup>

      <div className="divider-container">
        <div className="divider"></div>
      </div>

      <div className="section-title check">
        <input type="checkbox" id="specific" name="specific" value="specific" onChange={handleCheck}/>
        <label htmlFor="specific"><b>Localización específica</b><sup title="Marcar para epecificar latitud y longitud">🛈</sup></label>
      </div>

      {locaEspecifica? <LocalizationForm 
      longitud={longitud}
      latitud={latitud}
      printed={printed}
        handleChange={handleChange}
        limites={limites}
      /> : null}

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
