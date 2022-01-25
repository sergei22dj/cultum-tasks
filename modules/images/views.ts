import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.p<{ yellowColor?: boolean }>`
  font-size: 24px;
  font-weight: 500;

  color: ${({ theme, yellowColor }) => (yellowColor ? theme.colors.yellow400 : theme.colors.white)};
`;

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardWrapper = styled.div`
  margin: 10px;
`;
