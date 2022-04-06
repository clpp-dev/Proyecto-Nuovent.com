import React from "react";
import { Link } from "react-router-dom"
import "./Style.css";
import ImgFeature from "../../../Img/backgrounds/Home-bg1.jpg";

export const Featured = () => {
  const stateUser = localStorage.getItem('stateUser')
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6 d-flex justify-content-center ">
          <img src={ImgFeature} className="mx-lg-auto img-fluid rounded" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
        </div>
        <div className="col-lg-6 ">
          <h1 className="display-5 fw-bold lh-1 mb-3">Encuentra tu espacio ideal</h1>
          <p className="lead">Mira espacios para realizar tu evento ideal en el lugar perfecto para ti y tu invitados; haz que los momentos más importantes en la vida, tengan una celebración especial, Nuovent.com te ayuda a encontrar y contactar directamente con los prestadores de los servicios y espacios para la realización de eventos. </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-center">
            <Link to={"/Zonaeventos"} className="btn btn-primary btn-lg px-4 me-md-2">Ver anuncios</Link>
            {
              stateUser === "2" ?
              <Link to={"/misanuncios"} className="btn btn-outline-secondary btn-lg px-4">Mis Anuncios</Link>
              : ""
            }
          </div>
        </div>
      </div>
    </div>
  );
};

