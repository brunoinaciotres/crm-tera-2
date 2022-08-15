import React from 'react'
import Modal from 'react-modal'
import { Default } from '../template'
import { Table, AddClientModal } from '../organisms'
import { Button } from '../atoms'


export default function Clients() {

  const [clients, setClients] = React.useState([])

    React.useEffect(() => {
        fetch('http://localhost:8080/client/getAll')
        .then (response => response.json())
        .then(data => {
            setClients(data.clients)
        })
    }, [])


  Modal.setAppElement('#root')

  const [modalIsOpen, setIsOpen] = React.useState(false);
  
  const customStyles = {
    content: {
        minWidth: "500px",
        width: "600px",
        minHeight: "80vh",
        left: "50%",
        transform: "translateX(-50%)",
        border: "0",
        background: "var(--darker-bg)",
        position: "absolute",
        padding: "0",
    },
    overlay: {
      background: 'rgba(0,0,0, 0.4)',
      zIndex:"5",
      
    }
  }


  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    
      <Default>
          <header className="main-header">
            <div className="title-div">
              <h1 className="main-title">Clientes</h1>
              <i className="fa-solid fa-circle-arrow-right header-icon"></i>
            </div>
            <div className="button-div">
              <Button title="Adicionar novo" onClick={openModal}/>
            </div>
          </header>
          <Table clients={clients} setClients={setClients} />
          <Modal 
            isOpen={modalIsOpen} 
            onRequestClose={closeModal}
            style={customStyles}
          >  
            <AddClientModal closeModal={closeModal} clients={clients} setClients={setClients} />
          </Modal>
      </Default>
      
    
  )
}
