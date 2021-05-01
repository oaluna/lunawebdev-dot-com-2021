import './404.css';

const ErrorPage = () => {
  return (
    <div className='text-wrapper'>
      <h1 className='title' data-content='404'>
        404
      </h1>

      <p
        className='subtitle'
        data-content="Oops, the page you're looking for doesn't exist">
        Oops, the page you're looking for doesn't exist.
      </p>

      <div className='buttons'>
        <a className='button' href='/'>
          Go to homepage
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
