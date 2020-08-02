import React, { Fragment, useState, useEffect } from "react";

import Header from "./Components/Header";
import { ImageBg } from "./Components/StyledComponents";
import MainCard from "./Components/MainCard";
import MemoryContainer from "./Components/MemoryConatiner";

import bg_img from "./img/bg.png";

function App() {

  //guadar consultas en 
  let saved = JSON.parse(localStorage.getItem('memory'));
  if(!saved){
    saved = [];
  }

  // States
  const [prediccion, updateProduccion] = useState({});
  const [memoria, updateMemoria] = useState(saved);
  // END OF States

  useEffect(() => {
    let saved = JSON.parse(localStorage.getItem('memory'));

    if(saved){
      localStorage.setItem('memory', JSON.stringify(memoria))
    } else{
      localStorage.setItem('memory', JSON.stringify([]))
    }
    
  }, [memoria])

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
                <MainCard prediccion={prediccion} updateMemoria={updateMemoria} memoria={memoria}/>
              }

              {memoria.length === 0 ?
                null
              :
                <MemoryContainer memoria={memoria}/>
              }
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
