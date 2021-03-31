import * as React from 'react';
// components
import { ErrorMessage } from '@md-shared/components/form/error-message';
// views
import { TextInput, Wrapper, Label, InputStyle, WrapperStyle } from './views';

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorText?: string;
  inputStyle?: InputStyle;
  label?: string;
  wrapperStyle?: WrapperStyle;
}

const TextField: React.FC<TextFieldProps> = ({ errorText, label, placeholder, wrapperStyle, ...rest }) => {
  return (
    <Wrapper wrapperStyle={wrapperStyle}>
      {label && <Label>{label}</Label>}
      <TextInput placeholder={placeholder} isValid={!errorText} {...rest} />
      <ErrorMessage errorText={errorText} />
    </Wrapper>
  );
};

export { TextField };
