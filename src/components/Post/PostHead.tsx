import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Img, { FluidObject } from 'gatsby-image';
import PostHeadInfo, { PostHeadInfoProps } from 'components/Post/PostHeadInfo';

const PostHeadWrapper = styled.div`
  /* position: relative; */
  width: 768px;
  height: 300px;
  align-self: center;
  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
  }
`;

const BackgroundImage = styled((props: GatsbyImgProps) => (
  <Img {...props} style={{ position: 'absolute' }} />
))`
  z-index: -1;
  width: 768px;
  height: 350px;
  object-fit: cover;
  filter: brightness(0.25);

  @media (max-width: 768px) {
    width: 100%;
    height: 320px;
  }
`;

type GatsbyImgProps = {
  fluid: FluidObject;
  alt: string;
  className?: string;
};

export interface PostHeadProps extends PostHeadInfoProps {
  thumbnail: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
}

const PostHead: FunctionComponent<PostHeadProps> = ({
  title,
  date,
  categories,
  thumbnail: {
    childImageSharp: { fluid },
  },
}) => {
  return (
    <PostHeadWrapper>
      <BackgroundImage fluid={fluid} alt="thumbnail" />
      <PostHeadInfo title={title} date={date} categories={categories} />
    </PostHeadWrapper>
  );
};

export default PostHead;
