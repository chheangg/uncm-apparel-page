import cartImg from '../assets/cart-outline.svg';
import '../styles/cart.scss';

const Cart = ({carts, utils}) => {
  return (
    <button className='cart-btn' onClick={utils}>
      <img className='icon' src={cartImg} alt='checkout page'></img>
      {carts ? <div id='item-count'>{carts.length}</div> : null}
    </button>
  )
}

export default Cart;