import defaultImg from '../assets/shirt-default.jpg';
import { IncreaseProduct, DecreaseProduct } from './CartUtils';
const CheckoutBox = ({info, utils}) => {
  return (
    <div className='checkout-box'>
      {info.img ? <img src={info.img} alt='product'></img> : <img src={defaultImg} alt='product'></img>}
      <h1 data-testid='checkoutItem' >{info.name}</h1>
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