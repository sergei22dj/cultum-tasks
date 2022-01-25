import * as React from 'react';
// view components
import { Header } from '@md-ui/headers/main';
// views
import { Wrapper } from './views';

export type Tab = { id: string; title: string; component: React.ComponentElement<any, any> };

interface Props {
  childrenTabs?: Tab[];
}

const MainLayout: React.FC<Props> = ({ children, childrenTabs }) => {
  const [activeTab, setActiveTab] = React.useState(childrenTabs?.length ? childrenTabs[0].id : undefined);

  const activeComponent = React.useMemo(
    () => childrenTabs?.find((i) => i.id === activeTab)?.component,
    [activeTab, childrenTabs]
  );

  return (
    <Wrapper isHasTabs={!!childrenTabs?.length}>
      <Header childrenTabs={childrenTabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeComponent}

      {children}
    </Wrapper>
  );
};

export { MainLayout };
