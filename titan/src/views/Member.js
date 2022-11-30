import React, { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import MemberContext from "../components/MemberContext";
import MemberGrid from "../components/MemberGrid";
import MuiTable from "../components/MuiTable";
import IconButton from '@mui/material/IconButton';
import "./Landing.css";

const Member = () => {
  const nav = useNavigate();
  const { id } = useParams();
  const [memberInfo, setMemberInfo] = useState({});
  const [memberTraining, setMemberTraining] = useState({});
  const [message, setMessage] = useState("");

  useEffect(() => {
    const getData = async (id) => {
      const options = new Headers({
        'Content-type': 'application/json',
      });
      const res = await fetch(`http://localhost:8081/members/${id}`, options);
      const data = await res.json();
      console.log(data);
      setMemberInfo(data[0]);
    }
    getData(id)
      .catch(console.error);
  }, [id]);

  useEffect(() => {

    const getMemberTraining = async (id) => {
      const options = new Headers({
        'Content-type': 'application/json',
      });
      const res = await fetch(`http://localhost:8081/member-records/${id}`, options);
      const data = await res.json();
      console.log(data);
      data?.forEach((element, index) => {
        element['id'] = index;
      });
      setMemberTraining(data);
    }

    getMemberTraining(id)
      .catch(console.error);
  }, [id, memberInfo]);

  const handleDeleteClick = async () => {
    // id.preventDefault();
    let res = await fetch(`http://localhost:8081/members/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      },
    });
    setMemberInfo({});
    nav('/home');
    if (res.status === 200) {
      setMessage("Member Deleted");
    } else {
      setMessage("Some error occured");
    }

  }

  const columns = [
    { field: 'l_name', headerName: 'Last Name', flex: .5, headerClassName: 'headers', hide: true },
    { field: 'name', headerName: 'Training', flex: .5, headerClassName: 'headers', },
    { field: 'completion_date', headerName: 'Completion Date', flex: .5, headerClassName: 'headers', },
    { field: 'id', headerName: 'ID', flex: .5, headerClassName: 'headers', hide: true },
  ]


  const actions = [
    { icon: <DeleteForeverIcon />, name: "Delete" },
  ];
  return (
    <>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: 0, right: 0 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => {
              handleDeleteClick();
            }}
          />
        ))}
      </SpeedDial>
      <Box sx={{ m: 10 }}>
        <span id="member-name">{`${memberInfo.f_name?.toUpperCase()} ${memberInfo.l_name?.toUpperCase()}`}</span>
        <MuiTable data={memberInfo} />
        <MemberGrid data={memberTraining} columns={columns} autoHeight={true} />

        {/* <Box sx={{ m: 10 }}>
          <button type="deleteMember" onClick={() => handleDeleteClick(memberInfo.id)}>Delete Member</button>
        </Box> */}
      </Box>
    </>
  )
}

export default Member;