import React from 'react'

function Card({medico}) {
  return (
    <div id={medico.id}>
      <h1>{medico.Name}</h1>
      <h2>{medico.Especialidad}</h2>
      <p>{medico.Matricula}</p>
    </div>
  )
}

export default Card