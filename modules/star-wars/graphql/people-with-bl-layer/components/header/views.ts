import styled from 'styled-components';

export const Wrapper = styled.div`
  flex-direction: column;
  margin: 40px 0;

  ${({ theme }) => theme.templates.centerContent}
`;

export const CardWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  margin-top: 20px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
`;

export const SubTitle = styled.p`
  color: ${({ theme }) => theme.colors.white};
`;
