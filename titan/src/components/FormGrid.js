import React from 'react';
import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send'


const FormGrid = (props) => {


  const Backdrop = styled(Paper)(({ theme }) => ({
    backgroundColor: '#1f2024',
    padding: theme.spacing(3),
    textAlign: 'center',
    color: '#1f2024',
  }));

  const WhiteLabels = styled(InputLabel)(({ theme }) => ({
    color: '#fff',
  }));

  const WhiteInput = styled(FilledInput)(({ theme }) => ({
    color: '#fff',
    backgroundColor: '#5a5968',
  }));

  return (
    <Box sx={{ flexGrow: 1, color: '#fff' }}>
      <form onSubmit={props.onSubmit}>
        <Backdrop sx={{ opacity: .8 }}>
          <Grid container spacing={2}>
            <Grid xs={3}>
              <FormControl fullWidth sx={{}} variant="filled">
                <WhiteLabels>Rank</WhiteLabels>
                <WhiteInput
                  id="rank"
                />
              </FormControl>
            </Grid>
            <Grid xs={3}>
              <FormControl fullWidth sx={{}} variant="filled">
                <WhiteLabels>Last Name</WhiteLabels>
                <WhiteInput
                  id="last-name"
                  inputProps={{
                    'aria-label': 'last-name',
                  }}
                />
              </FormControl>
            </Grid>
            <Grid xs={3}>
              <FormControl fullWidth sx={{}} variant="filled">
                <WhiteLabels>First Name</WhiteLabels>
                <WhiteInput
                  id="first-name"
                  inputProps={{
                    'aria-label': 'first-name',
                  }}
                />
              </FormControl>
            </Grid>
            <Grid xs={3}>
              <FormControl fullWidth sx={{}} variant="filled">
                <WhiteLabels>Job Code</WhiteLabels>
                <WhiteInput
                  id="job-code"
                />
              </FormControl>
            </Grid>
            <Grid xs={12}>
              <FormControl fullWidth sx={{}} variant="filled">
                <WhiteLabels>Email Address</WhiteLabels>
                <WhiteInput
                  id="email"
                />
              </FormControl>
            </Grid>
            <Grid xs={8}>
              <FormControl fullWidth sx={{}} variant="filled">
                <WhiteLabels sx={{ color: '#fff' }} >Unit</WhiteLabels>
                <WhiteInput
                  id="unit"
                />
              </FormControl>
            </Grid>
            <Grid xs={4}>
              <FormControl fullWidth sx={{}} variant="filled">
                <WhiteLabels>Office Symbol</WhiteLabels>
                <WhiteInput
                  id="office-symbol"
                />
              </FormControl>
            </Grid>
            <Grid xs={11} />
            <Grid xs={1}>
              <Button sx={{}} variant="contained" endIcon={<SendIcon />}>
                Send
              </Button>
            </Grid>
          </Grid>
        </Backdrop>
      </form>
    </Box >
  );
}

export default FormGrid;