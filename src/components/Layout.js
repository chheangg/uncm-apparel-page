import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      Hello World!
      <Outlet />
    </div>
  )
}

export default Layout;