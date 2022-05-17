import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import '../styles/categories.scss';

const Categories = () => {
  return(
    <div className='main-cat-container'>
      <Sidebar />
      {<Outlet /> ? <Outlet /> : 'Nothing here'}
    </div>

  )
}

export default Categories;