import Navbar from "react-bootstrap/Navbar";
import "./App.css";
import Routes from "./Routes.tsx";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App container py-3">
      <Navbar collapseOnSelect bg="light" expand="md" className="mb-3 px-3">
        <Nav>
          <Nav.Link as={NavLink} to="/">
            <Navbar.Brand className="fw-bold text-muted">Scratch</Navbar.Brand>
          </Nav.Link>
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav activeKey={window.location.pathname}>
            <Nav.Link as={NavLink} to="/signup">
              Signup
            </Nav.Link>
            <Nav.Link as={NavLink} to="/login">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
  );
}

export default App;
