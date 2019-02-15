import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";
import { GetQuestions, GetQuestionsMock } from "../../service/Api.js";
import Card from "../Card";
import NavBar from "../NavBar";
import SideMenu from "../SideMenu";
import LogIn from "../LogIn";
import Plate from "../Plate";

const drawerWidth = 200;

const styles = theme => ({
  root: {
    display: "flex",
    width: "100vw"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    backgroundColor: "#42a5f5"
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9 + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  cardHolder: {
    marginTop: "48px",
    display: "flex",
    flexDirection: "column",
    width: "90%"
  }
});

class Main extends React.Component {
  state = {
    open: false,
    questions: [],
    isLoggedIn: true
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  getQuestions = async isMock => {
    const quests = isMock ? await GetQuestionsMock() : await GetQuestions();
    if (Array.isArray(quests)) this.setState({ questions: quests });
  };
  componentDidMount() {
    this.getQuestions(true);
  }
  render() {
    const { classes, theme } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <NavBar
          handleDrawerOpen={this.handleDrawerOpen}
          classes={classes}
          theme={theme}
          isOpen={this.state.open}
          title="Опросник"
          onClickGetQuestions={() => this.getQuestions(false)}
        />
        <SideMenu
          handleDrawerClose={this.handleDrawerClose}
          classes={classes}
          theme={theme}
          isOpen={this.state.open}
          isLoggedIn={this.state.isLoggedIn}
        />
        <Plate child={<LogIn />} />
        {/* <Plate
          child={this.state.questions.map((card, i) => {
            return (
              <Card
                name={card.title}
                answers={card.items}
                className={classes.content}
                key={card.id}
                number={i + 1}
              />
            );
          })}
        /> */}
      </div>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Main);
