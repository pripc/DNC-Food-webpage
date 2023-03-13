import React from 'react'
import logo from '../../assets/logo.png'
import carrinho from '../../assets/cart.png'
import './index.scss'

const header = () => {
  return (
    <header className='header'>
        <div className='header__leftSide'>
            <img src={logo} />
            <h2>Food</h2>        
            <ul className='header__list'>
                <li>Variedades</li>
                <li>Pizzas</li>
                <li>Lanches</li>
                <li>Doces</li>
                <li>Promoções</li>
            </ul>
        </div>
        <div className='header__cart'>
            <h4>Minhas compras</h4>
            <img width='48px' src={carrinho}/>
        </div>
    </header>
  )
}

export default header
