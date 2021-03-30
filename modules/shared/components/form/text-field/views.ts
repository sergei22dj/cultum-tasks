import styled from 'styled-components';
import { Margin } from '@md-shared/types/css';
import { getMarginStyle } from '@md-shared/helpers/styled';
import { StyledCss } from '@md-modules/shared/types/helpers';

export interface InputStyle {
  fs?: number;
}
export type WrapperStyle = Margin;

export const TextInput = styled.input<{
  isValid?: boolean;
  withIcon: boolean;
  inputStyle?: InputStyle;
}>`
  width: 100%;
  padding: 16px;
  font-size: 16px;
  color: ${({ theme, isValid }) => (isValid ? theme.colors.gray600 : theme.colors.red500)};
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray400};
  border-radius: 4px;
  border-color: ${({ isValid, theme }) => (isValid ? theme.colors.gray400 : theme.colors.red500)};

  ${({ withIcon }) => withIcon && 'padding-right: 40px'};
`;

export const Wrapper = styled.div<{ wrapperStyle?: WrapperStyle }>`
  flex: 1;
  ${({ wrapperStyle }) => wrapperStyle && getMarginStyle('wrapperStyle')};
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: 10px;
`;

export const InnerWrapper = styled.div`
  justify-content: center;
`;

export const Label = styled.div<{
  overrides?: StyledCss;
}>`
  font-weight: 500;
  font-size: 12px;
  margin-bottom: 8px;

  ${({ overrides }) => overrides && overrides};
`;
