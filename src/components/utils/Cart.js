import cartImg from '../assets/cart-outline.svg';

const Cart = () => {
  return (
    <button>
      <img className='icon' src={cartImg} alt='checkout page'></img>
    </button>
  )
}

export default Cart;