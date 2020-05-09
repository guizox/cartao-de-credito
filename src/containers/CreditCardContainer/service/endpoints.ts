import Apis from "apis";

export const api = Apis({ baseURL: `http://localhost:3001` });

export default {
  payment: () => `/pagar`,
};
