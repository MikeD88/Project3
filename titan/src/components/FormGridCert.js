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

const FormGridCert = (props) => {


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
      <Backdrop sx={{ opacity: .8 }}>
        <form onSubmit={props.onSubmit}>
          <Grid container spacing={2}>
            <Grid xs={11}>
              <FormControl fullWidth sx={{}} variant="filled">
                <WhiteLabels>Name</WhiteLabels>
                <WhiteInput
                  id="name"
                />
              </FormControl>
            </Grid>
            <Grid xs={11}>
              <FormControl fullWidth sx={{}} variant="filled">
                <WhiteLabels>Frequency</WhiteLabels>
                <WhiteInput
                  id="frequency"
                  inputProps={{
                    'aria-label': 'frequency',
                  }}
                />
              </FormControl>
            </Grid>
            <Grid xs={9} />
            <Grid xs={1}>
              <Button sx={{}} variant="contained" endIcon={<SendIcon />}>
                Send
              </Button>
            </Grid>
          </Grid>
        </form>
      </Backdrop>
    </Box >
  );
}

export default FormGridCert;