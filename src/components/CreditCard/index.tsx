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
          state.editingCvv
            ? "/images/cvv.svg"
            : state.creditCard.number.split("*").join("").length > 8
            ? "/images/filledCreditCard.svg"
            : "/images/emptyCreditCard.svg"
        }
        alt="emptyCreditCard"
        className={classes.image}
      />
      {state.editingCvv ? (
        <p id="creditCardCvv" className={classes.cvv}>
          {state.creditCard.cvv || "***"}
        </p>
      ) : (
        <React.Fragment>
          <p id="creditCardNumber" className={classes.creditCardNumber}>
            {state.creditCard.number || "**** **** **** ****"}
          </p>
          <Grid
            container
            justify="space-around"
            className={classes.textContainer}
          >
            <Grid item xs={9} className={classes.cardText} id="creditCardName">
              <span>{state.creditCard.name || "NOME DO TITULAR"}</span>
            </Grid>
            <Grid
              item
              xs={3}
              className={classes.cardText}
              style={{ textAlign: "right" }}
              id="creditCardDate"
            >
              <span>{state.creditCard.date || "00/00"}</span>
            </Grid>
          </Grid>
        </React.Fragment>
      )}
    </Grid>
  );
};

export default CreditCard;
