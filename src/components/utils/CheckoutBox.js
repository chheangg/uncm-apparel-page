import defaultImg from '../assets/shirt-default.jpg';

const CheckoutBox = ({info}) => {
  return (
    <div className='checkout-box'>
      {info.img ? <img src={info.img} alt='product'></img> : <img src={defaultImg} alt='product'></img>}
      <h1 data-testid='checkoutItem' >{info.name}</h1>
      <div className='price'>$ {parseInt(info.price).toFixed(2)}</div>
      <div className='quantity'>{info.quantity}</div>
    </div>
  )
}

export default CheckoutBox;