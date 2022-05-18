import '../styles/category.scss';
import Product from './Product';
import uniqid from 'uniqid';

const Category = ({type, products, utils, carts}) => {
  let filtered;
  if (products) {
    filtered = products.filter(product => product.type === type)
      .map(product => {
        return {
          ...product,
          key: uniqid(),
        }
      })
  }
  return (
    <div className='product-wrapper'>
      <h1 className='category-title'>
        {type}
      </h1>
      <div className='product-container'>
        { filtered ? filtered.map((product) => {
          const inCart = carts.filter(obj => obj.name === product.name);
          if (inCart[0]) {
            return <Product info={product} utils={utils} key={product.key} cartIcon={false} quantity={inCart[0].quantity} /> 
          }
          return <Product info={product} utils={utils} key={product.key} cartIcon={true} quantity={0} />;
         }) : 'Nothing to see here' }
      </div>
    </div>
  )
}

export default Category;