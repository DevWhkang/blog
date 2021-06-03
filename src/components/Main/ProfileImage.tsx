import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import author from '../../../contents/assets/author/author.mp4';
import Img, { FluidObject } from 'gatsby-image';

const ProfileVideoWrapper = styled.video`
  width: 200px;
  height: 200px;
  margin-bottom: 30px;
  border-radius: 50%;

  @media (max-width: 768px) {
    margin-top: 50px;
    width: 150px;
    height: 150px;
  }
`;

const ProfileImageWrapper = styled(Img)`
  width: 150px;
  height: 150px;
  margin-bottom: 30px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

interface ProfileImageProps {
  profileImage: FluidObject;
}

const ProfileImage: FunctionComponent<ProfileImageProps> = ({
  profileImage,
}) => {
  return (
    <>
      <ProfileVideoWrapper autoPlay muted loop>
        <source src={author} type="video/mp4" />
      </ProfileVideoWrapper>
      {/* <ProfileImageWrapper fluid={profileImage} alt="Profile Image" /> */}
    </>
  );
};

export default ProfileImage;
