import * as React from 'react';
import styled from 'styled-components';

interface Props {
  message: string;
}

const ErrorWrapper: React.FC<Props> = ({ message }) => <Wrapper>{message}</Wrapper>;

const Wrapper = styled.div`
  min-height: 300px;
  font-size: 24px;

  background-color: ${({ theme }) => theme.colors.gray600};
  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.templates.centerContent};
`;

export { ErrorWrapper };
