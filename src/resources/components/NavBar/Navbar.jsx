import "./navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

// Solo para aclarar, no uso "Link" porque necesito LinkContainer de react-router-bootstrap
// la sintaxis es basica podria ser algo como <Link to="/">Inicio</Link> o incluso
// <Link to="/" className="link-principal">Inicio</Link>

const NavbarComp = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container fluid>
        <LinkContainer to="/">
          <Navbar.Brand>TThings</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto text-center">
            <LinkContainer to="/">
              <Nav.Link>Inicio</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <LinkContainer to="/products/category/games">
                <NavDropdown.Item>Juegos</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/products/category/hardware/">
                <NavDropdown.Item>Hardware</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/products/category/accessories/">
                <NavDropdown.Item>Accesorios</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <NavDropdown title="Peliculas">
                <LinkContainer to={`/products/category/movies/fantasy`}>
                  <NavDropdown.Item>Fantasia</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to={`/products/category/movies/scify`}>
                  <NavDropdown.Item>Ciencia Ficcion</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to={`/products/category/movies/adventure`}>
                  <NavDropdown.Item>Aventuras</NavDropdown.Item>
                </LinkContainer>
                {/* ACA ME GUSTARIA HACER ALGO ASI REALMENTE, PERO NO SE QUE TAN MALA PRACTICA SEA SIN TRAER UN COMPONENTE {moviesDb.map((movie) => {
          return (
            <LinkContainer
              to={`/products/category/movies/${movie.genre}`}
              key={movie.id}
            >
              <NavDropdown.Item>{movie.genre}</NavDropdown.Item>
            </LinkContainer>
          );
        })} */}
              </NavDropdown>
              <NavDropdown title="Series">
                <LinkContainer to={`/products/category/series/fantasy`}>
                  <NavDropdown.Item>Fantasia</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to={`/products/category/series/scify`}>
                  <NavDropdown.Item>Ciencia Ficcion</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to={`/products/category/series/drama`}>
                  <NavDropdown.Item>Drama</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to={`/products/category/series/comedy`}>
                  <NavDropdown.Item>Comedia</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </NavDropdown>
            <LinkContainer to="/about">
              <Nav.Link>Nosotros</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contacto</Nav.Link>
            </LinkContainer>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
