import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

interface PostContentProps {
  html: string;
}

const MarkdownRenderer = styled.div`
  // Renderer Style
  display: flex;
  flex-direction: column;
  width: 768px;
  margin: 0 auto;
  padding: 100px 0;
  word-break: break-all;

  // Markdown Style
  line-height: 1.8;
  font-size: 18px;
  font-weight: 400;

  // Apply Padding Attribute to All Elements
  p {
    margin: 20px 0;
    padding: 3px 0;
    line-height: 30px;

    strong {
      font-weight: 900;
      color: #506ea5;
    }

    @media (max-width: 768px) {
      line-height: 25px;
    }
  }

  // Adjust Heading Element Style
  h1 {
    border-bottom: 2px solid #c8c8c8;
  }
  h2 {
    margin-bottom: 20px;
  }
  h3 {
    font-weight: 800;
  }

  * + h1,
  * + h2,
  * + h3 {
    margin-top: 30px;
  }

  hr + h1,
  hr + h2,
  hr + h3 {
    margin-top: 0;
  }

  h1 {
    font-size: 30px;
  }

  h2 {
    font-size: 25px;
  }

  h3 {
    font-size: 20px;
  }

  // Adjust Quotation Element Style
  blockquote {
    margin: 20px;
    padding-top: 10px;
    padding-bottom: 25px;
    background-color: #fafdfe;
    border-left: 4px solid #bfbfbf;
    font-weight: 800;
    color: #787878;
    font-style: italic;
    font-size: 17px;
    border-radius: 3px 30px 30px 3px;

    p {
      margin: 10px 40px 0px;
    }
    ul {
      margin: 10px 70px 25px;
      padding: 0;

      p {
        margin: 0px 0px;
      }
    }
  }

  // Adjust List Element Style
  ol,
  ul {
    margin-left: 20px;
    padding: 20px 10px;
  }

  // Adjust Horizontal Rule style
  hr {
    border: 1px solid #000000;
    margin: 100px 0;
  }

  // Adjust Link Element Style
  a {
    color: #4263eb;
    text-decoration: underline;
  }

  // Adjust Code Style
  pre[class*='language-'] {
    margin: 30px 0;
    padding: 15px;
    font-size: 15px;

    ::-webkit-scrollbar-thumb {
      /* background: rgba(255, 255, 255, 0.5); */
      background: #d5d5d5;
      border-radius: 3px;
    }
  }

  deckgo-highlight-code {
    margin-top: 50px;
    margin-bottom: 30px;
    font-size: 15px;
  }

  code[class*='language-'] {
    padding: 4px;
    font-size: 14px;
    background-color: #efefef;
    color: #454545;
    border-radius: 3px;
    font-weight: bolder;

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
  pre[class*='language-'] {
    tab-size: 2;
  }

  // Markdown Responsive Design
  @media (max-width: 768px) {
    width: 100%;
    padding: 80px 20px;
    line-height: 1.7;
    font-size: 14px;

    p {
      line-height: 30px;
      line-height: 2;
    }

    h1 {
      font-size: 23px;
    }

    h2 {
      font-size: 20px;
    }

    h3 {
      font-size: 17px;
    }

    img {
      width: 100%;
    }

    hr {
      margin: 50px 0;
    }
  }
`;

const PostContent: FunctionComponent<PostContentProps> = function ({ html }) {
  return <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />;
};

export default PostContent;
