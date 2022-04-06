import React from 'react'
import "./Style.css"
import ImgLogo from '../../../Img/logo-500x500.png'

export const Logo = ({width, height}) => {
  return (
      <a className="navbar-brand d-flex justify-content-center m-0" href="/home">
        <img src={ImgLogo} alt="Nuovent.com" width={width} height={height} className="d-inline-block align-text-top rounded" />
      </a>
  )
}






