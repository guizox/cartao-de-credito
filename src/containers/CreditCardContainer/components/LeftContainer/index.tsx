import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import styles from "./styles";
import CreditCard from "components/CreditCard";
import Hidden from "@material-ui/core/Hidden";
import { State } from "containers/interfaces";
import Stepper from "components/Stepper";

interface Props {
  state: State;
  setState: any;
}

const LeftContainer: React.FC<Props> = ({ state, setState }) => {
  const classes = makeStyles(styles)();

  return (
    <Grid container className={classes.container}>
      <Hidden mdDown>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="body1">
              {"< Alterar forma de pagamento"}
            </Typography>
          </Grid>
        </Grid>
      </Hidden>

      <Hidden mdUp>
        <Grid container>
          <Grid item xs={1}>
            <Typography variant="body1">{"<"}</Typography>
          </Grid>

          <Stepper
            state={state}
            steps={["Carrinho", "Pagamento", "Confirmação"]}
          />
        </Grid>
      </Hidden>

      <Grid
        container
        item
        xs={12}
        spacing={1}
        className={classes.textContainer}
      >
        <Grid item xs={4} className={classes.logoContainer}>
          <img
            src="/images/cardLogo.svg"
            alt="cardlogo"
            className={classes.logo}
          />
        </Grid>
        <Grid item xs={8}>
          <Grid
            container
            justify="center"
            alignContent="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <Typography variant="body2" className={classes.text}>
                {"Adicione um novo"}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" className={classes.text}>
                {"cartão de crédito"}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <CreditCard state={state} />
    </Grid>
  );
};

export default LeftContainer;
