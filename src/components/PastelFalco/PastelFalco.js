import './PastelFalco.css';
import { millionRounder, toggleBackgroundFix } from '../Projects/functions.js';

const pastelStats = (stats) => (
  <div className='pastelBox pastelBoxFull'>
    <div className='falcoContainer'>
      <div className='falcoTitle'>
        <h2> {stats.title} </h2>
      </div>
      <div className='falcoContent'>
        <a href={stats.url1} className='falcoSocialBox'>
          <h4> {stats.social1} </h4>
          <h2> {millionRounder(stats.number1)} </h2>
          <h5> {stats.tag1} </h5>
        </a>
        <a href={stats.url2} className='falcoSocialBox'>
          <h4> {stats.social2} </h4>
          <h2> {millionRounder(stats.number2)} </h2>
          <h5> {stats.tag2} </h5>
        </a>
        <a href={stats.url3} className='falcoSocialBox'>
          <h4> {stats.social3} </h4>
          <h2> {millionRounder(stats.number3)} </h2>
          <h5> {stats.tag3} </h5>
        </a>
        <a href={stats.url4} className='falcoSocialBox'>
          <h4> {stats.social4} </h4>
          <h2> {millionRounder(stats.number4)} </h2>
          <h5> {stats.tag4} </h5>
        </a>
        <a href={stats.url5} className='falcoSocialBox'>
          <h4> {stats.social5} </h4>
          <h2> {millionRounder(stats.number5)} </h2>
          <h5> {stats.tag5} </h5>
        </a>
        <a href={stats.url6} className='falcoSocialBox'>
          <h4> {stats.social6} </h4>
          <h2> {millionRounder(stats.number6)} </h2>
          <h5> {stats.tag6} </h5>
        </a>
      </div>
    </div>
  </div>
);

const pastelWorks = (works) => (
  <div className='pastelBox pastelBoxFull'>
    <div className='falcoContainer'>
      <div className='falcoTitle'>
        <h2> Recent Works: </h2>
      </div>
      <div className='falcoContent'>
        <img src={works.url1} alt='Link to work page' />
        <img src={works.url2} alt='Link to work page' />
        <img src={works.url3} alt='Link to work page' />
        <img src={works.url4} alt='Link to work page' />
        <img src={works.url5} alt='Link to work page' />
        <img src={works.url6} alt='Link to work page' />
      </div>
    </div>
  </div>
);

const pastelImage = (image) => {
  const style = {
    backgroundImage: 'src(../../sailormoon.svg)'
  };

  return <div className='pastelBox' style={style} />;
};

const pastelInfo = (info, tags) => (
  <div className='pastelBox'>
    <div className='pastelInfo'>
      <h2>{info.title}</h2>
      {tags ? (
        <div className='pastelInfoTags'>
          <h5> {tags.tag1} </h5>
          <h5> {tags.tag2} </h5>
          <h5> {tags.tag3} </h5>
          <h5> {tags.tag4} </h5>
          <h5> {tags.tag5} </h5>
        </div>
      ) : null}
      <p>{info.text}</p>
    </div>
  </div>
);

const PastelFalco = (props) => (
  <div className='pastelContainer'>
    <button className='pastelReturn' onClick={props.closeGaiaExtra}>
      <h3> X </h3>
    </button>
    <div className='pastelContent'>

      {props.item.image1.url ? pastelImage(props.item.image1) : null}
      {props.item.info1.title
        ? pastelInfo(props.item.info1, props.item.tags)
        : null}
      {props.item.info2.title ? pastelInfo(props.item.info2, null) : null}
      {props.item.logo.url ? pastelImage(props.item.logo) : null}

      {props.item.stats1.title ? pastelStats(props.item.stats1) : null}
    </div>
  </div>
);

export default PastelFalco;
