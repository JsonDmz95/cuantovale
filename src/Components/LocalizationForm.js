import React from "react";
import { FormGroup } from "./StyledComponents";

import styled from '@emotion/styled';

const LocItem = styled.div`
  label{
    display: block;
    margin-bottom: 10px;
  }

  input{
    display: block;
    width: 100%;
  }

  &+.loc-item{
    margin-top: 30px;
  }

  @media (min-width: 1200px){
    width: 200px;

    &+.loc-item{
    margin-top: 0px;
  }
  }
`;

const LocalizationForm = ({ handleChange, limites, longitud, latitud, printed }) => {
  return (
    <FormGroup>
      <LocItem className="loc-item lat">
        <label>Latitud</label>
        <input
          type="number"
          name="latitud"
          id="latitud"
          onChange={handleChange}
          value={latitud || ""}
          required
          min={printed ? limites[4].min.toFixed(2) : null}
          max={printed ? limites[4].max.toFixed(2) : null}
        />
      </LocItem>

      <LocItem className="loc-item long">
        <label>Latitud</label>
        <input
          type="number"
          name="longitud"
          id="longitud"
          onChange={handleChange}
          value={longitud || ""}
          required
          min={printed ? limites[5].min.toFixed(2) : null}
          max={printed ? limites[5].max.toFixed(2) : null}
        />
      </LocItem>
    </FormGroup>
  );
};

export default LocalizationForm;
