import Crystal from '../Crystal/Crystal';
import './Banner.css';
import SvgIcons from '../SvgIcons'
//import Business from '../../business.svg';

const Banner = () => (
  <div className='bannerContainer'>
    <div className='bannerContent'>
      <h2 className='wordPrinterBack'>
        <div className='bannerTitle'>
          <p style={{fontSize: '36px', marginLeft: '70vw', fontWeight: 100}}>https://oscarluna.dev</p>
          <h2 className='wordPrinter'></h2>
        </div>
      </h2>
      <div className='bannerInfo'>
        <h3>
          I'm a frontend developer born and raised in San Francisco, CA. I love
          creating and working on web applications. I have two years of experience as a web developer using JavaScript as well as integrated libraries or frameworks.
        </h3>
      </div>
        <div className='crystalPosition' style={{ maxWidth: '60vw', width: '100%'}}>
        <h1 style={{position: 'absolute', left: '10vw', top: '15vh', fontSize: '96px'}}>Welcome!<br/> My name is <br/> <span style={{color: 'slateblue', fontFamily: 'La storia -demo-'}}>Oscar</span></h1>
    {/*    <Crystal />
       <img
          src={Logo}
          style={{
            transform: 'scale(.3, .3) rotateY(180deg) rotateX(45deg)',
            position: 'absolute',
            top: '-115vh',
            left: '-40vw'
          }}
          alt='Working on a project together'
        /> */}
        {/* <lottie-player
          autoplay
          loop
          mode='normal'
          src='https://assets4.lottiefiles.com/packages/lf20_iorpbol0.json'
          style={{
            marginLeft: '12vw',
            marginTop: '20vh',
            width: '275px', height: '275px'
          }}></lottie-player> */}
          {/* <SvgIcons
            iconName='oscarArmandoLunaLogo'

          /> */}
      </div>
    </div>
</div>
);

export default Banner;
