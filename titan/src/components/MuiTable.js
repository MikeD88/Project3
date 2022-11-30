import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const createData = ({ rank, l_name, f_name, email_addr, job_code, unit, office_symbol }) => {
  return { rank, l_name, f_name, email_addr, job_code, unit, office_symbol };
}

const MuiTable = ({ data }) => {
  const rows = [
    createData(data)
  ]
  return (
    <Box sx={{ width: '90%', display: 'flex', pl: '10%' }}>
      <Paper sx={{}}>
        <TableContainer sx={{ width: '100%', backgroundColor: '#555a66' }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Rank</TableCell>
                <TableCell align="left">Last Name</TableCell>
                <TableCell align="left">First Name</TableCell>
                <TableCell align="left">Email Address</TableCell>
                <TableCell align="left">Unit</TableCell>
                <TableCell align="left">Office Symbol</TableCell>
                <TableCell align="left">Job Code</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                >
                  <TableCell align="left">{row.rank}</TableCell>
                  <TableCell align="left">{row.f_name}</TableCell>
                  <TableCell align="left">{row.l_name}</TableCell>
                  <TableCell align="left">{row.email_addr}</TableCell>
                  <TableCell align="left">{row.unit}</TableCell>
                  <TableCell align="left">{row.office_symbol}</TableCell>
                  <TableCell align="left">{row.job_code}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}

export default MuiTable;
