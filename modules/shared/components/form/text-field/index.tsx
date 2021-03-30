import React, { InputHTMLAttributes } from 'react';
// components
import { ErrorMessage } from '@md-shared/components/form/error-message';
// types
import { StyledCss } from '@md-modules/shared/types/helpers';
// views
import { TextInput, IconWrapper, InnerWrapper, Wrapper, Label, InputStyle, WrapperStyle } from './views';

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorText?: string;
  isInvalid?: boolean;
  inputStyle?: InputStyle;
  icon?: React.ReactElement;
  wrapperStyle?: WrapperStyle;
  labelOverrides?: StyledCss;
}

export function TextField(props: TextFieldProps) {
  const { icon, label, errorText, placeholder, wrapperStyle, labelOverrides, isInvalid = false, ...rest } = props;

  return (
    <Wrapper wrapperStyle={wrapperStyle}>
      {label && <Label overrides={labelOverrides}>{label}</Label>}
      <InnerWrapper>
        <TextInput placeholder={placeholder} isValid={!isInvalid} withIcon={!!icon} {...rest} />
        {icon && <IconWrapper>{icon}</IconWrapper>}
      </InnerWrapper>
      <ErrorMessage errorText={errorText} />
    </Wrapper>
  );
}
