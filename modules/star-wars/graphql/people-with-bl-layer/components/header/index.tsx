import React from 'react';
// context
import { PeopleBLLContext } from '@md-sw/graphql/people-with-bl-layer/layers/business';
// components
import Card from '@md-sw/graphql/people-with-bl-layer/components/card';
// views
import { CardWrapper, Wrapper, Title, SubTitle } from '@md-sw/graphql/people-with-bl-layer/components/header/views';

const Header = () => {
  const { selectedPerson } = React.useContext(PeopleBLLContext);

  return (
    <Wrapper>
      <Title>Selected Person: {selectedPerson?.name || 'N/A'}</Title>
      <SubTitle>{selectedPerson ? JSON.stringify(selectedPerson) : 'N/A'}</SubTitle>

      {selectedPerson && (
        <CardWrapper>
          <Card withoutButton key={selectedPerson.id} {...selectedPerson} />
        </CardWrapper>
      )}
    </Wrapper>
  );
};

export default Header;
