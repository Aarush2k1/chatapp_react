import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import {
  Button,
  Grid,
  Typography,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import InputOutlined from "@material-ui/icons/Input";
import useStyles from "./styles";
import firebaseConfig from "../../api/firebase.js";
import { AuthContext } from "../Auth";
import { useStateValue } from "../../Provider/StateProvider";
import { actionTypes } from "../../Provider/reducer";
import provider from "../../api/firebase";

const Login = () => {
  const [{}, dispatch] = useStateValue();
  const signIn = () => {
    firebaseConfig
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  const classes = useStyles();
  const [authData, setAuthData] = useState(null);
  const setReceivedData = (data) => setAuthData(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      firebaseConfig
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then(setReceivedData);
      console.log(authData);
    } catch (error) {
      alert(error);
    }
  };
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/" />;
  }
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <InputOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              className={classes.submit}
            >
              Log In
            </Button>
            <Typography align="center" variant="h5">
              OR
            </Typography>
            {/* <Button
              onClick={signIn}
              fullWidth
              variant="outlined"
              className={classes.submit}
            >
              Sign In With Google
            </Button> */}
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="http://localhost:3000/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default Login;
