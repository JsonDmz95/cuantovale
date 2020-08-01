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
                <p className="item-info">
                  <strong>Tipo de propiedad:</strong> {prediccion.propiedad.tipo}
                </p>
              </div>

              <div className="col-12 col-sm-6 col-lg-12 col-xl-6">
                <p className="item-info">
                  <strong>Superficie útil:</strong> {prediccion.propiedad.superficie_util.toFixed(2)} m²
                </p>
              </div>
              <div className="col-12 col-sm-6 col-lg-12 col-xl-6">
                <p className="item-info">
                  <strong>Superficie total:</strong> {prediccion.propiedad.superficie_total.toFixed(2)} m²
                </p>
              </div>
              <div className="col-12 col-sm-6 col-lg-12 col-xl-6">
                <p className="item-info">
                  <strong>Numero de dormitorios:</strong> {prediccion.propiedad.dormitorios}
                </p>
              </div>
              <div className="col-12 col-sm-6 col-lg-12 col-xl-6">
                <p className="item-info">
                  <strong>Numero de baños:</strong> {prediccion.propiedad.banos}
                </p>
              </div>
            </div>
          </div>

          <div className="resultado">
            <h3 className="division-title text-center">
              Precio estimado de venta al <span className="no-break">{fecha}</span>:
            </h3>

            <h4 className="precio text-center">${prediccion.precio.toFixed(2)}</h4>
          </div>
        </div>
      </ResultCard>
    </Fragment>
  );
};

export default MainCard;
