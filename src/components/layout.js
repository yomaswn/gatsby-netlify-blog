import React from 'react';
import Navigation from '../components/navigation';
import HeroHeader from './heroHeader';
import 'prismjs/themes/prism-okaidia.css';

export default ({ children }) => {
  return (
    <div className='site-wrapper'>
      <Navigation />
      <HeroHeader />
      {children}
      <footer className='site-footer'>
        <p>
          &copy; 2020 Yoma Sofwan &bull; Theme{' '}
          <a href='https://github.com/W3Layouts/gatsby-starter-delog'>
            {' '}
            Delog{' '}
          </a>{' '}
          Crafted with{' '}
          <span role='img' aria-label='love'>
            ❤️
          </span>{' '}
          by <a href='https://w3layouts.com'>W3Layouts</a>
        </p>
      </footer>
    </div>
  );
};
