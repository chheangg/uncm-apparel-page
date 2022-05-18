import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import 'normalize.css';
import Layout from "./components/Layout";
import Main from "./components/Main";
import Categories from "./components/shop-utils/Categories";
import Category from "./components/shop-utils/Category";
import './components/styles/main.scss';
import defaultImg from './components/assets/shirt-default.jpg'
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

const ordered = [
  {
    name: 'simple shirt',
    price: 12,
    quantity: '2',
    img: defaultImg,
  },
  {
    name: 'simple pants',
    price: 12,
    quantity: '3',
    img: defaultImg,
  },
  {
    name: 'Air Menlay One',
    price: 12,
    quantity: 1,
    img: defaultImg,
  },
  {
    name: 'menlay\'s shirt',
    price: 12,
    quantity: '2',
    img: defaultImg,
  },
]
const App = () => {
  const [products] = useState(uncmList);
  const [carts, setCarts] = useState(ordered)
  const [ openCart, setOpenCart ] = useState(false);

  const changeCartStatus = () => {
    setOpenCart(true);
  }

  const addToCart = (product) => {
    const inCart = carts.filter((obj) => obj.name === product.name);
    if (inCart[0]) {
      const newCart = carts.map((obj) => {
        if (obj.name === inCart[0].name) {
          const newObj = obj;
          newObj.quantity = parseInt(newObj.quantity);
          newObj.quantity += 1;
          return newObj;
        }
        return obj;
      });
      setCarts(newCart);
    } else {
      const newOrder = {
        name: product.name,
        price: product.price,
        quantity: 1,
        img: product.img,
      }
      setCarts([...carts, newOrder]);
    }
  }

  const removeFromCart = (product) => {
    const inCart = carts.filter((obj) => obj.name === product.name);
    if (inCart[0]) {
      if (inCart[0].quantity === 1) {
        const newCart = carts.filter((obj) => obj.name !== product.name)
        setCarts(newCart)
        return;
      }
      const newCart = carts.map((obj) => {
        if (obj.name === inCart[0].name) {
          const newObj = obj;
          newObj.quantity = parseInt(newObj.quantity);
          newObj.quantity -= 1;
          return newObj;
        }
        return obj;
      });
      setCarts(newCart);
    }
  }

  const utils = {
    addToCart,
    removeFromCart,
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout carts={carts} status={openCart} utils={{utils, changeCartStatus}}/>}>
          <Route index element={<Main />} />
          <Route path='category' element={<Categories />}>
            <Route path='featured' element={<Category type='featured' carts={carts} products={products} utils={utils} />} />
            <Route path='shirts' element={<Category type='shirt' carts={carts} products={products} utils={utils} />} />
            <Route path='pants' element={<Category type='pants' carts={carts} products={products} utils={utils} />} />
            <Route path='shoes' element={<Category type='shoes' carts={carts} products={products} utils={utils} />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;