import React, { useState } from "react";
import FormGridCert from "./FormGridCert";

const AddCert = () => {

  const [name, setName] = useState("");
  const [frequency, setFrequency] = useState("");
  const [message, setMessage] = useState("");

  let addSubmit = async (e) => {
    // e.preventDefault();
    try {
      const body = {
        name: e.target[0].value,
        frequency: e.target[1].value,
      }
      console.log("body", body)
      let res = await fetch("http://localhost:8081/trainings", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: e.target[0].value,
          frequency: e.target[1].value,
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
    <>
      <FormGridCert onSubmit={addSubmit} />
      <div className="message">{message ? <p>{message}</p> : null}</div>
    </>
  );
}

export default AddCert;