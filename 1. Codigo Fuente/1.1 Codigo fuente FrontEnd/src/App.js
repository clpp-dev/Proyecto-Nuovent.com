import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./Components/Layout/NavBar/NavBar";
import { Home } from "./Components/Page/Home/Home";
import { Registry } from "./Components/Page/Registry/Registry";
import { Login } from "./Components/Page/Login/Login";
import { CreateAnounceForm } from "./Components/Layout/CreateAnounceForm/CreateAnounceForm";
import { Footer } from "./Components/Layout/Footer/Footer";
import { EventZone } from "./Components/Page/EventZone/EventZone";
import { ShowAnounce } from "./Components/Page/ShowAnounce/ShowAnounce";
import { Error404 } from "./Components/Page/Error404/Error404";
import { PrivateRoute } from "./Components/Helpers/PrivateRoute/PrivateRoute";
import { OfferYourSpace } from "./Components/Page/OfferYourSpace/OfferYourSpace";
import { MyAnounces } from "./Components/Page/MyAnounces/MyAnounces";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route exact path="/zonaeventos" element={<EventZone />} />
            <Route exact path="/registro" element={<Registry />} />
            <Route exact path="/login" element={<Login />} />
            <Route path="/anuncio/:IdAnounce" element={<ShowAnounce />} />
            <Route element={<PrivateRoute /> }>
              <Route exact path="/crearanuncio" element={<CreateAnounceForm />} />
              <Route exact path="/misanuncios" element={<MyAnounces />} />
              <Route exact path="/ofertartuespacio" element={<OfferYourSpace />} />
            </Route>
            <Route path="*" element={<Error404 />}/>
            <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
