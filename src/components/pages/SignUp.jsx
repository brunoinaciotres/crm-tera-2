import React from 'react'
import { Button } from '../atoms'
import Swal from 'sweetalert2'

export default function SignUp() {
    
    const handleSignUp = async (e) => {
        e.preventDefault()

        let nameValue = document.querySelector("#name").value
        let emailValue = document.querySelector("#email").value
        let passwordValue = document.querySelector("#password").value

        const newUser = {
            nameValue,
            emailValue,
            passwordValue
        }

        const options = {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(newUser),
            mode: "cors"
        }

        await fetch('http://127.0.0.1:5000/users/create', options)
        .then( response => response.json())
        .then(response => {
            checkResponseStatus(response)
            
        })
        .catch ( e  => {
            
            Swal.fire({
                position: 'center',
                icon: 'error',
                background: '#242323',
                color: "#fff",
                title: 'Algo deu errado... :(',
                showConfirmButton: false,
                timer: 1500
            })

        } 
        )

        
    }
    
    function checkResponseStatus(response){
        if (response.status == 400) {
            
            Swal.fire({
                position: 'center',
                icon: 'error',
                background: '#242323',
                color: "#fff",
                title: response.msg,
                showConfirmButton: false,
                timer: 1500
            })
            return
        }

        if(response.status == 409) {

            Swal.fire({
                position: 'center',
                icon: 'error',
                background: '#242323',
                color: "#fff",
                title: response.msg,
                showConfirmButton: false,
                timer: 1500
            })
            return
        }

        Swal.fire({
            position: 'center',
            icon: 'success',
            background: '#242323',
            color: "#fff",
            title: response.msg,
            showConfirmButton: false,
            timer: 1500
        })

        setTimeout(() => {
            window.location.href = '/login'
        }, 2000)
    }

  return (
    <div className="sign-up-container">
        <div className="wrapper">
            <h1 className="sign-up-title">Cadastre-se</h1>
            <form action="#" className="form">
                <div className="top-div-form -signup">
                    <fieldset className="modal-fieldset -signup ">
                        <label htmlFor="#name" className="modal-label">Nome</label>
                        <input type="text" id="name" autoComplete="off" className="modal-input -signup" />
                    </fieldset>
                    <fieldset className="modal-fieldset -signup ">
                        <label htmlFor="#email" className="modal-label">Email</label>
                        <input type="text" id="email" autoComplete="off" className="modal-input -signup" />
                    </fieldset>
                    <fieldset className="modal-fieldset -signup ">
                        <label htmlFor="#password" className="modal-label">Senha</label>
                        <input type="password" id="password" className="modal-input -signup" />
                    </fieldset>
                    
                    <Button title={"Cadastrar"} onClick={handleSignUp} />
                    
                </div>
            </form>
        </div>
    </div>
  )
    
}
