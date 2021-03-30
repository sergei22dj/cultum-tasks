import * as React from 'react';
import styled from 'styled-components';

const ErrorText = styled.div`
  font-size: 14px;

  color: ${({ theme }) => theme.colors.red500};
  margin-top: 3px;
`;

interface Props {
  errorText: string | undefined;
}

const ErrorMessage: React.FC<Props> = ({ errorText }) => {
  if (!errorText) return null;

  return <ErrorText>{errorText}</ErrorText>;
};

export { ErrorMessage };
