import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import styles from "./styles";
import { State } from "containers/interfaces";

const useStyles = makeStyles(styles);

interface Props {
  state: State;
  setState: () => void;
}

const CreditCard: React.FC<Props> = ({ state, setState }) => {
  const classes = useStyles();
  return (
    <Grid item className={classes.creditCardContainer}>
      <img
        src="/images/emptyCreditCard.svg"
        alt="emptyCreditCard"
        className={classes.image}
      />
      <p className={classes.creditCardNumber}>{state.creditCard.number}</p>
      <Grid container justify="space-around" className={classes.textContainer}>
        <Grid item xs={9} className={classes.cardText}>
          {state.creditCard.name}
        </Grid>
        <Grid
          item
          xs={3}
          className={classes.cardText}
          style={{ textAlign: "right" }}
        >
          {state.creditCard.date}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CreditCard;
