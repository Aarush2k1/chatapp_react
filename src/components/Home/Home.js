import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import useStyles from "./styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { WhatsApp } from "@material-ui/icons";
import { AuthContext } from "../Auth";
import { Redirect } from "react-router";

export default function Album() {
  const classes = useStyles();
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      {currentUser ? (
        <Redirect to="/dashboard" />
      ) : (
        <React.Fragment>
          <CssBaseline />
          <AppBar position="relative" className={classes.navColor}>
            <Toolbar>
              <WhatsApp className={classes.icon} />
              <Typography variant="h6" color="inherit" noWrap>
                Chat Application
              </Typography>
            </Toolbar>
          </AppBar>
          <main>
            {/* Hero unit */}
            <div className={classes.heroContent}>
              <Container maxWidth="sm">
                <Typography
                  component="h1"
                  variant="h2"
                  align="center"
                  color="textPrimary"
                  gutterBottom
                >
                  Chat Application
                </Typography>
                <Typography
                  variant="h5"
                  align="center"
                  color="textSecondary"
                  paragraph
                >
                  Something short and leading about the collection below—its
                  contents, the creator, etc. Make it short and sweet, but not
                  too short so folks don&apos;t simply skip over it entirely.
                </Typography>
                <div className={classes.heroButtons}>
                  <Grid container spacing={2} justify="center">
                    <Grid item>
                      <Button
                        variant="contained"
                        color="primary"
                        href="/signup"
                      >
                        Signup
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        variant="outlined"
                        color="secondary"
                        href="/login"
                      >
                        Login
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </Container>
            </div>
          </main>
          {/* Footer */}
          <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
              Footer
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              color="textSecondary"
              component="p"
            >
              Something here to give the footer a purpose!
            </Typography>
          </footer>
          {/* End footer */}
        </React.Fragment>
      )}
    </>
  );
}
