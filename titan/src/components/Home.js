import React, { useEffect } from "react";
import Navigation from "./Navigation";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import Table from "react-bootstrap/Table";
import getData from "../rest/getData.js";

const Home = () => {
  useEffect(() => {
    const fetchSomething = async () => {
      getData();
    }
    fetchSomething();
  }, []);
  return (
    <>
      <Navigation />
      <Form className="d-flex m-5">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Dropdown as={ButtonGroup}>
          <Button variant="secondary">Search</Button>

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
      <Table variant="dark" size="lg" striped bordered hover>
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
          <tr className='member-row'>
            {/* <td className='rank'>{members.map((member, id) => {
              
            })}</td> */}
            <td className='last-name'>Smith</td>
            <td className='first-name'>John</td>
            <td className='unit'>123 TRS</td>
            <td className='office-symbol'>S3OA</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default Home;
