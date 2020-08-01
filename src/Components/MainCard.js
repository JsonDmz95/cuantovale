import React, { Fragment } from "react";

import { MainTitle, ResultCard } from "./StyledComponents";

const MainCard = ({ prediccion }) => {
  // Destructuring
  // const [precio, propiedad] = prediccion;
  // END OF Destructuring

  let today = new Date();
  let fecha = `${today.getDate()}-${
    today.getMonth() + 1
  }-${today.getFullYear()}`;
  return (
    <Fragment>
      <MainTitle>Resumen de Estimación</MainTitle>
      <ResultCard>
        <div className="resultado-container">
          <div className="detalles">
            <h3 className="division-title">Detalles de la propiedad</h3>
            <div className="row">
              <div className="col-12">
                <p className="item-info text-capitalize">
                  <strong>Tipo de propiedad:</strong>{" "}
                  {prediccion.propiedad.tipo}
                </p>
              </div>

              <div className="col-12 col-sm-6 col-lg-12 col-xl-6">
                <p className="item-info">
                  <strong>Superficie útil:</strong>{" "}
                  {prediccion.propiedad.superficie_util.toFixed(2)} m²
                </p>
              </div>
              <div className="col-12 col-sm-6 col-lg-12 col-xl-6">
                <p className="item-info">
                  <strong>Superficie total:</strong>{" "}
                  {prediccion.propiedad.superficie_total.toFixed(2)} m²
                </p>
              </div>
              <div className="col-12 col-sm-6 col-lg-12 col-xl-6">
                <p className="item-info">
                  <strong>Numero de dormitorios:</strong>{" "}
                  {prediccion.propiedad.dormitorios}
                </p>
              </div>
              <div className="col-12 col-sm-6 col-lg-12 col-xl-6">
                <p className="item-info">
                  <strong>Numero de baños:</strong> {prediccion.propiedad.banos}
                </p>
              </div>
            </div>
            <br />
            <h3 className="division-title ubicacion-title">
              Ubicación de la propiedad
            </h3>
            <div className="row">
              <div className="col-12">
                <p className="item-info text-capitalize">
                  <strong>Comuna:</strong> {prediccion.propiedad.comuna}
                </p>
              </div>

              {prediccion.propiedad.latitud === 0 ||
              prediccion.propiedad.longitud === 0 ? null : (
                <Fragment>
                  <div className="col-12 col-sm-6 col-lg-12 col-xl-6">
                    <p className="item-info">
                      <strong>Latitud:</strong>{" "}
                      {prediccion.propiedad.latitud}
                    </p>
                  </div>
                  <div className="col-12 col-sm-6 col-lg-12 col-xl-6">
                    <p className="item-info">
                      <strong>Longitud:</strong>{" "}
                      {prediccion.propiedad.longitud}
                    </p>
                  </div>
                </Fragment>
              )}
            </div>
          </div>

          <div className="resultado">
            <h3 className="division-title text-center">
              Precio estimado de venta al{" "}
              <span className="no-break">{fecha}</span>:
            </h3>

            <h4 className="precio text-center">
              ${prediccion.precio.toFixed(2)}
            </h4>

            <div className="btn-container text-right">
              <button className="primary-button">Guardar Datos</button>
            </div>
          </div>
        </div>
      </ResultCard>
    </Fragment>
  );
};

export default MainCard;
