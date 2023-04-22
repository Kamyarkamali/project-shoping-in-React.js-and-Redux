import React from 'react'
import {Provider} from "react-redux";
import store from './Redux/store';
import Carts from './components/Carts';
import Navbar from './components/navbar/Navbar';
import Detailse from "./components/detailse/Detailse";
import {Routes,Route,Navigate} from "react-router-dom";
import ShopCart from './components/ShopCart/ShopCart';
import Alart from './components/Alart/Alart';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div>
      <Provider store={store}>
    <Navbar/>
    <Alart/>
    <Routes>
      <Route path='/*' element={<Navigate to={"/"}/>}/>
      <Route path='/' element={<Carts/>}/>
      <Route path='/detailse/:id' element={<Detailse/>}/>
      <Route path="/shopcart" element={<ShopCart/>}/>
    </Routes>
    <Footer/>
      </Provider>
    </div>
  )
}

export default App
