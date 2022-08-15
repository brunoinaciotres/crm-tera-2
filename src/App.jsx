import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

import React from 'react'
import {Clients, Products, Support, About, Settings} from './components/pages'


export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<Clients />} />
            <Route path="/produtos" element={<Products />} />
            <Route path="/suporte" element={<Support />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/config" element={<Settings />} />
        </Routes>
    </BrowserRouter>

  )
}
