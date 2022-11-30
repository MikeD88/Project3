import React, { useContext, useEffect, useState, useNavigate } from "react";
// import { useLocation, useNavigate } from 'react-router-dom';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import IconButton from '@mui/material/IconButton';
import MemberGrid from "../components/MemberGrid";
import MemberContext from '../components/MemberContext';

const AllTraining = () => {
  const [memberList] = useContext(MemberContext);
  const [TrainingData, setTrainingData] = useState(memberList);

  useEffect(() => {

    const getTrainingData = async () => {
      const options = new Headers({
        'Content-type': 'application/json',
      });
      const res = await fetch(`http://localhost:8081/trainings`, options);
      const data = await res.json();
      console.log(data);
      data?.forEach((element, index) => {
        element['id'] = index;
      });
      setTrainingData(data);
    }

    getTrainingData()
      .catch(console.error);
  }, []);

  // const memberNav = useNavigate();
  // const handleClick = (id) => {
  //   memberNav(`members/${id}`);
  // }

  const columns = [
    { field: 'id', headerName: 'Training ID#', headerClassName: 'headers', hide: true },
    { field: 'name', headerName: 'Training Name', flex: 1, headerClassName: 'headers', },
    { field: 'frequency', headerName: 'Training Frequency', flex: .5, headerClassName: 'headers', },
    // {
    //   field: 'edit',
    //   flex: .5,
    //   headerClassName: 'headers',
    //   renderCell: (cellValues) => {
    //     return (
    //       <IconButton
    //         onClick={() => handleClick(cellValues.id)}
    //       >
    //         <AccountCircleIcon />
    //       </IconButton>
    //     )
    //   }
    // }
  ];

  return (
    <div style={{ height: '85vh', width: '75%', display: 'flex' }}>
      <MemberGrid columns={columns} data={TrainingData} />
    </div>
  );
};

export default AllTraining;