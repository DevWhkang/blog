import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import ProfileImage from 'components/Main/ProfileImage';
import { FluidObject } from 'gatsby-image';

const Background = styled.div`
  width: 100%;
  color: #35566c;
  /* background-color: red; */
`;

const Wrapper = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  /* align-items: flex-start; */
  width: 768px;
  /* height: 400px; */
  margin: 100px auto 30px;
  /* background-color: yellow; */

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 10px;
    margin-bottom: 0px;
    /* margin: 100px auto 0; */
    /* height: 300px; */
    /* padding: 0 20px; */
    /* flex-direction: column; */
  }
`;

const introductionTextWrapper = css`
  margin-left: 50px;
  margin-right: 10px;
  margin-top: 35px;
  /* background-color: green; */

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 20px;
    padding-top: 70px;
  }
`;

const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const Title = styled.div`
  margin-top: 5px;
  font-size: 35px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

interface IntroductionProps {
  profileImage: FluidObject;
}

const Introduction: FunctionComponent<IntroductionProps> = ({
  profileImage,
}) => {
  return (
    <Background>
      <Wrapper>
        <ProfileImage profileImage={profileImage} />

        <div css={introductionTextWrapper}>
          <SubTitle>Nice to Meet You,</SubTitle>
          <Title>I'm Junior Frontend Developer DevWhkang.</Title>
        </div>
      </Wrapper>
    </Background>
  );
};

export default Introduction;
