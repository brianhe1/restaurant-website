import React from 'react';
import Home from './pages/home/Home';
import Location from './pages/location/Location';
import About from './pages/about/About';
import Menu from './pages/menu/Menu';
import Order from './pages/order/Order';
import Catering from './pages/catering/Catering';
import Nav from './components/nav/Nav';
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/location" element={<Location/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/catering" element={<Catering/>} />
        <Route path="/order" element={<Order/>} />
      </Routes>
    </div>
      
  )
}

export default App