import styled from 'styled-components';
import { Margin } from '@md-shared/types/css';
import { getMarginStyle } from '@md-shared/helpers/styled';

export interface InputStyle {
  fs?: number;
}

export type WrapperStyle = Margin;

export const TextInput = styled.input<{
  isValid?: boolean;
  inputStyle?: InputStyle;
}>`
  width: 100%;
  height: 52px;
  padding: 16px;
  font-size: 16px;
  color: ${({ theme, isValid }) => (isValid ? theme.colors.gray600 : theme.colors.red500)};
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray400};
  border-radius: 4px;
  border-color: ${({ isValid, theme }) => (isValid ? theme.colors.gray400 : theme.colors.red500)};
  outline: none;

  :focus {
    border: 2px solid ${({ isValid, theme }) => isValid && theme.colors.yellow400};
  }
`;

export const Wrapper = styled.div<{ wrapperStyle?: WrapperStyle }>`
  flex: 1;
  position: relative;
  ${({ wrapperStyle }) => wrapperStyle && getMarginStyle('wrapperStyle')};
`;

export const Label = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
`;
