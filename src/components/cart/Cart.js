import React, { useState } from 'react';
import '../userRegistrationForm/FormInput.css';
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  Button,
  TextField,
  Typography,
} from '@material-ui/core';

//import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const Cart = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => setValue(e.target.value);
  console.log(value);

  return (
    <div>
      <Typography
        className="title"
        style={{ fontWeight: 'bold', fontSize: '30px' }}
      >
        Cart Manage
      </Typography>
      <div className="form" style={{ top: '100px' }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormControl className="txtCustomer" size="small">
              <InputLabel id="demo-select-small">User Name</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={value}
                label="Category"
                onChange={handleChange}
              >
                <MenuItem value={'Amal'}>Amal</MenuItem>
                <MenuItem value={'Kamal'}>Kamal</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          {/* <Grid item xs={6}>
          <LocalizationProvider>
          <DesktopDatePicker
          label="Date desktop"
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider>
        </Grid> */}
          <Grid item xs={6}>
            <FormControl className="txtCustomer" size="small">
              <InputLabel id="demo-select-small">Product Title</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={value}
                label="Category"
                onChange={handleChange}
              >
                <MenuItem value={'Dhal'}>Dhal</MenuItem>
                <MenuItem value={'Rice'}>Rice</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Quantity"
              variant="outlined"
              className="txtCustomer"
              size="small"
            />
          </Grid>
        </Grid>
        <Grid
          container
          className="btnArea"
          style={{ top: '150px' }}
          direction="row"
          justifyContent="flex-end"
        >
          <Grid item xs={1}>
            <Button variant="contained">Clear</Button>
          </Grid>
          <Grid item xs={1}>
            <Button variant="contained" color="primary">
              Save
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Cart;
