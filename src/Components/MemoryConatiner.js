import React, { Fragment } from "react";
import shortid from "shortid";
import { MainTitle, ItemCard, ItemCardLink } from "./StyledComponents";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const MemoryContainer = ({ memoria }) => {
  const state = {
    responsive: {
      0: {
        items: 1.5,
      },
      600: {
        items: 2.5,
      },
      992: {
        items: 1.5,
      },
      1200: {
        items: 2.5,
      },
      1700: {
        items: 3,
      },
    },
  };
  return (
    <Fragment>
      <MainTitle className="second">Propiedades Estimadas</MainTitle>

      <div className="carousel-container">
        <OwlCarousel
          className="owl-theme"
          nav={false}
          dots={false}
          margin={30}
          responsive={state.responsive}
        >
          {memoria.map((item) => (
            <ItemCardLink key={shortid.generate()} className="item-link">
              <ItemCard className="item-card">
                <p className="text-capitalize">
                  <b>
                    {item.tipo}: ${item.precio}
                  </b>
                </p>
                <div className="info">
                  <span className="dormitorios">{item.dormitorios}</span>
                  <span className="banos">{item.banos}</span>
                  <span className="comuna text-capitalize">{item.comuna}</span>
                </div>
              </ItemCard>
            </ItemCardLink>
          ))}
        </OwlCarousel>
      </div>
    </Fragment>
  );
};

export default MemoryContainer;
