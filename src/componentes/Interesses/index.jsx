import { useEffect, useState } from 'react'
import CardInteresse from './CardInteresse'
import axios from 'axios'

import './estilos.css'

const Interesses = () => {

  const [lista, setLista] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/keywords')
      .then(response => {
        setLista(response.data)
      })
  },[])

  return (
    <div>
      <section id="palavras-chave" className="subtitulo">
        <h2>Palavras chave</h2>
      </section>
      <section className="interesses">
        {lista.map((item, indice) => <CardInteresse key={indice} texto={item.titulo}/>)}        
      </section>
    </div>
  )

}

export default Interesses