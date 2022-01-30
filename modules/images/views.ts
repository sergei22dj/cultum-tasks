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

export const SubTitle = styled(Title)`
  font-size: 14px;
  opacity: 0.7;
`;

export const CardsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardWrapper = styled.div`
  margin: 10px;
  width: 100%;
  max-width: 600px;
`;

export const DefaultImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 350px;
  max-width: 600px;
`;
