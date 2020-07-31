import React from "react";

import Form from "./Form"

import logo from "../img/logo.svg";
import angle from "../img/collapse-angle.svg";

const Header = () => {
  return (
    <header className="side">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="logo-container">
              <a href="/" title="CuantoVale" className="logo-link">
                <img src={logo} alt="CuantoVale" className="img-fluid" />
              </a>
            </div>
            <button
              className="collapse-btn"
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
              <Form />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
