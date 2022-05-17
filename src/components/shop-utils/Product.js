import defaultImg from '../assets/shirt-default.jpg';
import '../styles/product.scss';

const Product = ({info}) => {
  return (
    <div className='product-box'>
      {info.img ? <img src={info.img} alt='Apparel'></img> : <img src={defaultImg} alt='Rollback'></img>}
      <h1 data-testid='product'>{info.name}</h1>
      <div>$ {info.price}</div>
    </div>
  )
}
export default Product;