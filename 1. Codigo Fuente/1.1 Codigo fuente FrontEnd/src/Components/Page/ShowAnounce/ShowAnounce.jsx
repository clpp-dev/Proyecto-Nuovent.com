import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useParams } from 'react-router'
import { Carousel } from '../../UI/Carousel/Carousel';

export const ShowAnounce = () => {

  const {IdAnounce} = useParams();
  const [currentAnounce, setCurrentAnounce] = useState([]);

  const urlApi = `https://nuoventr.herokuapp.com/obteneranuncio/${IdAnounce}`
  
  const axiosApi = () => {axios.get(urlApi)
  .then((response) => {
    setCurrentAnounce(response['data'])
    console.log(response)
  })
  .catch((error) => {
    console.log(error);
  })};

  useEffect(() =>{
    axiosApi(urlApi)
  },[])

  return (
    <>
    {
      currentAnounce.map((item, index) => (
        <Carousel key={index}
          picture1={item.picture1}
          picture2={item.picture2}
          picture3={item.picture3}
          picture4={item.picture4}
          picture5={item.picture5}
          picture6={item.picture6}
          />
      ))
    }
      <section className="container">
        {
          currentAnounce.map((item, index) => (
            <div key={index} className="container d-flex flex-column align-items-center my-5">
              {/* <h2 className="mt-4 text-start">ID DEL ANUNCIO: {IdAnounce}</h2> */}
              <h2 className="mt-4 text-start">{item.nomAnounce}</h2>
              <p className="mt-2 mb-5 text-start">DESCRIPCION: {item.description}   </p>
              {/* <img className="w-75" src={item.picture1} alt="" /> */}
              <div className="d-flex">
                <a href="#" className="btn btn-primary mx-1">Llamar ahora: {item.telefono}</a>
                <a href="#" className="btn btn-secondary mx-1">Email: {item.email}</a>
              </div>
            </div>  
          ))
        }
      </section>
    </>
  )
}


