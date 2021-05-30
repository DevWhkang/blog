import React, { FunctionComponent, useMemo } from 'react';
import CategoryList, { CategoryListProps } from 'components/Main/CategoryList';
import PostList, { PostType } from 'components/Main/PostList';
import Introduction from 'components/Main/Introduction';
import { graphql } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import queryString, { ParsedQuery } from 'query-string';
import Layout from 'components/Common/Layout';

interface IndexPageProps {
  location: {
    search: string;
  };
  data: {
    allMarkdownRemark: {
      edges: PostType[];
    };
    file: {
      childImageSharp: {
        fluid: FluidObject;
      };
    };
    site: {
      siteMetadata: {
        description: string;
        title: string;
        siteUrl: string;
      };
    };
  };
}

const IndexPage: FunctionComponent<IndexPageProps> = ({
  location: { search },
  data: {
    allMarkdownRemark: { edges },
    file: {
      childImageSharp: { fluid },
    },
    site: {
      siteMetadata: { title, description, siteUrl },
    },
  },
}) => {
  const parsed: ParsedQuery<string> = queryString.parse(search);
  const selectedCategory: string =
    typeof parsed.category !== 'string' || !parsed.category
      ? 'All'
      : parsed.category;

  const catecoryList = useMemo(
    () =>
      edges.reduce(
        (
          list: CategoryListProps['categoryList'],
          {
            node: {
              frontmatter: { categories },
            },
          }: PostType,
        ) => {
          categories.forEach(category => {
            if (list[category] === undefined) list[category] = 1;
            else list[category]++;
          });

          list['All']++;
          return list;
        },
        { All: 0 },
      ),
    [],
  );

  return (
    <Layout title={title} description={description} url={siteUrl}>
      <Introduction profileImage={fluid} />
      <CategoryList
        selectedCategory={selectedCategory}
        categoryList={catecoryList}
      />
      <PostList selectedCategory={selectedCategory} posts={edges} />
    </Layout>
  );
};

export default IndexPage;

export const queryPostList = graphql`
  query queryPostList {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                fluid(
                  maxWidth: 768
                  maxHeight: 200
                  fit: INSIDE
                  quality: 100
                ) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
    file(name: { eq: "profile-image" }) {
      childImageSharp {
        fluid(maxWidth: 120, maxHeight: 120, fit: INSIDE, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`;
