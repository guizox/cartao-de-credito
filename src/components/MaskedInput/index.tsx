import React from "react";
import InputMask from "react-input-mask";
import TextField from "@material-ui/core/TextField";
import { IMaskedInput } from "./interfaces";

const MaskedInput: React.FC<IMaskedInput> = ({
  mask,
  maskChar,
  value,
  onChange,
  disabled,
  label,
  helperText,
  error,
  variant,
  required,
  onBlur,
  InputProps,
  onEnter,
  id,
}) => (
  <InputMask
    mask={mask}
    maskChar={maskChar}
    value={value}
    onChange={onChange}
    onBlur={onBlur}
    disabled={disabled}
    id={id}
    onFocus={onEnter}
  >
    {(inputProps, onEnter) => (
      <TextField
        {...inputProps}
        label={label}
        variant={variant}
        helperText={helperText}
        error={error}
        disabled={disabled}
        required={required}
        fullWidth
        InputProps={InputProps}
      />
    )}
  </InputMask>
);

export default MaskedInput;
