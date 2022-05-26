import Shop from "./utils/Shop";
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
      <Shop type='featured' />
    </div>
  )
}

export default Header;