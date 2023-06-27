import { Navbar, Container, Nav } from 'react-bootstrap'
import { GiShoppingCart } from 'react-icons/gi'
import { Link, useNavigate } from 'react-router-dom'
import RecentShoe from './RecentShoe'
// import { useState } from 'react'


function NavBarCom() {
  const navigate = useNavigate()
  // const showRecent = useState(false)
  
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" onClick={() => { navigate('/') }}>Home</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Link to="/detail/:id" className='nav-link'>Detail</Link> */}
            <Link to="/about" className='nav-link'>About</Link>
          {/* <NavLink>최근 본 상품</NavLink> */}
          </Nav>
          <Nav>
            <Link to="/cart" className='nav-link'>
              장바구니 <GiShoppingCart size="25" />
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <RecentShoe/>
    </>
  )
}

export default NavBarCom