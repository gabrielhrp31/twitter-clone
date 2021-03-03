import React from 'react';
import Main from '../Main';
import MenuBar from '../MenuBar';
import Sidebar from '../Sidebar';

import { Container, Wrapper } from './styles';

function Layout() {
  return <Container>
      <Wrapper>
          <MenuBar/>
          <Main />
          <Sidebar />
      </Wrapper>
    </Container>;
}

export default Layout;