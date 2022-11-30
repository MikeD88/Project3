import "./AddMember.css";
import React, { useEffect, useState, useContext } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const AddCert = () => {

  const [name, setName] = useState("");
  const [frequency, setFrequency] = useState("");
  const [message, setMessage] = useState("");

  let addSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:8081/trainings", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          frequency: frequency,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setName("");
        setFrequency("");
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form onSubmit={addSubmit}>
      <Form.Group className="mb-5 mt-5" controlId="formBasicName" onChange={(e) => setName(e.target.value)}>
        <Form.Label>Name</Form.Label>
        <Form.Control type="title" placeholder="Enter Certification/Training Name" />
      </Form.Group>
      <Form.Group className="mb-5" controlId="formBasicFrequency" onChange={(e) => setFrequency(e.target.value)}>
        <Form.Label>Frequency</Form.Label>
        <Form.Control type="frequency" placeholder="Enter Certification/Training Frequency (In Years)" />
      </Form.Group>
      <Button variant="secondary" type="submit">
        Submit
      </Button>
      <div className="message">{message ? <p>{message}</p> : null}</div>
    </Form>
  );
}

export default AddCert;