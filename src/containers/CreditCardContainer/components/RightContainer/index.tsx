import React from "react";
import { State } from "containers/interfaces";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/styles";
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import MenuItem from "@material-ui/core/MenuItem";

import MaskedInput from "components/MaskedInput";
import styles from "./styles";
import GenericToolTip from "components/GenericToolTip";
import Stepper from "components/Stepper";

interface Props {
  state: State;
  setState: any;
  width: Breakpoint;
}

const RightContainer: React.FC<Props> = ({ state, setState, width }) => {
  const classes = makeStyles(styles)();

  return (
    <Grid container item xs={8} direction="row" className={classes.container}>
      <Hidden mdDown>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Stepper
            state={state}
            steps={["Carrinho", "Pagamento", "Confirmação"]}
          />
        </Grid>
      </Hidden>

      <Grid container direction="row" spacing={2} className={classes.form}>
        <Grid item xs={12}>
          <MaskedInput
            mask="9999 9999 9999 9999"
            value={state.creditCard.number}
            maskChar="*"
            onChange={(e) =>
              setState({
                ...state,
                creditCard: {
                  ...state.creditCard,
                  number: e.target.value,
                },
              })
            }
            label="Número do cartão"
            helperText={""}
            error={false}
          ></MaskedInput>
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Nome"
            placeholder="Nome(Igual ao do cartão)"
            onChange={(e) =>
              setState({
                ...state,
                creditCard: {
                  ...state.creditCard,
                  name: e.target.value,
                },
              })
            }
            fullWidth
          ></TextField>
        </Grid>

        <Grid item xs={6}>
          <MaskedInput
            mask="99/99"
            value={state.creditCard.date}
            maskChar="0"
            onChange={(e) =>
              setState({
                ...state,
                creditCard: {
                  ...state.creditCard,
                  date: e.target.value,
                },
              })
            }
            label="Validade"
            helperText={""}
            error={false}
          ></MaskedInput>
        </Grid>

        <Grid item xs={6}>
          <MaskedInput
            mask="999"
            value={state.creditCard.cvv}
            maskChar="*"
            onChange={(e) =>
              setState({
                ...state,
                creditCard: {
                  ...state.creditCard,
                  cvv: e.target.value,
                },
              })
            }
            label="CVV"
            helperText={""}
            error={false}
            InputProps={{
              endAdornment: (
                <GenericToolTip color="#f0f0f0" title="Código de verificação" />
              ),
            }}
            onEnter={() => setState({ ...state, editingCvv: true })}
            onBlur={() => setState({ ...state, editingCvv: false })}
          ></MaskedInput>
        </Grid>

        <Grid item xs={12}>
          <Select
            value={state.creditCard.installments}
            onChange={(e) =>
              setState({
                ...state,
                creditCard: {
                  ...state.creditCard,
                  installments: e.target.value,
                },
              })
            }
            fullWidth
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
              <MenuItem key={item} value={item}>{`${item} x`}</MenuItem>
            ))}
          </Select>
        </Grid>

        <Grid container justify="flex-end">
          <Grid item xs={isWidthUp("lg", width) ? 5 : 12}>
            <Button variant="contained" fullWidth>
              continuar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withWidth()(RightContainer);
