import React from 'react'
import "./Style.css"
import PropTypes from 'prop-types'


export const Button = ({text}) => {
  return (
    <div className="cont-button">
        <button className="btn btn-primary">{text}</button>
    </div>
  )
}

Button.propTypes = {

}