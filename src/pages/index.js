import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PostLink from '../components/post-link';
import HeroHeader from '../components/heroHeader';

const IndexPage = ({
  data: {
    site,
    allMarkdownRemark: { edges, group }
  }
}) => {
  const [tag, setTag] = useState('');
  const click = props => {
    setTag(props);
    console.log(props);
  };

  const Posts = edges
    .filter(edge =>
      !!tag
        ? !!edge.node.frontmatter.tags &&
          edge.node.frontmatter.tags.find(e => e === tag)
        : !!edge.node.frontmatter.date
    ) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />);

  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name='description' content={site.siteMetadata.description} />
        {!site.siteMetadata.w3l_dom_key ? null : (
          <meta
            name='w3l-domain-verification'
            content={site.siteMetadata.w3l_dom_key}
          />
        )}
      </Helmet>
      <HeroHeader />
      <h2>Category &darr;</h2>

      <button
        className={tag === '' ? 'button-tags select' : 'button-tags'}
        onClick={() => click('')}
      >
        all
      </button>
      {group.map((item, idx) => (
        <button
          className={tag === item.tag ? 'button-tags select' : 'button-tags'}
          key={idx}
          onClick={() => click(item.tag)}
        >
          {item.tag}
        </button>
      ))}

      <div className='grids'>{Posts}</div>
    </Layout>
  );
};

export default IndexPage;
export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
        w3l_dom_key
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail
            tags
          }
        }
      }
      group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
    }
  }
`;
