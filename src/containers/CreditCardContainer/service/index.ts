import { State } from "containers/interfaces";
import endpoints, { api } from "./endpoints";

const makePayment = async (state: State, setState: any) => {
  const errors = {};
  Object.keys(state.creditCard).forEach((item) => {
    if (state.creditCard[item] === "") {
      errors[item] = "error";
    }
  });

  if (Object.keys(errors).length > 0) return;

  setState({ ...state, isLoading: true });

  try {
    const { status, data } = await api.post({
      url: endpoints.payment(),
      data: state,
    });

    if (status >= 200 && status < 300) {
      setState({
        ...state,
        step: state.step + 1,
        response: data,
        isLoading: false,
      });
    }

    setState({ ...state, isLoading: false });
  } catch (e) {
    setState({ ...state, isLoading: false });
    console.log(e);
  }
};

export { makePayment };
