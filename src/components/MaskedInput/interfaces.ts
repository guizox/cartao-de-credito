export class IMaskedInput {
  mask: string = "";
  maskChar?: string;
  value: string | number = "";
  onChange: (e: any) => void = () => {};
  onBlur?: (e: any) => void = () => {};
  disabled?: boolean = false;
  label: string = "";
  helperText: string = "";
  error: any;
  variant?: "standard" | "outlined" | "filled" = "outlined";
  required?: boolean = true;
  InputProps?: any;
}
