import { HashRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import 'normalize.css';
import Layout from "./components/Layout";
import Main from "./components/Main";
import Categories from "./components/shop-utils/Categories";
import Category from "./components/shop-utils/Category";
import './components/styles/main.scss';
import productsList from "./components/config";

const App = () => {
  const [products] = useState(productsList);
  const [carts, setCarts] = useState([])
  const [ openCart, setOpenCart ] = useState(false);

  const changeCartStatus = () => {
    if (openCart === true) {
      setOpenCart(false);
      return;
    }
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
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout carts={carts} status={openCart} utils={{utils, changeCartStatus}}/>}>
          <Route index element={<Main />} />
          <Route path='category' element={<Categories />}>
            <Route path='featured' element={<Category type='featured' carts={carts} products={products} utils={utils} />} />
            <Route path='apparels' element={<Category type='apparels' carts={carts} products={products} utils={utils} />} />
            <Route path='shirts' element={<Category type='shirts' carts={carts} products={products} utils={utils} />} />
            <Route path='shorts' element={<Category type='shorts' carts={carts} products={products} utils={utils} />} />
            <Route path='accessories' element={<Category type='accessories' carts={carts} products={products} utils={utils} />} />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App;