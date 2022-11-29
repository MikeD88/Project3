import "./Home.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import Table from "react-bootstrap/Table";
import getData from "../rest/getData.js";


const Home = () => {

  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate(`/${e}`)
  }

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  return (
    <>
      <div className="Home1">

        <Form className="d-flex m-5">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={handleChange}
            value={searchInput}
          />
          <Dropdown as={ButtonGroup}>
            <Button variant="secondary">Filter</Button>
            <Dropdown.Toggle
              split
              variant="secondary"
              id="dropdown-split-basic"
            />
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Rank</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Last Name</Dropdown.Item>
              <Dropdown.Item href="#/action-3">First Name</Dropdown.Item>
              <Dropdown.Item href="#/action-4">Unit</Dropdown.Item>
              <Dropdown.Item href="#/action-4">Office Symbol</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Form>
        {/* <Table variant="dark" size="lg" striped bordered hover>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Last Name</th>
              <th>First Name</th>
              <th>Unit</th>
              <th>Office Symbol</th>
            </tr>
          </thead>
          <tbody>
            {memberData?.filter((member) => {
              if (searchInput == "") {
                return member
              } else if (member.l_name.toLowerCase().includes(searchInput.toLowerCase())) {
                return member
              }
            }).map((result) => {
              return (
                <tr onClick={() => handleClick(result.id)} key={result.id} className='member-row'>
                  <td>{result.rank}</td>
                  <td>{result.l_name}</td>
                  <td>{result.f_name}</td>
                  <td>{result.unit}</td>
                  <td>{result.office_symbol}</td>
                </tr>
              )
            })}
          </tbody>
        </Table> */}
      </div>
    </>
  );
};


export default Home;
