import { Navbar, Nav } from "react-bootstrap";

const MyNav = () => (
  <Navbar variant="dark" expand="lg" className="px-4">
    <Navbar.Brand href="#">📙EPIBooks📙</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#">Home</Nav.Link>
        <Nav.Link href="#">About</Nav.Link>
        <Nav.Link href="#">Browse</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default MyNav;
