import React from 'react'
import {Logo} from '../atoms'
import { ListItems } from '../organisms'

export default function Menu() {
  return (
    <aside className="menu">
        <div className="menu-header">
            <Logo />
        </div>
        <nav>
          <ul className="menu-ul">
            <ListItems />
          </ul>
        </nav>
        
          
        
    </aside>
  )
}
