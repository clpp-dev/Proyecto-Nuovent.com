import React, { useEffect, useState } from "react";
import "./Style.css";
import axios from "axios";
import { HotelCard } from "../../UI/HotelCard/HotelCard";
import jwt from "jwt-decode";

export const MyAnounces = () => {
  const token = localStorage.getItem("token")
  const decoded = jwt(token);
  const userId = decoded.uid;
  console.log("🚀 ~ file: CreateAnounceForm.jsx ~ line 20 ~ newAnounce ~ userId", userId)

  const [currentAnouncesBusiness, setCurrentAnouncesBusiness] = useState([]);

  const urlApi = `https://nuoventr.herokuapp.com/misanuncios/${userId}`;

  const axiosApi = () => {
    axios
      .get(urlApi)
      .then((response) => {
        console.log(response);
        setCurrentAnouncesBusiness(response["data"]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axiosApi(urlApi);
  }, []);

  return (
    <div>
      <h1 className="container-fluid text-center mt-4"> Mis Anuncios </h1>
      <div className="container">
        <HotelCard anounces={currentAnouncesBusiness} columns={3}/>
      </div>
    </div>
    );
};
