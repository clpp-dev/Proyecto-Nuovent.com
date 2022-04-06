import React from "react";
import './Style.css'

export const Error404 = () => {
  return (
    <div className="cover-container d-flex w-100 h-100 p-5 mx-auto flex-column">
      <div className="px-3 d-flex flex-column justify-content-center align-items-center">
        <h1>Ups... Error 404</h1>
        <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
        <p className="lead">
          <a href="/home" className="btn btn-lg btn-primary fw-bold border-primary bg-white text-primary ">Volver al Inicio</a>
        </p>
      </div>
    </div>
  );
};
