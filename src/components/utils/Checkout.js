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
  return (
    <div className={animate ? 'checkout-bar-container checkout-animate' : 'checkout-bar-container'}>
      <h1>Shiz in your cart!</h1>
      <button onClick={utils.changeCartStatus}><img src={closeImg} alt='close checkout'></img></button>
      <div className='checkout-container'>
        {carts ? carts.map(item => <CheckoutBox info={item} utils={utils.utils} />) : 'Bruh, order smth'}
      </div>
    </div>
  )
}

export default Checkout;