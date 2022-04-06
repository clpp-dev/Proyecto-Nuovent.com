import React, { useState } from "react";
import "./Style.css";
import jwt from "jwt-decode";
import { useNavigate } from "react-router-dom";

export const OfferYourSpaceForm = () => {
  const [business, setBusiness] = useState("");
  const [nit, setNit] = useState("");
  const [email, setEmail] = useState("");
  const [phoneBusiness, setPhoneBusiness] = useState("");
  const [manager, setManager] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  
  const navigate = useNavigate();

  const newRegistryBussiness = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const decoded = jwt(token);
    const userId = decoded.uid;
    console.log(
      "🚀 ~ file: CreateAnounceForm.jsx ~ line 20 ~ newAnounce ~ userId",
      userId
    );
    const res = await fetch("https://nuoventr.herokuapp.com/registraralojamiento", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        business,
        nit,
        email,
        phoneBusiness,
        manager,
        category,
        description,
        city,
        address,
        userId,
      }),
    });
    const data = await res.json();
    console.log("🚀 ~ file: OfferYourSpaceForm.jsx ~ line 47 ~ newRegistryBussiness ~ data", data)
    const newStateUser = await data.state
    console.log("🚀 ~ file: OfferYourSpaceForm.jsx ~ line 49 ~ newRegistryBussiness ~ newStateUser", newStateUser)
    localStorage.setItem("stateUser", newStateUser);
    
    newStateUser === 1 ? navigate("/") :
    newStateUser === 2 ? navigate("/home") :
    alert("Datos Invalidos, inténtalo de nuevo");
    window.location.reload(true)

    setBusiness("");
    setNit("");
    setEmail("");
    setPhoneBusiness("");
    setManager("");
    setCategory("");
    setDescription("");
    setCity("");
    setAddress("");
  };

  return (
    <div className="w-100 d-flex justify-content-center">
      <form onSubmit={newRegistryBussiness} className="w-75">
        <div className="form-floating mb-3">
          <input
            onChange={(e) => setBusiness(e.target.value)}
            value={business}
            type="text"
            className="form-control"
            id="floatingInputNameBussiness"
            placeholder="Nombre del negocio o alojamiento"
            required
          />
          <label htmlFor="floatingInputNameBussiness">Nombre del negocio o alojamiento</label>
        </div>
        <div className="row ">
          <div className="form-floating mb-3">
            <input
              onChange={(e) => setNit(e.target.value)}
              value={nit}
              type="text"
              className="form-control"
              id="floatingInputNit"
              placeholder="Nit del negocio o alojamiento"
              required
            />
            <label htmlFor="floatingInputNit">Nit del negocio o alojamiento</label>
          </div>
          <div className="form-floating mb-3">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              className="form-control"
              id="floatingInputEmailBussiness"
              placeholder="name@example.com"
              required
            />
            <label htmlFor="floatingInputEmailBussiness">Email ó Nombre de usuario</label>
          </div>
        </div>

        <div className="row ">
          <div className="form-floating col-md-4">
            <input
              onChange={(e) => setPhoneBusiness(e.target.value)}
              value={phoneBusiness}
              type="text"
              className="form-control"
              id="floatingInputPhoneBusiness"
              placeholder="Telefono corporativo"
            />
            <label htmlFor="floatingInputPhoneBusiness">Teléfono Corporativo</label>
          </div>
          <div className="form-floating mb-3 col-md-8">
            <input
              onChange={(e) => setManager(e.target.value)}
              value={manager}
              type="text"
              className="form-control"
              id="floatingInputManager"
              placeholder="Teléfono"
              required
            />
            <label htmlFor="floatingInputManager">Responsable</label>
          </div>
        </div>

        <div className="form-floating mb-3 col-md-8">
            <input
              onChange={(e) => setCategory(e.target.value)}
              value={category}
              type="text"
              className="form-control"
              id="floatingInputCategory"
              placeholder="Categoria"
              required
            />
            <label htmlFor="floatingInputCategory">Categoría</label>
          </div>
        
          <div className="form-floating mb-3 col-md-8">
            <input
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              type="text"
              className="form-control"
              id="floatingInputDescription"
              placeholder="Descripción"
              required
            />
            <label htmlFor="floatingInputDescription">Descripción</label>
          </div>

          <div className="form-floating mb-3 col-md-8">
            <input
              onChange={(e) => setCity(e.target.value)}
              value={city}
              type="text"
              className="form-control"
              id="floatingInputCity"
              placeholder="Ciudad"
              required
            />
            <label htmlFor="floatingInputCity">Ciudad</label>
          </div>

          <div className="form-floating mb-3 col-md-8">
            <input
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              type="text"
              className="form-control"
              id="floatingInputAddress"
              placeholder="Dirección"
              required
            />
            <label htmlFor="floatingInputAddress">Dirección</label>
          </div>

        <button
          type="submit"
          className="btn btn-primary mt-3 form-control p-2 fs-5"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};
