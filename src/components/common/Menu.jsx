import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../assets/coffee_Logo.png";
import {NavLink, Link} from "react-router-dom"

const Menu = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Logo de RollingCoffee"
            className="img-fluid"
            width={150}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto  ml-auto">
            <NavLink className="nav-link" to={"/"}>Inicio</NavLink>
            <NavLink className="nav-link" to={"/Administrador"}>Administrador</NavLink>
            <NavLink className="nav-link" to={"*"}>Registro</NavLink>
            <NavLink className="nav-link" to={"/Login"}>Login</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
