import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ListItems() {
  return (
        <>
            <li className="menu-list-item" >
                <NavLink to={"/"} className="menu-link">
                <i className="fa-solid fa-users menu-icon"></i>
                Clientes
                </NavLink>
            </li>
            <li className="menu-list-item">
                <NavLink  to={"/produtos"} className="menu-link" >
                    <i className="fa-solid fa-store menu-icon"></i>
                    Produtos
                </NavLink>
            </li>
            <li className="menu-list-item">
                <NavLink  to={"/suporte"} className="menu-link">
                    <i className="fa-solid fa-headset menu-icon"></i>
                    Suporte
                </NavLink>
            </li>
            <li className="menu-list-item">
                <NavLink  to={"/sobre"} className="menu-link">
                    <i className="fa-solid fa-circle-info menu-icon"></i>
                    Sobre
                </NavLink>
            </li>
            <li className="menu-list-item">
                <NavLink  to={"/config"} className="menu-link">
                    <i className="fa-solid fa-gear menu-icon"></i>
                    Configurações
                </NavLink>
            </li>
        </>
    
  )
}
