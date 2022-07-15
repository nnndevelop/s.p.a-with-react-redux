import React, { useEffect } from 'react'
import ProductComponents from './ProductComponents'
import axios from 'axios'
import {setProduct} from '../redux/actions/productAction'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader/Loader'
import { useState } from 'react'

const ProductList = () => {
  const products = useSelector( state => state);
  const dispatch =  useDispatch()
  const [isLoading, setIsLoading] = useState(false)

  const fetchProduct = async () => {
   const response = await axios.get('https://fakestoreapi.com/products/')
   .catch(e => console.log('Error', e.message))
   dispatch(setProduct(response.data))
   setIsLoading(true)
  }
  useEffect(() => {
    fetchProduct()
  },[])
  return (
    <div className='ui grid container'>
    {isLoading ? <ProductComponents/> : <Loader/> }
    </div>
  )
}

export default ProductList