import { Link } from "react-router-dom";
import headerVid from './assets/uncm-header-vid.mp4';
import './styles/header.scss';

const Header = () => {
  return (
    <div className='header-container'>
      <div className='video-container'>
        <video width='1920' height='780' autoPlay muted loop>
          <source src={headerVid} type='video/mp4'></source>
        </video>
      </div>
      <p>GOATED APPAREL IN PP</p>
      <div className='btn-wrapper'>
        <Link to='/category/featured'>SHOP NOW</Link>
      </div>
    </div>
  )
}

export default Header;