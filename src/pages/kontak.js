import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const KontakPage = ({ data: { site } }) => {
  return (
    <Layout>
      <Helmet>
        <title>Contact — {site.siteMetadata.title}</title>
        <meta name='description' content={site.siteMetadata.description} />
      </Helmet>
      <div className='under'>
        <img src='/assets/undercon.png' alt='undercon' />
      </div>
    </Layout>
  );
};
export default KontakPage;
export const pageQuery = graphql`
  query KontakPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
