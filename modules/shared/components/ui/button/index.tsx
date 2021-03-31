import * as React from 'react';
// views
import { InnerWrapper, Wrapper } from './views';
import { ButtonPresets } from './presets';

export interface ButtonProps {
  children?: React.ReactNode;
  isLoading?: boolean;
  loader?: React.ReactNode;
  preset?: ButtonPresets;
}

export const Button: React.FC<ButtonProps> = ({ preset = 'formSubmit', children, isLoading, loader, ...rest }) => (
  <Wrapper preset={preset} {...rest}>
    <InnerWrapper>
      {children}
      {isLoading && loader}
    </InnerWrapper>
  </Wrapper>
);
