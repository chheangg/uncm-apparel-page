import { Link } from "react-router-dom";
import '../styles/sidebar.scss';
import icon from '../assets/menu.svg';

const Sidebar = () => {
  return (
    <aside className='sidebar-container'>
      <h1 className='title'>Categories</h1>
      <Link to='featured'><img className='icon' src={icon} alt='featured'></img>Featured</Link>
      <Link to='apparels'><img className='icon' src={icon} alt='apparels'></img>Apparels</Link>
      <Link to='shirts'><img className='icon' src={icon} alt='shirts'></img>Shirts</Link>
      <Link to='shorts'><img className='icon' src={icon} alt='pants'></img>Shorts</Link>
      <Link to='accessories'><img className='icon' src={icon} alt='pants'></img>Accessories</Link>
    </aside>
  )
}

export default Sidebar;