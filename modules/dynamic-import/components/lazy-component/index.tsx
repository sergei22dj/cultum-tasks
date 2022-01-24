import React from 'react';
// libs
import styled from 'styled-components';

export const Text = styled.p`
  margin: auto;
  font-size: 24px;

  color: ${({ theme }) => theme.colors.white};
`;

const LazyComponent = () => <Text>I'm lazy component!</Text>;

export default LazyComponent;
