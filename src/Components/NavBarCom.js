import { Navbar, Container, Nav, NavLink } from 'react-bootstrap'
import { GiShoppingCart } from 'react-icons/gi'
import { Link, useNavigate } from 'react-router-dom'
import RecentShoe from './RecentShoe'
import { useState } from 'react'
// import axios from 'axios'
import { useQuery } from 'react-query'
import axios from 'axios'


function NavBarCom() {
  const navigate = useNavigate()
  const [showRecent, setShowRecent] = useState(false)

  // const result = axios.get('https://codingapple1.github.io/userdata.json')
  // .then((res)=>{
  //   return res.data
  // })

  // 실시간 데이터 공유 가능
  const result = useQuery('작명', ()=>{
    return axios.get('https://codingapple1.github.io/userdata.json')
    .then((res)=>{
      return res.data
    })
  }, { staleTime : 2000 }) // staleTime : 타이머 기능

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" onClick={() => { navigate('/') }}>Home</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Link to="/detail/:id" className='nav-link'>Detail</Link> */}
            {/* <Link to="/about" className='nav-link'>About</Link> */}
            <NavLink
              onClick={() =>
                setShowRecent(!showRecent)}
            >최근 본 상품</NavLink>
          </Nav>
          <Nav>
            <Link to="/cart" className='nav-link'>
              장바구니 <GiShoppingCart size="25" />
            </Link>
            <NavLink>{result.isLoading? <>로딩중 </>: result.data.name}</NavLink>
          </Nav>
        </Container>
      </Navbar>
      {
        showRecent === true ?
          <RecentShoe /> :
          null
      }
    </>
  )
}

export default NavBarCom