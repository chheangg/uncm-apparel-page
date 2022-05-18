import defaultImg from '../assets/shirt-default.jpg';
import '../styles/product.scss';
import { AddToCart, IncreaseProduct, DecreaseProduct } from '../utils/CartUtils';

const Product = ({info, utils, cartIcon, quantity}) => {
  return (
    <div className='product-box'>
      {info.img ? <img src={info.img} alt='Apparel'></img> : <img src={defaultImg} alt='Rollback'></img>}
      <h1 data-testid='product'>{info.name}</h1>
      <div>$ {info.price}</div>
      <div className='quatity-switch'>
        { cartIcon ? <AddToCart utils={utils} info={info.img ? info : {...info, defaultImg} }/> : 
        <><DecreaseProduct utils={utils} info={info} /><>{quantity}</><IncreaseProduct utils={utils} info={info} /></>}
      </div>
    </div>
  )
}
export default Product;