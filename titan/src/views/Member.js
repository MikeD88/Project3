import React, { useEffect, useState, useContext } from "react";
import Table from "react-bootstrap/Table";
import { useParams } from "react-router-dom";
import MemberContext from "../components/MemberContext";
import { Box } from '@mui/system';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { styled, createTheme } from '@mui/material/styles';

const Member = () => {
  let { id } = useParams();
  const [memberList] = useContext(MemberContext);
  const value = Number.parseInt(id);
  const singleMember = memberList[value - 1];
  console.log('initial render', memberList);
  console.log('single: ', singleMember);

  useEffect(() => {
    console.log('useEffect: ', memberList)
  }, [memberList])

  const columns = [
    { field: 'training', headerName: 'Training', flex: .5, headerClassName: 'headers', },
    { field: 'completetion_date', headerName: 'Completion Date', flex: .5, headerClassName: 'headers', },
    { field: 'expiration_date', headerName: 'Expiration Date', flex: .5, headerClassName: 'headers', },
  ]

  // const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
  //   [`& .${gridClasses.row}.even`]: {
  //     backgroundColor: theme.palette.primary.main,
  //   },
  //   [`& .${gridClasses.row}.odd`]: {
  //     backgroundColor: theme.palette.secondary.main,
  //   },
  // }));
  // const myTheme = createTheme({
  //   palette: {
  //     primary: {
  //       main: '#9196a3',
  //     },
  //     secondary: {
  //       main: '#555a66',
  //     },
  //   },
  // });

  return (
    <>
      {/* <div className="Home1">
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
            <tr>
              {rows.foreach((element) => `<td><span>${element}</span></td>`)}
              <td><span>{rank}</span></td>
              <td><span>{l_name}</span></td>
              <td><span>{f_name}</span></td>
              <td><span>{email_addr}</span></td>
              <td><span>{office_symbol}</span></td>
              <td><span>{job_code}</span></td>
            </tr>
          </thead>
        </Table>
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

            pageSize={25}
            rowsPerPageOptions={[5, 10, 25, 50, 100]}
          />
        </Box>
      </div> */}
    </>
  )
}

export default Member;