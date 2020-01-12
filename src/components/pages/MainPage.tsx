import React from 'react';

import PageLayout, {
  Header, Nav, Main, Footer,
} from 'components/layout/PageLayout';

const MainPage: React.FC = () => (
  <PageLayout>
    <Header>header</Header>
    <Nav>nav</Nav>
    <Main>main</Main>
    <Footer>footer</Footer>
  </PageLayout>
);

export default MainPage;
