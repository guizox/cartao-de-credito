import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { State } from "containers/interfaces";
import classNames from "classnames";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import styles from "./styles";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";

interface Props {
  state: State;
  steps: string[];
  width: Breakpoint;
}

const Stepper: React.FC<Props> = ({ state, steps, width }) => {
  const classes = makeStyles(styles)();

  return isWidthUp("md", width) ? (
    <Grid container direction="row">
      {steps.map((item, index) => (
        <Grid container item xs={4} justify="space-around">
          <Grid item xs={2}>
            {state.step > index + 1 ? (
              <CheckCircleIcon className={classes.check} />
            ) : (
              <p className={classNames(classes.check, classes.numberWrapper)}>
                <span className={classes.number}>{index + 1}</span>
              </p>
            )}
          </Grid>
          <Grid xs={8} className={classNames(classes.check, classes.center)}>
            {item}
          </Grid>
          <Grid
            item
            xs={2}
            className={classNames(classes.check, classes.center)}
          >
            {index + 1 === steps.length ? null : ">"}
          </Grid>
        </Grid>
      ))}
    </Grid>
  ) : (
    <Grid item xs={11}>
      <Typography variant="body1">{`Etapa ${state.step} de ${steps.length}`}</Typography>
    </Grid>
  );
};

export default withWidth()(Stepper);
