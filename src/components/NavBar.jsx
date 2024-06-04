import { Navbar, Nav } from 'react-bootstrap';
import CartWidget from './CartWidget.jsx';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">Mi Tienda</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#category1">Categoría 1</Nav.Link>
          <Nav.Link href="#category2">Categoría 2</Nav.Link>
          <Nav.Link href="#category3">Categoría 3</Nav.Link>
        </Nav>
        <CartWidget />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;