import styled, { css } from 'styled-components';
// local
import { Margin } from '@md-shared/types/css';
import { ButtonPresets, buttonPresets } from './presets';
import { getMarginStyle } from '@md-shared/helpers/styled';

export interface WrapperStyle {
  height?: string;
  width?: string;
}

export type ButtonStyle = WrapperStyle & Margin;

export const Wrapper = styled.button<{
  buttonStyle?: ButtonStyle;
  preset?: ButtonPresets;
}>`
  position: relative;

  ${({ buttonStyle }) =>
    buttonStyle?.width &&
    css`
      width: ${buttonStyle.width};
    `};

  ${({ buttonStyle }) =>
    buttonStyle?.height &&
    css`
      height: ${buttonStyle.height};
    `};

  ${({ theme }) => theme.templates.centerContent};
  ${({ preset }) => preset && buttonPresets[preset]};
  ${({ buttonStyle }) => buttonStyle && getMarginStyle('buttonStyle')};
`;

export const InnerWrapper = styled.div`
  align-content: center;
  display: flex;
  flex-direction: row;
  position: relative;
`;

export const LoaderWrapper = styled.div`
  height: 30px;
  margin-left: 8px;
  width: 30px;
`;
