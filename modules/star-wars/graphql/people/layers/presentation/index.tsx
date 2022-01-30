import * as React from 'react';
// view components
import { Card } from '@md-sw/shared/components/card';
import { ContentLoader } from '@md-ui/loaders/content-loader';
// context
import { PeopleAPIContext } from '@md-sw-people/layers/api/people';
// views
import { ContentWrapper, Wrapper } from '@md-shared/views/common';

const PeoplePresentation = () => {
  const { isLoading, error, people } = React.useContext(PeopleAPIContext);

  return (
    <ContentWrapper>
      <ContentLoader isLoading={isLoading} error={error}>
        <Wrapper>
          {people.map((person) => (
            <Card key={person.id} href='/graphql/people/[id]' as={`/graphql/people/${person.id}`} {...person} />
          ))}
        </Wrapper>
      </ContentLoader>
    </ContentWrapper>
  );
};

export { PeoplePresentation };
