import React from 'react'
import { Button } from '../atoms' 

export default function Login() {
  return (
    <div className="login-container">
        <div className="wrapper">
            <h1 className="login-title">Log In</h1>
            <form action="#" className="form">
                <div className="top-div-form -login">
                    <fieldset className="modal-fieldset -login ">
                        <label htmlFor="#email" className="modal-label">Email</label>
                        <input type="text" id="email" autoComplete="off" className="modal-input -login" />
                    </fieldset>
                    <fieldset className="modal-fieldset -login ">
                        <label htmlFor="#password" className="modal-label">Senha</label>
                        <input type="password" id="password" className="modal-input -login" />
                    </fieldset>
                    
                    <Button title={"Entrar"} />
                    
                </div>
            </form>
        </div>
    </div>
  )
}
