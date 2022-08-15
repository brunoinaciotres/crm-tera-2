import React from 'react'

export default function ModalHeader ({title, closeModal}) {

    return (
        <div className="top-div-modal">
            <h1 className="modal-title">{title}</h1>
            <button className="close-icon" onClick={closeModal}>X</button>
        </div>
    )
}




