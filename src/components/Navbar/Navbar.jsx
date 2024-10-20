import "./Navbar.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Navbar_() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={() => {navigate("/contacts")}} style={{fontWeight: 700, fontSize: "20px", cursor: "pointer"}}>Radeflex</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {navigate("/")}}>Home</Nav.Link>
            <Nav.Link onClick={() => {navigate("/projects")}}>Projects</Nav.Link>
            <Nav.Link onClick={() => {navigate("/contacts")}}>Contacts</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
