import './JunoGrid.css';

const ServicesSection = (props) => (
  <>
  <div className='sectionContainer'>
    <div className='sectionContent'>
      <div className='sectionTitle'>
        <h3>What I can do for your business</h3>
      </div>

      <div className='junoContainer'>
        <div className='junoContent'>
          <div className='junoCard'>
            <div className='junoCardImage'>
              <lottie-player
                src='https://assets2.lottiefiles.com/packages/lf20_rycdh53q.json'
                background='transparent'
                speed='1'
                style={{ width: '275px', height: '275px' }}
                loop
                autoplay></lottie-player>
            </div>
            <div className='junoCardInfo'>
              <h4>Lorem Ipsum </h4>
              <p>
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                sodales purus arcu, sit amet pulvinar mauris vulputate et.
                Maecenas sed venenatis purus. Phasellus nec semper libero, eget
                pharetra nulla. Sed viverra maximus lacinia.{' '}
              </p>
            </div>
          </div>

          <div className='junoCard'>
            <div className='junoCardImage'>
              <lottie-player
                src='https://assets8.lottiefiles.com/packages/lf20_miapuf5f.json'
                background='transparent'
                speed='1'
                style={{ width: '300px', height: '300px' }}
                loop
                autoplay></lottie-player>
            </div>
            <div className='junoCardInfo'>
              <h4> Lorem Ipsum </h4>
              <p>
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                sodales purus arcu, sit amet pulvinar mauris vulputate et.
                Maecenas sed venenatis purus. Phasellus nec semper libero, eget
                pharetra nulla. Sed viverra maximus lacinia. Sed condimentum
                lorem orci, vitae finibus nunc viverra a.{' '}
              </p>
            </div>
          </div>

          <div className='junoCard'>
            <div className='junoCardImage'>
              <lottie-player
                src='https://assets9.lottiefiles.com/packages/lf20_avt7utpz.json'
                background='transparent'
                speed='1'
                style={{ width: '250px', height: '250px' }}
                loop
                autoplay></lottie-player>
            </div>
            <div className='junoCardInfo'>
              <h4> Lorem Ipsum </h4>
              <p>
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                sodales purus arcu, sit amet pulvinar mauris vulputate et.
                Maecenas sed venenatis purus. Phasellus nec semper libero, eget
                pharetra nulla. Sed viverra maximus lacinia.{' '}
              </p>
            </div>
          </div>

          <div className='junoCard'>
            <div className='junoCardImage'>
              <lottie-player
                src='https://assets4.lottiefiles.com/packages/lf20_gwwngxas.json'
                background='transparent'
                speed='1'
                style={{ width: '250px', height: '250px' }}
                loop
                autoplay></lottie-player>
            </div>
            <div className='junoCardInfo'>
              <h4> Lorem Ipsum </h4>
              <p>
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                sodales purus arcu, sit amet pulvinar mauris vulputate et.
                Maecenas sed venenatis purus. Phasellus nec semper libero, eget
                pharetra nulla. Sed viverra maximus lacinia. Sed condimentum
                lorem orci, vitae finibus nunc viverra a.{' '}
              </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
  </>
);


export default ServicesSection;
