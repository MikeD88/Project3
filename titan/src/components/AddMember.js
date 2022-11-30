import React, { useState } from "react";
import "./AddMember.css";
import FormGrid from "./FormGrid";


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
    // e.preventDefault();
    try {
      const body = {
        rank: e.target[0].value,
        l_name: e.target[1].value,
        f_name: e.target[2].value,
        email_addr: e.target[3].value,
        unit: e.target[4].value,
        office_symbol: e.target[5].value,
        job_code: e.target[6].value,
      }
      console.log("body", body)
      let res = await fetch("http://localhost:8081/members", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          rank: e.target[0].value,
          l_name: e.target[1].value,
          f_name: e.target[2].value,
          email_addr: e.target[3].value,
          unit: e.target[4].value,
          office_symbol: e.target[5].value,
          job_code: e.target[6].value,
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
    <>
      <FormGrid onSubmit={handleSubmit} />
      <div className="message">{message ? <p>{message}</p> : null}</div>
    </>
  );
}

export default AddMember;