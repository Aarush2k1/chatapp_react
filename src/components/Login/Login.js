import React, { useContext } from "react";
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

const Login = () => {
  const classes = useStyles();
  const inputRef = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    firebaseConfig
      .auth()
      .signInWithEmailAndPassword(email.value, password.value)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.code);
        if (error.code === "auth/wrong-password") {
          alert("Wrong Password");
        } else if (error.code === "auth/invalid-email") {
          alert("Invalid Email");
        }
      });
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
              inputRef={inputRef}
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
