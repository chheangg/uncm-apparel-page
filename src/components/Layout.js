import { useState } from 'react';
import { Outlet } from "react-router-dom";
import Nav from "./utils/Nav";
import Checkout from './utils/Checkout';

const Layout = ({carts}) => {
  const [ openCart, setOpenCart ] = useState(false);

  const changeCartStatus = () => {
    setOpenCart(true);
    console.log('hi')
  }

  return (
    <div>
      <Nav carts={carts} utils={{changeCartStatus}}/>
      <Outlet />
      {openCart ? <Checkout carts={carts} /> : null}
    </div>
  )
}

export default Layout;