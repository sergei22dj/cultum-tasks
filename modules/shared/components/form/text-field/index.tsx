import React, { InputHTMLAttributes } from 'react';
// components
import { ErrorMessage } from '@md-shared/components/form/error-message';
// types
import { StyledCss } from '@md-modules/shared/types/helpers';
// views
import { TextInput, Wrapper, Label, InputStyle, WrapperStyle } from './views';

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorText?: string;
  isInvalid?: boolean;
  inputStyle?: InputStyle;
  wrapperStyle?: WrapperStyle;
  labelOverrides?: StyledCss;
}

export function TextField(props: TextFieldProps) {
  const { label, errorText, placeholder, wrapperStyle, labelOverrides, isInvalid = false, ...rest } = props;

  return (
    <Wrapper wrapperStyle={wrapperStyle}>
      {label && <Label overrides={labelOverrides}>{label}</Label>}

      <TextInput placeholder={placeholder} isValid={!isInvalid} {...rest} />
      <ErrorMessage errorText={errorText} />
    </Wrapper>
  );
}
