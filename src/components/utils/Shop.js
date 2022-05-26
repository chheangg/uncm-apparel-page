import { Link } from "react-router-dom";

const Shop = ({type}) => {
  const path = `/category/${type}`;
  return (
    <div className='btn-wrapper'>
    <Link to={path}>SHOP NOW</Link>
  </div>
  )
}

export default Shop;