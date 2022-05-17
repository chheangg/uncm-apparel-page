import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import 'normalize.css';
import Layout from "./components/Layout";
import Main from "./components/Main";
import Nav from "./components/utils/Nav";
import Categories from "./components/shop-utils/Categories";
import Category from "./components/shop-utils/Category";
import './components/styles/main.scss';

const uncmList = [
  {
    name: 'simple shirt',
    price: 12,
    type: 'shirt',
  },
  {
    name: 'menlay\'s shirt',
    price: 12,
    type: 'shirt',
  },
  {
    name: 'simple pants',
    price: 12,
    type: 'pants',
  },
  {
    name: 'Air Menlay One',
    price: 12,
    type: 'shoes',
  },
]

const App = () => {
  const [products, setProducts] = useState(uncmList)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
            <Layout>
              <Nav />
            </Layout>
          }>
          <Route index element={<Main />} />
          <Route path='category' element={<Categories />}>
            <Route path='shirts' element={<Category type='shirt' products={products} />} />
            <Route path='pants' element={<Category type='pants' products={products} />} />
            <Route path='shoes' element={<Category type='shoes' products={products} />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;