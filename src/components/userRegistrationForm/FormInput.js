import React from 'react';
import './FormInput.css';
import { Grid,TextField,Typography,Button } from '@material-ui/core';

const FormInput = (props) => {
  return (
    <div className='formInput'>
      <Typography className='title' style={{fontWeight: 'bold',
      fontSize: '30px'}}>User Registration</Typography>
      <div className='form'>
      <Grid container spacing={2}>
        <Grid item xs={6} >
        <TextField  label="First Name" variant="outlined"  className='txtCustomer' size="small" />
        </Grid>
        <Grid item xs={6} >
        <TextField  label="Last Name" variant="outlined"  className='txtCustomer' size="small" />
        </Grid>
        <Grid item xs={6} >
        <TextField  label="Email" variant="outlined"  className='txtCustomer' size="small" />
        </Grid>
        <Grid item xs={6} >
        <TextField  label="User Name" variant="outlined"  className='txtCustomer' size="small" />
        </Grid>
        <Grid item xs={6} >
        <TextField  label="Password" variant="outlined"  className='txtCustomer' size="small" />
        </Grid>
        <Grid item xs={6} >
        <TextField  label="City" variant="outlined"  className='txtCustomer' size="small" />
        </Grid>
        <Grid item xs={6} >
        <TextField  label="Street" variant="outlined"  className='txtCustomer' size="small" />
        </Grid>
        <Grid item xs={6} >
        <TextField  label="Street No" variant="outlined"  className='txtCustomer' size="small" />
        </Grid>
        <Grid item xs={6} >
        <TextField  label="Zip Code" variant="outlined"  className='txtCustomer' size="small" />
        </Grid>
        <Grid item xs={6} >
        <TextField  label="Lat Value" variant="outlined"  className='txtCustomer' size="small" />
        </Grid>
        <Grid item xs={6} >
        <TextField  label="Long Value" variant="outlined"  className='txtCustomer' size="small" />
        </Grid>
        <Grid item xs={6} >
        <TextField  label="Mobile No" variant="outlined"  className='txtCustomer' size="small" />
        </Grid>
      </Grid>
      <Grid container className='btnArea'  direction="row" justifyContent="flex-end">
      <Grid item xs={1} >  
      <Button variant="contained">Clear</Button>
      </Grid>
      <Grid item xs={1} >
      <Button variant="contained" color="primary">Save</Button>
      </Grid>
      </Grid>
   </div>
</div>
  )
}

export default FormInput