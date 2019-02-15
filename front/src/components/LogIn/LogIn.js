import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

const LogIn = props => {
  return (
    <Card>
      <CardContent>
        <form action="logIn">
          <p>
            <b>Как по вашему мнению расшифровывается аббревиатура </b>
          </p>
          <p>
            <input type="radio" name="answer" value="a1" />
            Офицерский состав
            <input type="radio" name="answer" value="a2" />
            Операционная система
            <input type="radio" name="answer" value="a3" />
            Большой полосатый мух
          </p>
          <p>
            <input type="submit" />
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

LogIn.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LogIn);
