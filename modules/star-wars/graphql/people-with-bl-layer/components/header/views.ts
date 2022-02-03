import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 40px 0;
  flex-direction: column;

  ${({ theme }) => theme.templates.centerContent}
`;

export const CardWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  margin-top: 20px;
`;
