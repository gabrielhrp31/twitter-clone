import React from 'react';
import  Feed from '../Feed'
import { Container,Banner, Avatar, ProfileData, EditButton, LocationIcon,CakeIcon, Followage } from './styles';

function ProfilePage() {
  return <Container >
        <Banner >
            <Avatar />
        </Banner>  
        <ProfileData>
            <EditButton outlined>Edit Profile</EditButton>

            <h1>Gabriel Rodrigues</h1>
            <h2>@gabrielws31</h2>

            <p>
                Ciência da Computação - IFMG Campus Formiga
            </p>
            <ul>
                <li>
                    <LocationIcon />
                    São Paulo, Brasil
                </li>
                <li>
                    <CakeIcon />
                    Born January 31, 2000
                </li>
            </ul>
            <Followage>
                <span>Following <strong>94</strong></span>
                <span><strong>94 </strong> Followers </span>
            </Followage>
        </ProfileData>
        <Feed/>
    </Container>;
}

export default ProfilePage;