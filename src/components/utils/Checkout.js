import CheckoutBox from "./CheckoutBox";

const Checkout = ({carts}) => {
  return (
    <div className='checkout-bar-container'>
      <h1>Shiz in your cart!</h1>
      <div className='checkout-container'>
        {carts ? carts.map(item => <CheckoutBox info={item} />) : 'Bruh, order smth'}
      </div>
    </div>
  )
}

export default Checkout;