import './Login.css';

import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const Login = () => {
  return (
    <Grid>
      <Paper
        className="paper"
        elevation={5}
        style={{ backgroundColor: '#c5b5b5' }}
      >
        <Grid align="center" style={{ color: 'white' }}>
          <Avatar style={{ backgroundColor: 'rgb(72 72 75)' }}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>LogIn</h2>
        </Grid>
        <TextField
          label="User Name"
          type="text"
          placeholder="Enter User Name"
          fullWidth
          // required
          variant="outlined"
          className="txtfield"
        />
        <TextField
          label="Password"
          type="password"
          placeholder="Enter Password"
          fullWidth
          // required
          variant="outlined"
          className="txtfield"
          style={{ position: 'relative', top: '20px' }}
        />
        <Grid align="center">
          <Button id="btn" variant="contained" color="primary" type="submit">
            LogIn
          </Button>
        </Grid>
        <Typography className="text">
          Create new user account?
          <Link href="#"> Click Here </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
