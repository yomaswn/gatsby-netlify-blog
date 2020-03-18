import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={data => (
      <div className='hero-header'>
        <div className='headline'>
          <Link to='/'>{data.site.siteMetadata.home.title}</Link>
          {/* {data.site.siteMetadata.home.title} */}
        </div>
        <Link className='primary-content' to='/'>
          {data.site.siteMetadata.home.description}
        </Link>
        {/* <Link to='/contact' className="button -primary">Get in touch &rarr;</Link> */}
      </div>
    )}
  />
);
