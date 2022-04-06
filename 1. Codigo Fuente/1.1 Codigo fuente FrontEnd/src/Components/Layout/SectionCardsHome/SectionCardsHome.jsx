import React, { useEffect, useState } from "react";
import { HotelCard } from "../../UI/HotelCard/HotelCard";

export function SectionCardsHome() {

  const [lastAnounoces, setLastAnounoces] = useState([])

    const urlApi = "https://nuoventr.herokuapp.com/home"
    // console.log("🚀 ~ line 11 urlApi", urlApi)
    const fetchLastAnounces = async (url) =>{
        fetch(url)
        .then(response => response.json())
        .then(data => setLastAnounoces(data))
        .catch(error => console.log(error))
    }

useEffect(() =>{
  fetchLastAnounces(urlApi)
},[])

  return (
    <div className="container px-4 py-2" id="custom-cards">
      <h2 className="pb-2 border-bottom">Últimos agregados</h2>
        <HotelCard anounces={lastAnounoces} columns={3} />
    </div>
  );
}
