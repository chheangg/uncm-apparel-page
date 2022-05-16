import defaultImg from '../assets/shirt-default.jpg';
import '../styles/Product.scss';

const Product = ({info}) => {
  return (
    <div className='product-box'>
      {info.img ? <img src={info.img} alt='Apparel'></img> : <img src={defaultImg} alt='Rollback'></img>}
      <h1>{info.name}</h1>
      <div>$ {info.price}</div>
    </div>
  )
}
export default Product;