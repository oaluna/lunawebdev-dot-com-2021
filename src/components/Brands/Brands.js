import './Brands.css';

const BrandsSection = () => (
  <div className='sectionContainer'>
    <div className='sectionContent'>
      <div className='sectionTitle'>
        <h3>Technologies I'm most familiar with:</h3>
      </div>

      <div className='brandsList'>
        <img
          src='https://cdn.worldvectorlogo.com/logos/react-2.svg'
          alt='ReactJS'
        />
        <img src='../assets/nextjs-icon.svg' alt='NextJS' />
        <img
          src='https://cdn.worldvectorlogo.com/logos/apollo-graphql-1.svg'
          alt='Apollo'
        />
        <img
          src='https://cdn.worldvectorlogo.com/logos/graphql.svg'
          alt='GraphQL'
        />
        <img
          src='https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg'
          alt='NodeJS'
        />
        <img
          src='https://cdn.worldvectorlogo.com/logos/redux.svg'
          alt='Redux'
        />
        <img
          src='https://cdn.worldvectorlogo.com/logos/sass-1.svg'
          alt='Sass'
        />
        <img
          src='https://cdn.worldvectorlogo.com/logos/mongodb.svg'
          alt='MongoDB'
        />
      </div>
    </div>
  </div>
);

export default BrandsSection;
