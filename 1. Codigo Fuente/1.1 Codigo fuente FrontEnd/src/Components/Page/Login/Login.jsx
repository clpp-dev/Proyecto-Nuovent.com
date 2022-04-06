import React from 'react'
import './Style.css'
import { LoginForm } from '../../Layout/loginForm/loginForm'

export const Login = () => {
  return (
    <div className="contPageLogin my-5">
        <h1>PAGINA DE LOGIN</h1>
        <hr/>
        <LoginForm/>
    </div>
  )
}
