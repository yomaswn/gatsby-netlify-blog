import React from 'react';
import { Link } from 'gatsby';

const PostLink = ({ post }) => {
  return (
    <article className='card '>
      <Link to={post.frontmatter.path}>
        {!!post.frontmatter.thumbnail ? (
          <img
            src={post.frontmatter.thumbnail}
            alt={post.frontmatter.title + '- Featured Shot'}
          />
        ) : (
          <img
            src={'/assets/image-2.jpg'}
            alt={post.frontmatter.title + '- Featured Shot'}
          />
        )}
      </Link>

      <header>
        <h2 className='post-title'>
          <Link to={post.frontmatter.path} className='post-link'>
            {post.frontmatter.title}
          </Link>
        </h2>
        <div className='post-meta'>{post.frontmatter.date}</div>
        {post.frontmatter.tags &&
          post.frontmatter.tags.map((item, idx) => (
            <span className='post-tags' key={idx}>
              #{item}
            </span>
          ))}
      </header>
    </article>
  );
};
export default PostLink;
