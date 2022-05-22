import defaultImg from '../assets/tshirt-crew.svg';
import { IncreaseProduct, DecreaseProduct } from './CartUtils';

const CheckoutBox = ({info, utils}) => {
  return (
    <div className='checkout-box'>
      {info.img ? <img className='checkout-icon' src={info.img} alt='product'></img> : <img className='checkout-icon' src={defaultImg} alt='product'></img>}
      <h1 className='product-name' data-testid='checkoutItem' >{info.name}</h1>
      <div className='price'>$ {parseInt(info.price).toFixed(2)}</div>
      <div className='quantity-switch'>
      <DecreaseProduct utils={utils} info={info} />
        {info.quantity} 
      <IncreaseProduct utils={utils} info={info} /> 
      </div>
    </div>
  )
}

export default CheckoutBox;