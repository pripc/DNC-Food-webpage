import React from 'react'
import logo from '../../assets/logo.png'
import './index.scss'

const header = () => {
  return (
    <header className='header'>
        <div className='header__logo'>
            <img src={logo} />
            <h2>Food</h2>
        </div>
        <div className='header__list'>
            <lu>
                <li>Variedades</li>
                <li>Pizzas</li>
                <li>Lanches</li>
                <li>Doces</li>
                <li>Promoções</li>
            </lu>
        </div>
      

    </header>
  )
}

export default header
