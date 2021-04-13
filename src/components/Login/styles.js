import { makeStyles } from "@material-ui/core/styles";
import bgimage from "../../images/bg.jpg";

export default makeStyles((theme) => ({
  root: {
    height: "100vh",
  },

  image: {
    // backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundImage: "url(" + bgimage + ")",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  avatar: {
    margin: theme.spacing(1),
    padding: "30px",
    backgroundColor: theme.palette.success.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
