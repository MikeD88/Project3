// import React, { useContext } from "react";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import MemberContext from './MemberContext.js';
// import { createSearchParams, useNavigate } from "react-router-dom";

// function Navigation() {

//   const [membersList, searchTerm, setSearchTerm] = useContext(MemberContext)
//   const nav = useNavigate();
//   const params = { search: 'name' }

//   const handleSubmit = (e) => {
//     params.search = e.target[0].value
//     nav({
//       pathname: '/home',
//       search: `?${createSearchParams(params)}`,
//     })
//     e.preventDefault();
//   }

//   return (
//     <>
//       <Container>
//         <Navbar bg="dark" variant="dark" expand="lg">
//           <Navbar.Brand href="/home">
//             <img
//               src="https://user-images.githubusercontent.com/110724575/203436958-6b2292fb-89cd-4736-9c69-bc8e5c936922.png"
//               width="90"
//               height="90"
//               className="d-inline-block align-center"
//               alt="TITAN logo"
//             />{" "}
//             <img
//               src="https://user-images.githubusercontent.com/110724575/203625397-fa877591-e85e-41ec-9b5b-814870d8a982.png"
//               width="140"
//               height="60"
//               className="d-inline-block align-center"
//               alt="TITAN"
//             />
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//               <Nav.Link href="/add_member">Add Member</Nav.Link>
//               <Nav.Link href="/add_certification">Add Certification/Training</Nav.Link>
//             </Nav>
//             <Form className="d-flex" onSubmit={handleSubmit}>
//               <Form.Group className="d-flex" controlId="formSearch">
//                 <Form.Label>Search</Form.Label>
//                 <Form.Control type="search" placeholder="Search" />
//               </Form.Group>
//               <Button variant="outline-secondary" type="submit">Search</Button>
//             </Form>
//           </Navbar.Collapse>
//         </Navbar>
//       </Container>
//     </>
//   );
// }

// export default Navigation;
