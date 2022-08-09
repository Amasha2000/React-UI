import React from 'react';
import { Grid, Button, Typography } from '@material-ui/core';
import DashboardCard from './DashboardCard.js';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div>
      <div className="panel">
        <Grid
          container
          spacing={3}
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <Grid item xs={4}>
            <Button variant="contained">Dashboard</Button>
          </Grid>
          <Grid item xs={1}>
            <Button variant="contained">Product</Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained">Cart</Button>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h3" style={{ fontSize: '25px' }}>
              Name
            </Typography>
          </Grid>
        </Grid>
      </div>
      <Grid className="cardArea" container spacing={3}>
        <Grid item xs={5} align="center">
          <DashboardCard title="Products" count="60" />
        </Grid>
        <Grid item xs={5} align="center">
          <DashboardCard title="Cart" count="12" />
        </Grid>
        <Grid item xs={5} align="center">
          <DashboardCard title="Users" count="43" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
