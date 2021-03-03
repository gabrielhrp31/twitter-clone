import React from 'react';

import { Container, Topside, Logo, MenuButton, HomeIcon, BellIcon, EmailIcon,
    FavoriteIcon, ProfileIcon, Botside, Avatar, ProfileData, ExitIcon, } from './styles';

import Button from '../Button';

function MenuBar() {
  return <Container>
    <Topside>
      <Logo />

      <MenuButton>
        <HomeIcon />
        <span>Home Page</span>
      </MenuButton>

      <MenuButton>
        <BellIcon />
        <span>Notifications</span>
      </MenuButton>

      <MenuButton>
        <EmailIcon />
        <span>Messages</span>
      </MenuButton>

      <MenuButton>
        <FavoriteIcon />
        <span>Favorites</span>
      </MenuButton>

      <MenuButton className="active">
        <ProfileIcon />
        <span>Profile</span>
      </MenuButton>

      <Button>
        <span>Tweet</span>
      </Button>
    </Topside>

    <Botside>
      <Avatar />

      <ProfileData>
        <strong>Gabriel Rodrigues</strong>
        <span>@gabrielws31</span>
      </ProfileData>

      <ExitIcon />
    </Botside>
  </Container>;
}

export default MenuBar;