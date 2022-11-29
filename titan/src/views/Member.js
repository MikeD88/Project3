import "../components/Home.css";
import React, { useEffect, useState, useContext } from "react";
// import { useParams } from 'react-router-dom';
import Navigation from "../components/Navigation";
import Table from "react-bootstrap/Table";
import getMemberRecordData from "../rest/getMemberData.js"
import { useParams } from "react-router-dom";
import MemberContext from "../components/MemberContext";
// import memberList from "../components/Home.js";

const Member = () => {
  const [memberList] = useContext(MemberContext);
  const [trainingData, setTrainingData] = useState([]);
  const { id } = useParams();
  console.log(memberList);

  // useEffect(() => {
  //   getData()
  //     .then(response => setMemberData(response));
  // }, [])

  useEffect(() => {
    getMemberRecordData(id)
      .then(response => {
        console.log(response);
        setTrainingData(response)
      });

  }, [id])

  return (
    <>


      <h1>This is the member page</h1>
      <div className="Home1">
        <Table variant="dark" size="lg" striped bordered hover>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Last Name</th>
              <th>First Name</th>
              <th>Email</th>
              <th>Office Symbol</th>
              <th>Job Code</th>
            </tr>
          </thead>
          <tbody>


          </tbody>
        </Table>
        <Table variant="dark" size="lg" striped bordered hover>
          <thead>
            <tr>
              <th>Training</th>
              <th>Completion Data</th>
              <th>Experation Date</th>
            </tr>
          </thead>
          <tbody>
            {trainingData?.forEach((i) => {
              if (trainingData[i].member === id) {
                return (
                  <tr className='member-row'>
                    <td>{trainingData[i].training}</td>
                    <td>{trainingData[i].completion_date}</td>
                  </tr>
                )
              }
            })}
          </tbody>
        </Table>
      </div>
    </>
  )
};

export default Member;