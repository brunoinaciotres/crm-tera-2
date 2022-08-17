import React from 'react'
import { Button } from '../atoms'
import { ModalHeader } from '../molecules'


export default function AddClientModal({ closeModal, setClients, clients }) {

  const handleAddClient = async (e) => {
    e.preventDefault()
    
    const name = document.querySelector("#name").value 
    const email = document.querySelector("#email").value 
    const phone = document.querySelector("#phone").value
    const cpf = document.querySelector("#cpf").value


    const newClient = {
      name,
      email,
      phone,
      cpf
    }

    await fetch('http://localhost:8080/client', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      cache: 'default',
      mode: 'cors',
      body: JSON.stringify(newClient),
    }).then (response => {
      closeModal()
      setClients([...clients, newClient])
    })
    
    
  }

    return (
        <div className="modal">
            <ModalHeader title={"Adicionar novo cliente"} closeModal={closeModal} />
            <form action="submit" className="modal-form">
                <div className="top-div-form">
                    <fieldset className="modal-fieldset">
                        <label htmlFor="#name" className="modal-label">Nome</label>
                        <input type="text" id="name" className="modal-input" />
                    </fieldset>
                    <fieldset className="modal-fieldset">
                        <label htmlFor="#email" className="modal-label">Email</label>
                        <input type="text" id="email" autoComplete="off" className="modal-input" />
                    </fieldset>
                </div>
                <div className="middle-div-form">
                    <fieldset className="modal-fieldset">
                        <label htmlFor="#phone" className="modal-label">Telefone</label>
                        <input type="text" id="phone" className="modal-input" placeholder='(  ) 00000-0000' />
                    </fieldset>
                    <fieldset className="modal-fieldset">
                        <label htmlFor="#cpf" className="modal-label">CPF</label>
                        <input type="text" id="cpf" className="modal-input" placeholder='000000000-00' />
                    </fieldset>
                </div>
                <div className="bottom-div-form">
                    <Button title={"Adicionar"} onClick={handleAddClient} />
                </div>


            </form>

        </div>
    )
}
