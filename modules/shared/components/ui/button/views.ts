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
  isLoading: boolean;
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

  ${({ isLoading }) =>
    isLoading &&
    css`
      :hover {
        background-color: ${({ theme }) => theme.colors.gray600};
      }
    `}
`;

export const InnerWrapper = styled.div`
  align-content: center;
  display: flex;
  flex-direction: row;
  position: relative;
`;

export const LoaderWrapper = styled.div`
  & > div {
    height: 24px;
    width: 24px;
  }

  margin-left: 8px;
`;
