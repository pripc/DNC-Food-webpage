import Line from '../../assets/line.png'
import './index.scss'
import { Link } from 'react-router-dom'
import React, { useState } from 'react';

const modal = ({data}) => {
  return(
  <main className='orderSumary'>
    <section className='orderSumary-leftSide'>
        <div className='orderSumary-leftSide__card'>
          <img src={data.imagem} alt={data.nomeDetalhado} />
          <p>{data.nomeSimplificado}</p>
        </div>
        <p>{data.nomeDetalhado}</p>
    </section>
    <section className='orderSumary-rightSide'>
      <h2>Minha sacola</h2>
      <h1 className='orderSumary-rightSide__foodName'>{data.nomeSimplificado}</h1>
      <img width='80%'src={Line} alt='line' />
      <h1>R${data.preco}</h1>
      <button className='orderSumary-rightSide__buyMore'>
        <Link to = {'../'}>Continuar comprando</Link>
      </button>
      <button className='orderSumary-rightSide__Finish'>Finalizar compra</button>
      
    </section>
</main>
  )
}

export default modal