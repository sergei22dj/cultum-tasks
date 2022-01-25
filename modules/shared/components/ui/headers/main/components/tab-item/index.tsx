import React from 'react';
// libs
import styled from 'styled-components';

interface Props {
  id: string;
  title: string;
  isActive?: boolean;
  onClick: (type: string) => void;
}

export const Tab = styled.div<{ isActive: boolean }>`
  cursor: pointer;
  font-weight: 500;
  line-height: 18px;
  margin: 0 16px 0 0;

  color: ${({ isActive, theme }) => (isActive ? theme.colors.yellow400 : theme.colors.white)};
`;

const TabItem: React.FC<Props> = ({ id, isActive = false, title, onClick }) => (
  <Tab onClick={() => onClick(id)} isActive={isActive}>
    {title}
  </Tab>
);

export default TabItem;
