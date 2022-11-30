import "./AddMember.css";
import React, { useEffect, useState, useContext } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddMember = () => {

  const [rank, setRank] = useState("");
  const [l_name, setL_name] = useState("");
  const [f_name, setF_name] = useState("");
  const [email_addr, setEmail_addr] = useState("");
  const [unit, setUnit] = useState("");
  const [office_symbol, setOffice_symbol] = useState("");
  const [job_code, setJob_code] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:8081/members", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          rank: rank,
          l_name: l_name,
          f_name: f_name,
          email_addr: email_addr,
          unit: unit,
          office_symbol: office_symbol,
          job_code: job_code,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setRank("");
        setL_name("");
        setF_name("");
        setEmail_addr("");
        setUnit("");
        setOffice_symbol("");
        setJob_code("");
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-5 mt-5" controlId="formBasicRank" onChange={(e) => setRank(e.target.value)}>
        <Form.Label>Rank</Form.Label>
        <Form.Control type="rank" placeholder="Enter Rank" />
      </Form.Group>
      <Form.Group className="mb-5" controlId="formBasicLastName" onChange={(e) => setL_name(e.target.value)}>
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="l_name" placeholder="Enter Last Name" />
      </Form.Group>
      <Form.Group className="mb-5" controlId="formBasicFirstName" onChange={(e) => setF_name(e.target.value)}>
        <Form.Label>First Name</Form.Label>
        <Form.Control type="f_name" placeholder="Enter First Name" />
      </Form.Group>
      <Form.Group className="mb-5" controlId="formBasicEmail" onChange={(e) => setEmail_addr(e.target.value)}>
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="Enter Military Email" />
      </Form.Group>
      <Form.Group className="mb-5" controlId="formBasicUnit" onChange={(e) => setUnit(e.target.value)}>
        <Form.Label>Unit</Form.Label>
        <Form.Control type="unit" placeholder="Enter Unit" />
      </Form.Group>
      <Form.Group className="mb-5" controlId="formBasicOfficeSymbol" onChange={(e) => setOffice_symbol(e.target.value)}>
        <Form.Label>Office Symbol</Form.Label>
        <Form.Control type="office_symbol" placeholder="Enter Office Symbol" />
      </Form.Group>
      <Form.Group className="mb-5" controlId="formBasicJobCode" onChange={(e) => setJob_code(e.target.value)}>
        <Form.Label>Job Code</Form.Label>
        <Form.Control type="job_code" placeholder="Enter Job Code" />
      </Form.Group>
      <Button className="mb-5" variant="secondary" type="submit">
        Submit
      </Button>
      <div className="message">{message ? <p>{message}</p> : null}</div>
    </Form>
  );
}

export default AddMember;