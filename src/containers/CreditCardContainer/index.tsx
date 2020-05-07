import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import classNames from "classnames";
import LeftContainer from "./components/LeftContainer";
import RightContainer from "./components/RightContainer";
import styles from "./styles";

const useStyles = makeStyles(styles);

const CreditCardContainer: React.FC<{}> = ({}) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid
        container
        item
        xs={12}
        lg={4}
        alignContent="space-between"
        justify="center"
      >
        <Grid
          container
          justify="center"
          alignContent="center"
          alignItems="center"
          className={classNames(classes.column, classes.leftColumn)}
        >
          <LeftContainer />
        </Grid>
      </Grid>
      <Grid
        container
        item
        xs={12}
        lg={8}
        alignContent="space-between"
        justify="center"
      >
        <Grid
          container
          justify="center"
          alignContent="center"
          alignItems="center"
          className={classes.column}
        >
          <RightContainer />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CreditCardContainer;
