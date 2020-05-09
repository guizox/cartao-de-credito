import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import classNames from "classnames";
import Container from "@material-ui/core/Container";
import LeftContainer from "./components/LeftContainer";
import RightContainer from "./components/RightContainer";
import styles from "./styles";
import { State } from "containers/interfaces";

const useStyles = makeStyles(styles);

const initialState: State = {
  creditCard: {
    number: "",
    name: "",
    date: "",
    cvv: "",
    installments: "",
  },
  editingCvv: false,
  step: 2,
};

const CreditCardContainer = () => {
  const classes = useStyles();

  const [state, setState] = React.useState(initialState);

  return (
    <Container maxWidth="xl" className={classes.container}>
      <Grid item container className={classes.root}>
        <Grid container item xs={12} lg={4} alignContent="space-between">
          <Grid
            container
            className={classNames(classes.column, classes.leftColumn)}
          >
            <LeftContainer state={state} setState={setState} />
          </Grid>
        </Grid>
        <Grid container item xs={12} lg={8}>
          <Grid container justify="center" className={classes.column}>
            <RightContainer state={state} setState={setState} />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CreditCardContainer;
