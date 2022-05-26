import { Outlet } from "react-router-dom";
import Nav from "./utils/Nav";
import Checkout from './utils/Checkout';
import Footer from "./Footer";

const Layout = ({carts, utils, status}) => {
  return (
    <div className='layout-container'>
      <Nav carts={carts} utils={{changeCartStatus: utils.changeCartStatus}}/>
      <Outlet />
      {status ? <Checkout utils={utils} carts={carts} /> : null}
      <Footer />
    </div>
  )
}

export default Layout;