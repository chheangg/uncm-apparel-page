import '../styles/category.scss';
import Product from './Product';
import uniqid from 'uniqid';

const Category = ({type, products}) => {
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
        { filtered ? filtered.map((product) => <Product info={product} key={product.key} />) : 'Nothing to see here' }
      </div>
    </div>
  )
}

export default Category;