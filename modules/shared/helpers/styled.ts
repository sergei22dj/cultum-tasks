import { css } from 'styled-components';
import { Margin, Padding } from '@md-shared/types/css';

export const getMarginStyle = <P extends string>(key: P) => css<
  {
    [k in P]?: Margin;
  }
>`
  margin-left: ${({ [key]: textStyle }) => textStyle?.ml ?? 0}px;
  margin-top: ${({ [key]: textStyle }) => textStyle?.mt ?? 0}px;
  margin-right: ${({ [key]: textStyle }) => textStyle?.mr ?? 0}px;
  margin-bottom: ${({ [key]: textStyle }) => textStyle?.mb ?? 0}px;
`;

export const getPaddingStyle = <P extends string>(key: P) => css<
  {
    [k in P]?: Padding;
  }
>`
  padding-left: ${({ [key]: textStyle }) => textStyle?.pl ?? 0}px;
  padding-top: ${({ [key]: textStyle }) => textStyle?.pt ?? 0}px;
  padding-right: ${({ [key]: textStyle }) => textStyle?.pr ?? 0}px;
  padding-bottom: ${({ [key]: textStyle }) => textStyle?.pb ?? 0}px;
`;
