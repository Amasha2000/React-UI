import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

const DashboardCard = (props) => {
  return (
    <div>
      <Card className="card" style={{ backgroundColor: 'gray' }}>
        <CardContent>
          <Typography
            className="topic"
            style={{ fontSize: '30px', fontWeight: 'bold' }}
            variant="h5"
            component="h2"
          >
            {props.title}
          </Typography>
          <Typography
            className="count"
            style={{ fontSize: '40px', fontWeight: '300' }}
            variant="h5"
            component="h2"
          >
            {props.count}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardCard;
