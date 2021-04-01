import * as React from 'react';
// components
import NextLink, { LinkProps } from 'next/link';

const Link: React.FC<LinkProps> = ({ as, href, children }) => (
  <NextLink href={href} as={as}>
    <a>{children}</a>
  </NextLink>
);

export { Link };
