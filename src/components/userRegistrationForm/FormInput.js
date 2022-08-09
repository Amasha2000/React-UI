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
        <TextField  label="Outlined" variant="outlined"  className='txtCustomer' size="small" />
        </Grid>
        <Grid item xs={6} >
        <TextField  label="Outlined" variant="outlined"  className='txtCustomer' size="small" />
        </Grid>
        <Grid item xs={6} >
        <TextField  label="Outlined" variant="outlined"  className='txtCustomer' size="small" />
        </Grid>
        <Grid item xs={6} >
        <TextField  label="Outlined" variant="outlined"  className='txtCustomer' size="small" />
        </Grid>
        <Grid item xs={6} >
        <TextField  label="Outlined" variant="outlined"  className='txtCustomer' size="small" />
        </Grid>
        <Grid item xs={6} >
        <TextField  label="Outlined" variant="outlined"  className='txtCustomer' size="small" />
        </Grid>
        <Grid item xs={6} >
        <TextField  label="Outlined" variant="outlined"  className='txtCustomer' size="small" />
        </Grid>
        <Grid item xs={6} >
        <TextField  label="Outlined" variant="outlined"  className='txtCustomer' size="small" />
        </Grid>
        <Grid item xs={6} >
        <TextField  label="Outlined" variant="outlined"  className='txtCustomer' size="small" />
        </Grid>
        <Grid item xs={6} >
        <TextField  label="Outlined" variant="outlined"  className='txtCustomer' size="small" />
        </Grid>
        <Grid item xs={6} >
        <TextField  label="Outlined" variant="outlined"  className='txtCustomer' size="small" />
        </Grid>
        <Grid item xs={6} >
        <TextField  label="Outlined" variant="outlined"  className='txtCustomer' size="small" />
        </Grid>
      </Grid>
      <Grid container className='btnArea'  direction="row" justifyContent="flex-end">
      <Grid item xs={1} >  
      <Button variant="contained">Default</Button>
      </Grid>
      <Grid item xs={1} >
      <Button variant="contained" color="primary"> Primary</Button>
      </Grid>
      </Grid>
   </div>
</div>
  )
}

export default FormInput