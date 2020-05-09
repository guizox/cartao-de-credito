export interface State {
  creditCard: CreditCard;
  editingCvv: false;
  step: number;
}

export interface CreditCard {
  number: string;
  name: string;
  date: string;
  cvv: string;
  installments: string;
}
