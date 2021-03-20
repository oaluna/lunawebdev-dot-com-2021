import './TitanBox.css';

const TitanBox = (props) => (
  <div className='sectionContainer'>
    <div className='sectionContent'>
      <div className='sectionTitle'>
        <h1>What Makes oscarluna.dev your Optimal Solution?</h1>
      </div>
      <div className='titanBoxContainer'>
        <div className='titanBoxContent'>
          <div className='titanBoxImage titanBoxIl2'>
          <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_VczlJO.json"  background="transparent"  speed="1"  style={{width: '650px', height: '650px', margin: 'auto'}} loop autoplay></lottie-player>
          </div>
          <div className='titanBoxInfo'>
            <h2>
              Strong <span className='secodnaryColor'> Engagement </span>{' '}
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sodales purus arcu, sit amet pulvinar mauris vulputate et.
              Maecenas sed venenatis purus. Phasellus nec semper libero, eget
              pharetra nulla. Sed viverra maximus lacinia. Sed condimentum lorem
              orci, vitae finibus nunc viverra a. Suspendisse volutpat imperdiet
              leo, sit amet tincidunt sapien interdum et.
            </p>
          </div>

          <div className='titanBoxInfo'>
            <h2>
              High Quality <span className='secodnaryColor'> Content </span>{' '}
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sodales purus arcu, sit amet pulvinar mauris vulputate et.
              Maecenas sed venenatis purus. Phasellus nec semper libero, eget
              pharetra nulla. Sed viverra maximus lacinia.
            </p>
          </div>
          <div className='titanBoxImage titanBoxIl1'> <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_4VvdIQ.json"  background="transparent"  speed="1"  style={{width: '900px', height: '900px', marginLeft: '-10vw'}} loop  autoplay></lottie-player></div>

          <div className='titanBoxImage titanBoxIl3'>
          <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_B2qAl3/data.json"  background="transparent"  speed="1"  style={{width: '800px', height: '800px', marginLeft: '-8vw', marginTop: '-25vh'}}  loop  autoplay></lottie-player>
          </div>
          <div className='titanBoxInfo'>
            <h2>
              Fast and Secure <span className='secodnaryColor'> Delivery </span>{' '}
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sodales purus arcu, sit amet pulvinar mauris vulputate et.
              Maecenas sed venenatis purus. Phasellus nec semper libero, eget
              pharetra nulla. Sed viverra maximus lacinia. Sed condimentum lorem
              orci, vitae finibus nunc viverra a. Suspendisse volutpat imperdiet
              leo, sit amet tincidunt sapien interdum et.
            </p>
          </div>
          <div className='titanBoxBackground'></div>
        </div>
      </div>
    </div>
  </div>
);

export default TitanBox;
