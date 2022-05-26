import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Cart from './Cart';
import logoImg from '../assets/uncm-logo.png';
import searchImg from '../assets/magnify.svg';
import accImg from '../assets/account-outline.svg';
import '../styles/nav.scss';
import { useState, useEffect } from 'react';

const Nav = ({carts, utils}) => {
  const location = useLocation();
  const [transparent, setTransparent] = useState(false);
  const [retain, setRetain] = useState(false);
  const scrollHandler = () => {
    if (window.scrollY > 10  && location.pathname === '/') {
      setTransparent(false);
    }
    if (window.scrollY < 10 && location.pathname === '/'){
      setTransparent(true);
    }
  }
  
  const onPageScroll = () => {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    if (location.pathname !== '/' && location.pathname !== '#/') {
      setTransparent(false);
      setRetain(false);
    }
    if (location.pathname === '/' || location.pathname === '#/') {
      setTransparent(true);
      setRetain(true);
    }
  }, [location])

  useEffect(() => {
    window.addEventListener('scroll',  scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    }
  })
  return (
    <nav className={transparent && retain ? 'nav-container transparent' : retain ? 'nav-container retain' : 'nav-container'}>
      <div className='left-container'>
        <Link onClick={onPageScroll} to='/about-us'>ABOUT US</Link>
      </div>
      <div className='mid-container'>
        <Link onClick={onPageScroll} to='../'><img className='logo' src={logoImg} alt='logo'></img></Link>
      </div>
      <div className='right-container'>
        <ul>
          <li><Link onClick={onPageScroll} to='/category/featured'>SHOP NOW</Link></li>
          <li><img className='icon' src={accImg} alt='account'></img></li>
          <li><img className='icon' src={searchImg} alt='search'></img></li>
          <li><Cart carts={carts} utils={utils.changeCartStatus} /></li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav;