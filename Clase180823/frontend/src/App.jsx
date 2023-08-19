import { useEffect, useState } from 'react'
import './App.css'
import {getSongs} from './api/getSongs'
import Card from './Card'

function App() {
  const [songs, setSongs] = useState([])


  //con useEffect se monta el componente y ejecuta el get
  useEffect(() => {
    getSongs()
    //siempre la peticion trae una respuesta asincrona, la capturan con .then o con async await
    .then(res => res.json())
    .then(data => setSongs (data)) 
  }, [])

  return(
    <>
      {
        songs.map(song => <Card song = {song} key={song.id} />)
      }
    </>
  )
}

export default App
