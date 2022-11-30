import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import MemberGrid from "../components/MemberGrid";
import MemberContext from '../components/MemberContext';

const Home = () => {
  const [memberList] = useContext(MemberContext);
  const [tableData, setTableData] = useState(memberList);
  const { search } = useLocation('');
  const [queryType, queryTerm] = (search.split('='));

  useEffect(() => {
    if (memberList) {
      setTableData(
        memberList.filter((member) => member.l_name?.toLowerCase().includes(queryTerm))
      );
    }
  }, [memberList, queryTerm, queryType]);

  const memberNav = useNavigate();
  const handleClick = (id) => {
    memberNav(`members/${id}`);
  }

  const columns = [
    { field: 'id', headerName: 'Profile', headerClassName: 'headers', hide: true },
    { field: 'rank', headerName: 'Rank', flex: .5, headerClassName: 'headers', },
    { field: 'l_name', headerName: 'Last Name', flex: 1, headerClassName: 'headers', },
    { field: 'f_name', headerName: 'First Name', flex: 1, headerClassName: 'headers', },
    { field: 'unit', headerName: 'Unit', flex: 1, headerClassName: 'headers', },
    { field: 'office_symbol', headerName: 'Office Symbol', flex: 1, headerClassName: 'headers', },
    {
      field: 'Profile',
      flex: .5,
      headerClassName: 'headers',
      renderCell: (cellValues) => {
        return (
          <IconButton
            onClick={() => handleClick(cellValues.id)}
          >
            <AccountCircleIcon />
          </IconButton>
        )
      }
    },
  ];

  return (
    <div style={{ height: '85vh', width: '75%', display: 'flex' }}>
      <MemberGrid columns={columns} data={memberList} />
    </div>
  );
};

export default Home;
