import React from 'react';
import ProfilePage from '../ProfilePage';

import { Container, Header,BackIcon, ProfileInfo, BottomMenu,HomeIcon,SearchIcon,BellIcon,EmailIcon } from './styles';

function Main() {
  return <Container >
        <Header >
          <button>
                <BackIcon/>
          </button>
          <ProfileInfo>
                <strong>Gabriel Rodrigues</strong>
                <span>6 Tweets</span>
          </ProfileInfo>
        </Header> 
       <ProfilePage />
       <BottomMenu>
           <HomeIcon className="active"/>
           <SearchIcon/>
           <BellIcon/>
           <EmailIcon />
       </BottomMenu>
  </Container>;
}

export default Main;