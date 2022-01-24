import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  min-height: 300px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.p`
  margin: 40px 0;
  font-size: 24px;
  font-weight: 500;

  color: ${({ theme }) => theme.colors.yellow400};
`;
