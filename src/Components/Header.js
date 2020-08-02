import React, { useState, useEffect } from "react";
import axios from "axios";

import Form from "./Form";

import logo from "../img/logo.svg";
import angle from "../img/collapse-angle.svg";

const Header = ({ updateProduccion }) => {
  // States
  const [propiedad, updatePropiedad] = useState({
    latitud: 0,
    longitud: 0,
  });
  const [consulta, updateConsulta] = useState(false);
  // END OF States

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

  useEffect(() => {
    const readAPI = async () => {
      if (consulta) {
        const apiBase =
          "https://real-estate-api-ndtm7xbgda-uc.a.run.app/predict";

        const jsoned = `
          {
            "propiedad": {
              "tipo": "${tipo}",
              "comuna": "${comuna}",
              "superficie_util": ${superficie_util},
              "superficie_total": ${superficie_total},
              "dormitorios": ${dormitorios},
              "banos": ${banos},
              "latitud": ${latitud},
              "longitud": ${longitud}
            }
          }
        `;

        const api = await axios.create({
          baseURL: "https://real-estate-api-ndtm7xbgda-uc.a.run.app/predict/",
          crossDomain: true,
          responseType: "json",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          },
        });

        const respuesta = await api.post(apiBase, JSON.parse(jsoned));
        updateProduccion(respuesta.data);
        updateConsulta(false);
      }
    };
    readAPI();
  }, [
    consulta,
    tipo,
    comuna,
    superficie_util,
    superficie_total,
    dormitorios,
    banos,
    latitud,
    longitud,
    updateProduccion,
  ]);

  return (
    <header className="side collapse show" id="header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="logo-container">
              <a href="/" title="CuantoVale" className="logo-link">
                <img src={logo} alt="CuantoVale" className="img-fluid" />
              </a>
            </div>
            <button
              className="collapse-btn d-md-none"
              aria-label="Form"
              type="button"
              data-toggle="collapse"
              data-target="#form-content"
              aria-controls="navbarContent"
              aria-expanded="true"
            >
              <span className="sr-only">Toogle Form</span>
              <img src={angle} alt="Toogle Form" className="img-fluid" />
            </button>

            <div className="form-container collapse show" id="form-content">
              <Form
                propiedad={propiedad}
                updatePropiedad={updatePropiedad}
                updateConsulta={updateConsulta}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
