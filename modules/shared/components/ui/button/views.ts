import styled from 'styled-components';
// local
import { StyledCss } from '@md-shared/types/helpers';
import { ButtonPresets, buttonPresets } from './presets';

export const Wrapper = styled.button<{
  overrides?: StyledCss;
  preset?: ButtonPresets;
  disabled?: boolean | null;
}>`
  position: relative;

  ${({ preset }) => preset && buttonPresets[preset]};
  ${({ overrides }) => overrides && overrides};
`;

export const InnerWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-content: center;
`;
