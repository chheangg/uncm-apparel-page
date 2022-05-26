import CheckoutBox from "./CheckoutBox";
import '../styles/checkout.scss';
import { useEffect, useState } from 'react';
import closeImg from '../assets/close.svg'

const Checkout = ({carts, utils}) => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 50)
  }, [])

  const getTotal = (carts) => {
    return carts.reduce((prev, next) => {
      return prev + parseInt(next.price) * parseInt(next.quantity)
    }, 0)
  }
  return (
    <div className={animate ? 'checkout-bar-container checkout-animate' : 'checkout-bar-container'}>
      <h1 className='checkout-title'>Shiz in your cart!</h1>
      <button className='close-btn' onClick={utils.changeCartStatus}><img src={closeImg} alt='close checkout'></img></button>
      <div className='checkout-container'>
        {carts.length > 0 ? carts.map(item => <CheckoutBox info={item} utils={utils.utils} />) : <p>Bruh, order smth</p>}
      </div>
      <div className='subtotal total'>
        <p>Subtotal</p>
        <p className='sub-cost total-cost'>$ {getTotal(carts).toFixed(2)}</p>
      </div>
      <div className='true-total total'>
        <p className='total-title'>Total</p>
        <p className='true-total-cost total-cost'>$ {getTotal(carts).toFixed(2)}</p>
      </div>
    </div>
  )
}

export default Checkout;