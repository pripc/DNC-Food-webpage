import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/header/header' 
import ProductDetail from '../../components/productDetail/productDetail'
import './index.scss'

const productDetail = ({data}) => {
  const { id } = useParams() //RETORNA A ROTA DEFINIDA NO ARQUIVO MAIN
  const selectedProduct = data.find((product) => product.id == id)
  
  return (
    <div className='productDetail'>
      <Header />
      <ProductDetail className = 'productDetail_orderSumary' data={selectedProduct}/>
    </div>
  )
}

export default productDetail
