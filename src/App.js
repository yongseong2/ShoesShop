// import { useState } from 'react';
import './App.css';
import ShoesList from './Components/shoesList.js';
import { Routes, Route, Outlet } from 'react-router-dom'
import DetailView from './Views/DetailView';
import CartView from './Views/CartView'
import NavBarCom from './Components/NavBarCom';


function App() {
  return (
    <div>
      <NavBarCom/>
      <Routes>
        <Route path='/' element={
          <>
            <div className='main-bg'></div>
            <div className="container">
              <div className="row">
                <ShoesList />
              </div>
            </div>
          </>
        } />
        <Route path='/detail/:shoeId' element={<DetailView />} />
        <Route path='/about' element={<div>어바웃페이지임</div>} />
        <Route path='/event' element={<Event />}>
          <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path='two' element={<div>생일기념 쿠폰받기</div>} />
        </Route>
        <Route path='/cart' element={<CartView/>}></Route>
        <Route path="*" element={<div>없는페이지임</div>} />
      </Routes>
    </div>
  );
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

export default App;
