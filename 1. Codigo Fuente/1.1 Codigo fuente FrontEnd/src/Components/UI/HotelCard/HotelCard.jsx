import "./Style.css"
import React from 'react'
import { useNavigate } from "react-router-dom";

export const HotelCard = ({anounces, columns}) => {
  console.log(anounces);
  const navigate = useNavigate()

  return (
    <div className={`row row-cols-1 row-cols-lg-${columns} row-cols-xl-3  align-items-stretch g-4 py-5`}>
      {
        anounces.map((item, index) => (
        <div key={index} className="col custom-transform ">
          <div
            className="card card-cover h-100 overflow-hidden text-white bg-dark rounded shadow-lg"
            style={{ backgroundImage: `url('${item[1].picture1}')` }}
          >
            <div className="custom-bg-opacity d-flex flex-column justify-content-center h-100 py-3 text-white text-shadow-1 align-items-center">
              <h2 className="pt-4 mt-5 mb-4 display-10 lh-1 fw-bold">
                {item[1].nomAnounce}
              </h2>
              <div className="text-light">
                <ul className="d-flex list-unstyled mt-auto justify-content-center align-items-center">
                  <li className="d-flex flex-column align-items-center mx-1">
                    <p className="fs-5 fw-bold mb-1">{item[1].location}</p>
                    <p className="fs-5 fw-semibold">Capacidad {item[1].numCapacity}</p>
                  </li>
                </ul>
              </div>
            </div>
            <button className="btn btn-dark fw-semibold rounded-0 py-3 m-0"
              onClick={async (e) => {
                navigate(`/anuncio/${item[0]}`);
              }}
              >Ver más</button>
          </div>
        </div>
      ))}
    </div>
  )
}
