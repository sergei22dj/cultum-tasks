import * as React from 'react';
// components
import { ErrorMessage } from '@md-shared/components/form/error-message';
// views
import { TextInput, Wrapper, Label, InputStyle, WrapperStyle } from './views';

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorText?: string;
  inputStyle?: InputStyle;
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
