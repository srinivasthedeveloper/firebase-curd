import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import AddVoter from "./screens/Home/AddVoter";
import AllVoter from "./screens/Home/AllVoters";
import CheckedFilter from "./screens/Home/Filter";

import {Navbar,Nav,Container} from 'react-bootstrap'

function App() {
  return (
    <Router>
     <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand as={Link} to="/" >My Voters</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/" >Home</Nav.Link>
      <Nav.Link as={Link} to="/add" >Add</Nav.Link>
      <Nav.Link as={Link} to="/filter" >Filter</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        <Routes>
          <Route path="/" element={<AllVoter />} />
          <Route path="/add" element={<AddVoter />} />
          <Route path="/filter" element={<CheckedFilter />} />
        </Routes>
    </Router>
  );
}

export default App;
