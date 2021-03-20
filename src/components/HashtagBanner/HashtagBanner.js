import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';
import { ContactMenu } from '../Footer/Footer';
import { CSSTransition } from 'react-transition-group';

const HashtagBanner = (props) => (
  <div className='hashtagBanner'>
    <div
      className={
        this.props.homepageOpen ? 'hashtagTitle' : 'hashtagTitle titleClosed'
      }>
      <h1>
        {' '}
        <span>I create</span> WEB APPLICATIONS{' '}
      </h1>
      <h3>Make your idea into a reality.</h3>
      <button className='mediumButton'> Get Started </button>
    </div>
  </div>
);

export default HashtagBanner;
