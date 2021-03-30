import * as React from 'react';
// components
import Link from 'next/link';

interface Props {
  pId: string;
}

const StarshipLink: React.FC<Props> = ({ pId, children }) => (
  <Link href='/redux/starships/[id]' as={`/redux/starships/${pId}`}>
    <a>{children}</a>
  </Link>
);

export { StarshipLink };
