import * as React from 'react';
import styled from 'styled-components';
// views
import { ContentWrapper } from '@md-shared/views/common';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 50%;
`;

const FormExample = () => {
  return (
    <ContentWrapper>
      <Wrapper>Form Example</Wrapper>
    </ContentWrapper>
  );
};

export { FormExample };
