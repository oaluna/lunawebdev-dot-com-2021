import React, { Component } from 'react';

export default class SkillsPage extends Component {
  render() {
    return (
      <div className='brandsContainer' style={{ marginTop: '125vh' }}>
        <div className='brandsOverlay' style={{ zIndex: -1 }}></div>
        <div className='brandsContent'>
          <div className='brandsTitle'>
            <h1>Technologies I work with:</h1>
          </div>

          <div className='brandsList'>
            <img
              aria-labelledby='Html5'
              src='https://cdn.worldvectorlogo.com/logos/html5-2.svg'
              alt='HTML5'
            />
            <img
              areia-labelledby='Bootstrap'
              src='https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg'
              alt='Bootstrap 5'
            />
            <img
              aria-labelledby='NextJS'
              src='../assets/nextjs-icon.svg'
              alt='NextJS'
            />
            <img
              aria-labelledby='Apollo'
              src='https://cdn.worldvectorlogo.com/logos/apollo-graphql-1.svg'
              alt='Apollo'
            />
            <img
              aria-labelledby='GraphQL'
              src='https://cdn.worldvectorlogo.com/logos/graphql.svg'
              alt='GraphQL'
            />
            <img
              aria-labelledby='NodeJS'
              src='https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg'
              alt='NodeJS'
            />
            <img
              aria-labelledby='Redux'
              src='https://cdn.worldvectorlogo.com/logos/redux.svg'
              alt='Redux'
            />
            <img
              aria-labelledby='Sass'
              src='https://cdn.worldvectorlogo.com/logos/sass-1.svg'
              alt='Sass'
            />
            <img
              aria-labelledby='MongoDB'
              src='https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg'
            />
            <img
              aria-labelledby='TailwindCSS'
              src='https://cdn.worldvectorlogo.com/logos/tailwindcss.svg'
              alt='TailwindCSS'
            />
            <img
              aria-labelledby='Amazon Web Services'
              src='https://cdn.worldvectorlogo.com/logos/aws-2.svg'
              alt='Amazon Web Services'
            />
            <img
              aria-labelledby='Netlify'
              src='https://cdn.worldvectorlogo.com/logos/netlify.svg'
              alt='Netlify'
            />
            <img
              aria-labelledby='Yarn'
              src='https://cdn.worldvectorlogo.com/logos/yarn.svg'
              alt='Yarn'
            />
            <img
              aria-labelledby='JSONWebToken'
              src='https://cdn.worldvectorlogo.com/logos/jwtio-json-web-token.svg'
              alt='JSONWebToken'
            />
            <img
              aria-labelledby='NPM'
              src='https://cdn.worldvectorlogo.com/logos/npm.svg'
              alt='NPM'
            />
            <img
              aria-labelledby='Figma'
              src='https://cdn.worldvectorlogo.com/logos/figma-1.svg'
              alt='Figma'
            />
            <img
              aria-labelledby='Gatsby'
              src='https://cdn.worldvectorlogo.com/logos/gatsby.svg'
              alt='Gatsby'
            />
          </div>
        </div>
      </div>
    );
  }
}
