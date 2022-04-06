import React from "react";
import "./Style.css";
import { NavButtons } from "../../UI/NavButtons/NavButtons";
import { Logo } from "../../UI/Logo/Logo"

export const NavBar = () => {
  return (
    <div className="comtainer-fluid bg-dark">
      <nav className="navbar navbar-expand-lg navbar-dark container">
        <div className="container-fluid d-flex">
          <Logo width="50" height="50"/>
          <NavButtons/>
        </div>
      </nav>
    </div>
  );
};
