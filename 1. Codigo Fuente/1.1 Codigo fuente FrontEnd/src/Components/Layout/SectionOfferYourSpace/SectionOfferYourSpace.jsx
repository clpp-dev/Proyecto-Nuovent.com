import "./Style.css"
import React from 'react'
import PropTypes from 'prop-types'
import { Advantages } from "../../UI/Advantages/Advantages"
import { TittleH2 } from "../../UI/TittleH2/TittleH2"
import { Button } from "../../UI/Button/Button"

export const SectionOfferYourSpace = () => {
  return (
    <>
        <TittleH2 textTittle="Oferta tu espacio!"/>
        <div className="div-aventages">
          <Advantages/>
          <Button text="Regístrate Ahora"/>
        </div>
    </>
  )
}

SectionOfferYourSpace.propTypes = {

}