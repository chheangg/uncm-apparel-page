import { Link } from "react-router-dom";
import '../styles/sidebar.scss';

const Sidebar = () => {
  return (
    <aside className='sidebar-container'>
      <h1 className='title category-title'>Categories</h1>
      <Link to='featured'>Featured</Link>
      <Link to='shirts'>Shirts</Link>
      <Link to='pants'>Pants</Link>
      <Link to='shoes'>sneakers</Link>
    </aside>
  )
}

export default Sidebar;