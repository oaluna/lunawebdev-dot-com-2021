import './PageBanner.css';

const PageBanner = (props) => {
  const showPageBanner = (pageName) => {
    if (pageName === 'influencers') {
      return (
        <div className='pageBanner'>
          <div className='pageTitle'>
            <h1>
              Lorem ipsum <span>sit amet, consectetur adipiscing elit.</span>
            </h1>
          </div>
          <div className='pageDescriptionBox'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sodales purus arcu, sit amet pulvinar mauris vulputate et.
              Maecenas sed venenatis purus.
            </p>
            <button
              className='mediumButton'
              onClick={(e) => props.handlePage('aboutme')}>
              {' '}
              Know more{' '}
            </button>
          </div>
        </div>
      );
    }
    if (pageName === 'services') {
      return (
        <div className='pageBanner'>
          <div className='pageTitle'>
            <h1>
              I create <span> stunning </span>web applications!
            </h1>
          </div>
          <div className='pageDescriptionBox'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sodales purus arcu, sit amet pulvinar mauris vulputate et.
              Maecenas sed venenatis purus.
            </p>
            <button
              className='mediumButton'
              onClick={(e) => props.handlePage('works')}>
              {' '}
              See works{' '}
            </button>
          </div>
        </div>
      );
    }
    if (pageName === 'works') {
      return (
        <div className='pageBanner'>
          <div className='pageTitle' style={{ marginTop: '-10vh' }}>
            <h1>
              Like this template?
              <br />
              visit <br />
              <span>
                https://
                <br />
                oscarluna
                <br />
                .dev/Projects
              </span>{' '}
              for
              <br /> more
            </h1>
          </div>
          <div className='pageDescriptionBox'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sodales purus arcu, sit amet pulvinar mauris vulputate et.
              Maecenas sed venenatis purus.
            </p>
            <button
              className='mediumButton'
              onClick={(e) => props.handlePage('aboutme')}>
              {' '}
              Ask us anything{' '}
            </button>
          </div>
        </div>
      );
    }
    if (pageName === 'aboutme') {
      return (
        <div className='pageBanner'>
          <div className='pageTitle'>
            <h1>
              <span> Oscar Armando Luna </span>
            </h1>
          </div>
          <div className='pageDescriptionBox'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sodales purus arcu, sit amet pulvinar mauris vulputate et.
              Maecenas sed venenatis purus.
            </p>
          </div>
        </div>
      );
    }
  };

  return <div className='pageWrapper'>{showPageBanner(props.pageName)}</div>;
};

export default PageBanner;
