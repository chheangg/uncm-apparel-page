import { Link } from 'react-router-dom';
import Cart from './Cart';
import logoImg from '../assets/uncm-logo.png';
import searchImg from '../assets/magnify.svg';
import accImg from '../assets/account-outline.svg';
import '../styles/nav.scss';

const Nav = ({carts, utils}) => {
  return (
    <nav className='nav-container'>
      <div className='left-container'>
        <Link to='/about-us'>ABOUT US</Link>
      </div>
      <div className='mid-container'>
        <Link to='/'><img src={logoImg} alt='logo'></img></Link>
      </div>
      <div className='right-container'>
        <ul>
          <li><Link to='/category/featured'>SHOP NOW</Link></li>
          <li><img className='icon' src={accImg} alt='account'></img></li>
          <li><img className='icon' src={searchImg} alt='search'></img></li>
          <li><Cart carts={carts} utils={utils.changeCartStatus} /></li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav;