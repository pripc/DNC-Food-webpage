import React from 'react';
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import Header from '../../components/header/header'
import Cards from '../../components/card/card'
import './index.scss';

const home = ({data}) => {
  return (
    <div className='home'>
      <Header />
      <section className='home__cards'>
        {data.map((food) => <Cards key={food.id} data={food}/> )}
      </section>

    </div>
  )
}

export default home
