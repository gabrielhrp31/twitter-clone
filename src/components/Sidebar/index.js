import React from 'react';
import StickyBox from 'react-sticky-box';

import { Container, SearchWrapper, SearchInput, SearchIcon, Body } from './styles';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

const Sidebar = () => {
  return <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Who to follow"
            elements={[
              <FollowSuggestion
                name="Diego Fernandes"
                nickname="@dieegosf"
              />,
              <FollowSuggestion
                name="Guilherme Rodz"
                nickname="@guilherme_rodz"
              />,
              <FollowSuggestion
                name="Filipe Deschamps"
                nickname="@FilipeDeschamps"
              />,
            ]}
          />
          <List
            title="What's happening?"
            elements={[
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
};

export default Sidebar;