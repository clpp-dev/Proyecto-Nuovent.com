import "./Style.css";
import React from "react";
import { Featured } from "../../Layout/Featured/Featured";
import { TittleH2 } from "../../UI/TittleH2/TittleH2";
import { SectionCardsHome } from "../../Layout/SectionCardsHome/SectionCardsHome";
import { Carousel } from "../../UI/Carousel/Carousel";

export const Home = () => {
  return (
    <div className="container-fluid bg-light p-0 d-flex flex-column">
      <Carousel 
        picture1="https://res.cloudinary.com/dezprf2aq/image/upload/v1649181949/pdbr8khkbsgs0pfslcst.jpg"
        picture2="https://res.cloudinary.com/dezprf2aq/image/upload/v1649181949/pdbr8khkbsgs0pfslcst.jpg"
        picture3="https://res.cloudinary.com/dezprf2aq/image/upload/v1649181949/pdbr8khkbsgs0pfslcst.jpg"
      />
      <div className="container-fluid bg-dark">
        <div className="container text-light py-5 px-1">
          <TittleH2 textTittle="Encuentra tu espacio ideal con nosotros!"/>
          <p className="mt-5 pb-5 mb-lg-5 px-lg-5 mx-lg-5 lead">En Nuovent.com podrás encontrar el espacio ideal para tus eventos, tenemos a disposición gran variedad de establecimientos rurales y salones de eventos que cada día confían sus servicios de eventos para nuestros usuarios.</p>
        </div>
      </div>
      {/* <svg className="svgWave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" d="M0,96L720,256L1440,128L1440,320L720,320L0,320Z"></path></svg> */}
      <svg className="svgWave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff"  d="M0,224L60,218.7C120,213,240,203,360,213.3C480,224,600,256,720,261.3C840,267,960,245,1080,229.3C1200,213,1320,203,1380,197.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      <SectionCardsHome/>
      <Featured />
    </div>
  );
};
