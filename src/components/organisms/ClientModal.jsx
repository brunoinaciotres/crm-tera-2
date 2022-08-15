import React from "react";
import copy from "copy-to-clipboard";
import Swal from 'sweetalert2'

import { ModalHeader } from "../molecules";

export default function ClientModal({ closeModal, client, clients, setClients}) {
  
  function copyToClipboard(e) {
    const text = e.target.innerText;
    copy(text);
    Swal.fire(
      {
        title: 'Texto copiado para o clipboard!',
        background: "#313131",
        backdrop: "transparent",
        width: "200px",
        buttonsStyling: false,
        customClass: {
          title: "warn-title",
          confirmButton: "warn-btn"
        }
      })
      
      
  }

  const handleDeleteClient = async () => {
    Swal.fire(
      {
        title:  'Deseja deletar este cliente?',
        confirmButtonText: 'Deletar',
        background: "#313131",
        backdrop: "rgba(0,0,0, 0.4)",
        buttonsStyling: false,
        customClass: {
          title: "delete-title",
          confirmButton: "delete-btn"
        },
        preConfirm: async () => {
          return await fetch('http://localhost:8080/client/delete', {
            method: 'DELETE',
            headers: {
            'Content-type': 'application/json'
          },
            cache: 'default',
            mode: 'cors',
            body: JSON.stringify({id: client._id}),
          })
          .then (response => response.json())
          .then ( msg => {
            closeModal()
  
            const newClients = clients.filter(oneClient => oneClient.cpf !== client.cpf)
            setClients(newClients)
          })
        }
      })
      
    
      
  }

  const handleEditClient = () => {
    
  }

  return (
    <div className="modal">

      <ModalHeader title={client.name} closeModal={closeModal} />

      <div className="actions">
        <div className="icon-bg" onClick={handleDeleteClient}>
          <i className="fa-solid fa-trash-can action-icon red"></i>
        </div>
        <div className="icon-bg">
        <i className="fa-solid fa-pencil action-icon white" onClick={handleEditClient}></i>
        </div>
      </div>

      <div className="top-div-form">
        
        <fieldset className="modal-fieldset">
          <label htmlFor="#name" className="modal-label">
            Nome
          </label>
          <div className="modal-data" id="name" onClick={copyToClipboard}>
            {client.name}
          </div>
        </fieldset>

        <fieldset className="modal-fieldset">
          <label htmlFor="#email" className="modal-label">
            Email
          </label>
          <div className="modal-data" id="email" onClick={copyToClipboard}>
            {client.email}
          </div>
        </fieldset>

      </div>

      <div className="middle-div-form">

        <fieldset className="modal-fieldset">
          <label htmlFor="#phone" className="modal-label">
            Telefone
          </label>
          <div className="modal-data" id="phone" onClick={copyToClipboard}>
            {client.phone}
          </div>
        </fieldset>

        <fieldset className="modal-fieldset">
          <label htmlFor="#cpf" className="modal-label">
            CPF
          </label>
          <div className="modal-data" id="cpf" onClick={copyToClipboard}>
            {client.cpf}{" "}
          </div>
        </fieldset>

      </div>

    </div>
  );
}
