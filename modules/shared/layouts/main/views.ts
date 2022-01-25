import styled from 'styled-components';

export const Wrapper = styled.div<{ isHasTabs: boolean }>`
  min-height: 100%;

  padding-top: ${({ isHasTabs }) => (isHasTabs ? 90 : 60)}px;
  background-color: ${({ theme }) => theme.colors.gray400};
`;
