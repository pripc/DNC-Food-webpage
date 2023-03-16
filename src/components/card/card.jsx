import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import './index.scss'

const card = ({data}) => {
  console.log(data)
  return (
      <div className="card">
        <img src={data.imagem} className="card__image" />
        <h4 className="card__descripition">{data.nomeSimplificado}</h4>
        <button className="card__button">
          <Link to= {`/products/${data.id}`} >Adicionar</Link>
        </button>
      </div>
  )
}

export default card

