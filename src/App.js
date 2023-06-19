// import { useState } from 'react';
import './App.css';
import { Navbar, Container, Nav} from 'react-bootstrap'
import ShoesList from './Components/shoesList.js';
import { Routes, Route, Link } from 'react-router-dom'
import DetailView from './Views/DetailView';


function App() {

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/" className='nav-link'>Home</Link>
          {/* <Link to="/detail/:id" className='nav-link'>Detail</Link> */}
          <Link to="/about" className='nav-link'>About</Link>
        </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          <>
          <div className='main-bg'></div>
          <div className="container">
            <div className="row">
              <ShoesList/>
            </div>
          </div>
          </>
        }/>
        <Route path='/detail/:shoeId' element={ <DetailView/> }/>
        <Route path='/about' element={ <div>어바웃페이지임</div>}/>
      </Routes>
    </div>
  );
}

export default App;
