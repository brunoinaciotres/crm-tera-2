import React from "react";
import { TableRow } from "../molecules";

export default function Table({ clients, setClients }) {
  return (
    <>
      <div className="table-header">
        <div className="header-row">
          <div className="title">Nome</div>
          <div className="title">Telefone</div>
          <div className="title">Email</div>
        </div>
      </div>
      <div className="table">
        <div className="table-body">
          {clients.map( client  => (
            <TableRow client={client} key={client._id} clients={clients} setClients={setClients}/>
          ))}
        </div>
      </div>
    </>
  );
}
