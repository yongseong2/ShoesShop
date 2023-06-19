import './App.css';
import { Navbar, Container, Nav} from 'react-bootstrap'

// https://codingapple1.github.io/shop/shoes1.jpg
// https://codingapple1.github.io/shop/shoes2.jpg
// https://codingapple1.github.io/shop/shoes3.jpg

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      <div className='main-bg'></div>
    </div>
  );
}

export default App;
