export interface State {
  creditCard: CreditCard;
}

export interface CreditCard {
  number: string;
  name: string;
  date: string;
  cvv: string;
  installments: string;
}
