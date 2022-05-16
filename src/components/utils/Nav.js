import { Link } from 'react-router-dom';
import logoImg from '../assets/uncm-logo.png';
import cartImg from '../assets/cart-outline.svg';
import searchImg from '../assets/magnify.svg';
import accImg from '../assets/account-outline.svg';
import '../styles/nav.scss';

const Nav = () => {
  return (
    <nav className='nav-container'>
      <div className='left-container'>
        <Link to='/about-us'>About Us</Link>
      </div>
      <div className='mid-container'>
        <Link to='/'><img src={logoImg} alt='logo'></img></Link>
      </div>
      <div className='right-container'>
        <ul>
          <li><img class='icon' src={accImg} alt='account'></img></li>
          <li><img class='icon' src={searchImg} alt='search'></img></li>
          <li><img class='icon' src={cartImg} alt='cart'></img></li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav;