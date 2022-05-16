import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/category.scss';
import Product from './Product';

const Category = ({type, products}) => {
  return (
    <div className='product-wrapper'>
      {type}
      <div className='product-container'>
      {products[0] ? products.map((product) => <Product info={product} />) : 'Nothing to see here' }
      </div>
    </div>
  )
}

export default Category;