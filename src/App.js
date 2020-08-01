import React, { Fragment, useState } from "react";
import Header from "./Components/Header";

import { ImageBg } from "./Components/StyledComponents";
import MainCard from "./Components/MainCard";

import bg_img from "./img/bg.png";

function App() {
  // States
  const [prediccion, updateProduccion] = useState({});
  // END OF States

  return (
    <Fragment>
      <Header updateProduccion={updateProduccion} />
      <div className="display">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">

              {Object.keys(prediccion).length === 0 ? (
                <ImageBg
                  src={bg_img}
                  alt="CuantoVale"
                  className="img-fluid img-bg d-block"
                />
              ) : 
                <MainCard prediccion={prediccion}/>
              }
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
