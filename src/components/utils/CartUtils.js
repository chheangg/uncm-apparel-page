import cartPlusImg from '../assets/cart-plus.svg';
import plusImg from '../assets/plus.svg';
import minusImg from '../assets/minus.svg';

const AddToCart = ({utils, info}) => {
  return (
    <button className='utils-icon' data-testid='addToCart' onClick={() => {
      console.log(info);
      utils.addToCart(info);
    }}>
      <img src={cartPlusImg} alt='add to cart'></img>
    </button>
  )
}

const IncreaseProduct = ({utils, info}) => {
  return (
    <button className='utils-icon' data-testid='increaseProduct' onClick={() => {
      utils.addToCart(info);
    }}>
      <img src={plusImg} alt='increase amount'></img>
    </button>
  )
}

const DecreaseProduct = ({utils, info}) => {
  return (
    <button className='utils-icon' data-testid='decreaseProduct' onClick={() => {
      utils.removeFromCart(info);
    }}>
      <img src={minusImg} alt='decrease amount'></img>
    </button>
  )
}

export { AddToCart, IncreaseProduct, DecreaseProduct };