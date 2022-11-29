import React, { useContext } from 'react';
import { useNavigate, useLoaderData } from 'react-router-dom';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { styled, createTheme } from '@mui/material/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import MemberContext from '../components/MemberContext';
import { Box } from '@mui/system';

const MemberGrid = () => {

  const [memberList] = useContext(MemberContext);
  // const { data } = useLoaderData();

  const memberNav = useNavigate();

  const handleClick = (id) => {
    memberNav(`member/${id}`);
  }

  const columns = [
    { field: 'id', headerName: 'Profile', flex: 1, headerClassName: 'headers', hide: true },
    { field: 'rank', headerName: 'Rank', flex: 1, headerClassName: 'headers' },
    { field: 'l_name', headerName: 'Last Name', flex: 1, headerClassName: 'headers' },
    { field: 'f_name', headerName: 'First Name', flex: 1, headerClassName: 'headers' },
    { field: 'unit', headerName: 'Unit', flex: 1, headerClassName: 'headers' },
    { field: 'office_symbol', headerName: 'Office Symbol', flex: 1, headerClassName: 'headers' },
    {
      field: 'Member Profile',
      flex: 1,
      headerClassName: 'headers',
      renderCell: (cellValues) => {
        return (
          <IconButton
            onClick={() => console.log(cellValues)}
          >
            <AccountCircleIcon />
          </IconButton>
        )
      }
    },
  ];

  const myTheme = createTheme({
    palette: {
      primary: {
        main: '#4f787c',
      },
      secondary: {
        main: '#544f7c',
      },
    },
  });

  const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
    [`& .${gridClasses.row}.even`]: {
      backgroundColor: theme.palette.primary.main,
    },
    [`& .${gridClasses.row}.odd`]: {
      backgroundColor: theme.palette.secondary.main,
    },
  }));

  return (
    <Box sx={{ height: '90vh', width: '50%', display: 'flex' }}>
      <StripedDataGrid
        sx={{
          boxShadow: 2,
          border: 2,
          borderColor: 'primary.light',
          '& .headers': {
            backgroundColor: 'rgba(255, 7, 0, 0.55)'
          },
        }}
        theme={myTheme}
        initialState={{
          sorting: {
            sortModel: [{ field: '__check__', sort: 'desc' }]
          },
        }}
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
        }
        columns={columns}
        rows={memberList}
        pageSize={20}
        rowsPerPageOptions={[20]}
      />
      <h3>What the fk</h3>
    </Box>
  );
};

export default MemberGrid;