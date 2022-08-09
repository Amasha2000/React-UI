import React, { useState } from 'react';
import '../userRegistrationForm/FormInput.css';
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  TextField,
  Typography,
  Button,
  TextareaAutosize,
} from '@material-ui/core';
import './Product.css';

const Product = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => setValue(e.target.value);
  console.log(value);

  return (
    <div>
      <Typography
        className="title"
        style={{ fontWeight: 'bold', fontSize: '30px' }}
      >
        Product Manage
      </Typography>
      <div className="form" style={{ top: '100px' }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="Title"
              variant="outlined"
              className="txtCustomer"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Price"
              variant="outlined"
              className="txtCustomer"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl className="txtCustomer" size="small">
              <InputLabel id="demo-select-small">Category</InputLabel>
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
            <TextareaAutosize
              aria-label="empty textarea"
              lassName="txtCustomer"
              placeholder="Description"
              style={{ height: 100, width: 630 }}
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

export default Product;
