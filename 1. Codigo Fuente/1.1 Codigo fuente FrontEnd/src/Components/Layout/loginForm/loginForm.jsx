import "./Style.css";
import React, { useState } from "react";
import jwt from "jwt-decode";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const newLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("https://nuoventr.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    try { 
      const data = await res.json();
      console.log("🚀 ~ file: loginForm.jsx ~ line 25 ~ newLogin ~ data", data);
      let token = await data.token;
      console.log("🚀 ~ file: loginForm.jsx ~ line 26 ~ newLogin ~ token", token);
  
      localStorage.setItem("token", token);
      let decoded = await jwt(token);
      console.log("🚀🚀🚀~decoded CLAIMS", decoded);
      
      let stateUser = await decoded.claims.state;
      console.log(
        "🚀 ~ file: loginForm.jsx ~ line 33 ~ newLogin ~ stateUser",
        stateUser
        );
  
      localStorage.setItem("stateUser", stateUser);
      stateUser === "1" ? navigate("/") :
      stateUser === "2" ? navigate("/home") :
      alert("Datos Invalidos, inténtalo de nuevo");
      window.location.reload(true)
    }
    
    catch (error) {
      console.error(error);
      alert("Ups... Hubo un error inesperado, vulve a intentarlo");
    }
    window.location.reload(true)
    setEmail("");
    setPassword("");
  };

  return (
    <div className="w-75">
      <form onSubmit={newLogin} className="">
        <h2 className="">Login</h2>
        <div className="form-floating mb-3">
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email ó Nombre de usuario</label>
        </div>
        <div className="form-floating">
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Contraseña</label>
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
