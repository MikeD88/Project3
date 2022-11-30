import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { styled, createTheme } from '@mui/material/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import MemberContext from './MemberContext';
import { Box } from '@mui/system';

const MemberGrid = ({ query }) => {

  const [memberList] = useContext(MemberContext);
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

  const myTheme = createTheme({
    palette: {
      primary: {
        main: '#9196a3',
      },
      secondary: {
        main: '#555a66',
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
    <Box sx={{ height: '75vh', width: '90%', display: 'flex', mt: 10, pl: '10%', bgcolor: 'primary' }}>
      <StripedDataGrid
        sx={{
          boxShadow: 2,
          border: 2,
          borderColor: 'primary.light',
          '& .headers': {
            backgroundColor: '#555a66'
          },
        }}
        theme={myTheme}
        initialState={{
          sorting: {
            sortModel: [{ field: '__check__', sort: 'desc' }]
          },
          pagination: {
            pageSize: 25,
          },
        }}
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
        }
        columns={columns}
        rows={memberList}
        pageSize={25}
        rowsPerPageOptions={[5, 10, 25, 50, 100]}
      />
    </Box>
  );
};

export default MemberGrid;