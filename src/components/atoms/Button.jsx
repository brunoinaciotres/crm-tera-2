import React from 'react'

export default function Button({title, onClick}) {
  return (
    <button className="main-button" onClick={onClick}>{title}</button>
  )
}
