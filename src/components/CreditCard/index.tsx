import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import styles from "./styles";
import { State } from "containers/interfaces";

const useStyles = makeStyles(styles);

interface Props {
  state: State;
}

const CreditCard: React.FC<Props> = ({ state }) => {
  const classes = useStyles();
  return (
    <Grid item className={classes.creditCardContainer}>
      <img
        src={
          state.creditCard.number.split("*").join("").length > 8
            ? "/images/filledCreditCard.svg"
            : "/images/emptyCreditCard.svg"
        }
        alt="emptyCreditCard"
        className={classes.image}
      />
      <p className={classes.creditCardNumber}>
        {state.creditCard.number || "**** **** **** ****"}
      </p>
      <Grid container justify="space-around" className={classes.textContainer}>
        <Grid item xs={9} className={classes.cardText}>
          {state.creditCard.name || "NOME DO TITULAR"}
        </Grid>
        <Grid
          item
          xs={3}
          className={classes.cardText}
          style={{ textAlign: "right" }}
        >
          {state.creditCard.date || "00/00"}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CreditCard;
