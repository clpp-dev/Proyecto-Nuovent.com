import "./Style.css";
import React, { useState } from "react";
import axios from "axios";
import jwt from "jwt-decode";

export const CreateAnounceForm = () => {
  const [nomAnounce, setNomAnounce] = useState("");
  const [description, setDescription] = useState("");
  const [numCapacity, setNumCapacity] = useState("");
  const [location, setLocation] = useState("");
  const [arrayImages, setArrayImages] = useState([]);

var formData = new FormData();

  const newAnounce = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token")
    const decoded = jwt(token);
    const userId = decoded.uid;
    console.log("🚀 ~ file: CreateAnounceForm.jsx ~ line 20 ~ newAnounce ~ userId", userId)

    formData.append("nomAnounce", nomAnounce);
    formData.append("description", description);
    formData.append("location", location);
    formData.append("numCapacity", numCapacity);
    formData.append("uid", userId);


    for(let i = 0; i < arrayImages.length; i++) {
      formData.append(`file${i}`,arrayImages[i])
    }
    console.log(arrayImages)

    axios.post("https://nuoventr.herokuapp.com/anuncio",formData)
    .then((response) => {
      console.log("---------- AXIOS CREAR ANUNCIO ----------------")
      console.log(response)
      response.status === 200 ? alert("Anuncio registrado con Éxito") : alert("Hubo un error, intentalo de nuevo")
    })

    setNomAnounce("");
    setDescription("");
    setLocation("");
    setNumCapacity("");
    setArrayImages([]);
    
  };

  function numImagesError(e) {
    e.target.value = null;
    alert("Error: Solo puede subir hasta 6 imágenes")
  }

  return (
    
      <div className="w-100 d-flex justify-content-center pt-5 pb-5">
            <form onSubmit={newAnounce} className="w-75">
                <div className="form-floating mb-3">
                    <input
                        onChange={(e) => setNomAnounce(e.target.value)}
                        value={nomAnounce}
                        name="nomAnounce"
                        type="text"
                        className="form-control"
                        id="floatingInputTittleAnounce"
                        placeholder="name@example.com"
                        required />
                    <label htmlFor="floatingInputTittleAnounce">Título del Anuncio</label>
                </div>
                
                <div className="form-floating mb-3">
                    <input
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        type="text"
                        className="form-control"
                        id="floatingInputUserName"
                        placeholder="name@example.com"
                        required />
                    <label htmlFor="floatingInputUserName">Descripcion</label>
                </div>

                <div className="row ">
                  <div className="form-floating col-md-4">
                    <select
                      onChange={(e) => setLocation(e.target.value)}
                      value={location}
                      id="inputLocation"
                      className="form-select"
                      required >
                      <option defaultValue>Ubicación</option>
                      <option>Armenia</option>
                      <option>Montenegro</option>
                      <option>Tebaida</option>
                      <option>Calarca</option>
                      <option>Quimbaya</option>
                      <option>Genova</option>
                      <option>Filandia</option>
                      <option>Buenavista</option>
                      <option>Circasia</option>
                      <option>Cordoba</option>
                      <option>Pijao</option>
                    </select>
                  </div>
                  <div className="form-floating mb-3 col-md-8">
                    <input
                      onChange={(e) => setNumCapacity(e.target.value)}
                      value={numCapacity}
                      type="number"
                      className="form-control"
                      id="floatingInputCapacity"
                      placeholder="name@example.com"
                      required />
                    <label htmlFor="floatingInputCapacity">Capacidad</label>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="formFileMultiple" className="form-label">
                    Sube hasta 6 imágenes
                  </label>
                  <input
                    onChange={(e) => {
                      e.target.files.length >= 7 || e.target.files.length < 0
                        ? numImagesError(e)
                        : setArrayImages(e.target.files);
                    }}
                    className="form-control"
                    name="file"
                    type="file"
                    id="formFileMultiple"
                    multiple
                    accept="image/jpeg"
                    required />
                </div>

                <button type="submit" className="btn btn-primary mt-3 form-control p-2 fs-5">Enviar</button>

                
            </form>
        </div>

  );
};
