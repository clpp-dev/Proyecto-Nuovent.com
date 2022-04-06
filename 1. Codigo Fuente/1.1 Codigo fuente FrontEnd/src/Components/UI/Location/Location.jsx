import React from "react";
import "./Style.css";
export const Location = () => {
  return (
      <div className="list-group list-group-checkable  mt-2">
        <input
          className="list-group-item-check"
          type="radio"
          name="listGroupCheckableRadios"
          id="listGroupCheckableRadios1"
          defaultValue
          defaultChecked
        />
        <label
          className="list-group-item py-3"
          htmlFor="listGroupCheckableRadios1"
        >
          Todos los anuncios
          <span className="d-block small opacity-50">
            Ve todos los anuncios disponibles
          </span>
        </label>
        <input
          className="list-group-item-check"
          type="radio"
          name="listGroupCheckableRadios"
          id="listGroupCheckableRadios2"
          defaultValue
        />
        <label
          className="list-group-item py-3"
          htmlFor="listGroupCheckableRadios2"
        >
          Quindío
          <span className="d-block small opacity-50">
            Departamento en el centro del Colombia
          </span>
        </label>
      </div>

  );
};
