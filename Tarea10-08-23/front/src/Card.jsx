import React from 'react'
import './Card.css'

function Card({medico}) {
  return (
    <div className="track-card">
<div >
    <h1 className="hoover">{medico.Name}</h1>
    <h2 className="hoover">{medico.Especialidad}</h2>
    <p>{medico.Matricula}</p>
  </div>
  </div>
  )
}

export default Card