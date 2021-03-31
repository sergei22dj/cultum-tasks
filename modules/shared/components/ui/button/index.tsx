import * as React from 'react';
// components
import { Loader } from '@md-ui/loaders/loader';
// types
import { ButtonPresets } from './presets';
// views
import { ButtonStyle, InnerWrapper, LoaderWrapper, Wrapper } from './views';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonStyle?: ButtonStyle;
  isLoading?: boolean;
  preset?: ButtonPresets;
}

const Button: React.FC<ButtonProps> = ({ preset = 'default', children, isLoading = false, ...rest }) => (
  <Wrapper preset={preset} isLoading={isLoading} {...rest}>
    <InnerWrapper>
      {isLoading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        children
      )}
    </InnerWrapper>
  </Wrapper>
);

export { Button };
