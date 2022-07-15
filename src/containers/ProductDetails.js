import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeSelectedProduct, selectedProduct } from '../redux/actions/productAction'
import axios from 'axios'
import Loader from './Loader/Loader'
const ProductDetails = () => {
  const product = useSelector(state => state.product);
  const {productId} = useParams()
  const dispatch = useDispatch()
  const {image, title, description, price,category} = product

  const fetchProductDetail = async ()=> {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
    .catch(e => console.log('Error:', e.message))
    dispatch(selectedProduct(response.data))
    console.log(response.data);
  }

  useEffect(() => { 
    if (productId && productId !== '') fetchProductDetail()

    return () => {
      dispatch(removeSelectedProduct())
    }
  }, [productId])

  return (
    <div className='ui grid container'>
      {Object.keys(product).length === 0 ? (
        <Loader/>
        ): (
        <div className='ui placeholder segment'>
          <div className='ui two column stackable center aligned grid'>
            <div className='ui vertical divider'>AND</div>
            <div className='middle aligned row'>
              <div className='column lp'>
                <img src={image} alt={title}/>
              </div>
              <div className='column rp' >
                <h1>{title}</h1>
                <h2>
                  <div className='ui teal tag label'>${price}</div>
                </h2>
                <div className='ui brown block header' style={{marginTop: '40px'}}><h3 style={{marginBottom: '10px'}}>{category}</h3></div>
                <p>{description}</p>
                <div className='ui vertical animated button' tabIndex='0'>
                  <div className='hidden content'>
                    <i className='shop icon'></i>
                  </div>
                  <div className='visible content'>Add To Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductDetails