import { useEffect, useState } from 'react'
import './App.css'
import {getMedicos} from './api/getMedicos'
import Card from './Card'

function App() {
  const [medicos, setMedicos] = useState([])


  //con useEffect se monta el componente y ejecuta el get
  useEffect(() => {
    getMedicos()
    //siempre la peticion trae una respuesta asincrona, la capturan con .then o con async await
    .then(res => res.json())
    .then(data => setMedicos (data)) 
  }, [])

  return(
    <>
      {
        medicos.map(medico => <Card medico = {medico} key={medico.id} />)
      }
    </>
  )
}

export default App
