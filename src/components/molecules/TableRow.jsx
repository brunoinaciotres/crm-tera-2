import React from "react";
import Modal from "react-modal";
import { ClientModal } from "../organisms";

export default function TableRow({ client, clients, setClients }) {
  Modal.setAppElement("#root");

  const [modalIsOpen, setIsOpen] = React.useState(false);

  const customStyles = {
    content: {
      minWidth: "500px",
      width: "600px",
      minHeight: "80vh",
      left: "50%",
      transform: "translateX(-50%)",
      border: "1px solid var(--light-grey)",
      background: "var(--darker-bg)",
      position: "relative",
      padding: "0",
    },
    overlay: {
      background: "rgba(0,0,0, 0.5)",
      zIndex:"5"
    },
  };

  function openModal() {
    setIsOpen(true);
    
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div onClick={openModal} className="row">
        <div className="cell">{client.name}</div>
        <div className="cell">{client.phone}</div>
        <div className="cell">{client.email}</div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        
      >
        <ClientModal closeModal={closeModal} client={client} key={client._id} clients={clients} setClients={setClients}/>
      </Modal>
    </>
  );
}
