import defaultImg from '../assets/tshirt-crew.svg';
import '../styles/product.scss';
import { AddToCart, IncreaseProduct, DecreaseProduct } from '../utils/CartUtils';

const Product = ({info, utils, cartIcon, quantity}) => {
  return (
    <div className='product-box'>
      <div className='pic-wrapper'>
        {info.img ? <img className='product-pic' src={info.img} alt='Apparel'></img> :
        <img className='product-pic' src={defaultImg} alt='Rollback'></img>}
      </div>
      <div className='product-desc'>
        <h1 data-testid='product'>{info.name}</h1>
        <div className='product-price'>$ {parseInt(info.price).toFixed(2)}</div>
        <div className='quantity-switch'>
          { cartIcon ? <AddToCart utils={utils} info={info.img ? info : {...info, defaultImg} }/> : 
          <><DecreaseProduct utils={utils} info={info} /><>{quantity}</><IncreaseProduct utils={utils} info={info} /></>}
        </div>
      </div>
    </div>
  )
}
export default Product;