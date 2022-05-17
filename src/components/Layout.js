import { Outlet } from "react-router-dom";
import Nav from "./utils/Nav";

const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  )
}

export default Layout;