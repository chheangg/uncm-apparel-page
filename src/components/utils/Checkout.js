import CheckoutBox from "./CheckoutBox";
import '../styles/checkout.scss';
import { useEffect, useState } from 'react';

const Checkout = ({carts}) => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 50)
  }, [])
  return (
    <div className={animate ? 'checkout-bar-container checkout-animate' : 'checkout-bar-container'}>
      <h1>Shiz in your cart!</h1>
      <div className='checkout-container'>
        {carts ? carts.map(item => <CheckoutBox info={item} />) : 'Bruh, order smth'}
      </div>
    </div>
  )
}

export default Checkout;