import { Outlet } from "react-router-dom";
import Nav from "./utils/Nav";
import Checkout from './utils/Checkout';

const Layout = ({carts, utils, status}) => {
  return (
    <div>
      <Nav carts={carts} utils={{changeCartStatus: utils.changeCartStatus}}/>
      <Outlet />
      {status ? <Checkout utils={utils} carts={carts} /> : null}
    </div>
  )
}

export default Layout;