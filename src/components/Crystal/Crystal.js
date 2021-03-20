import './Crystal.css';
import SailorMoon from '../../sailormoon.svg';
const Crystal = () => (
  <div className='crystalContainer'>
    <div className='crystalContent gradient-pattern'>
      <img
        src={SailorMoon}
        style={{
          transform: 'scale(2, 2)',
          zIndex: -3
        }}
        alt='Bishoujo Senshi Sailor Moon!'
      />
      <div className='crystalShadow'>
        <img
          src={SailorMoon}
          style={{
            transform: 'scale(2, 2)',
            zIndex: -3
          }}
          alt='Bishoujo Senshi Sailor Moon!'
        />
        <div className='crystalMain'>
          <img
            src={SailorMoon}
            style={{
              transform: 'scale(2, 2)',
              zIndex: -3
            }}
            alt='Bishoujo Senshi Sailor Moon!'
          />
          <div className='crystalFragments'>
            <img
              src={SailorMoon}
              style={{
                transform: 'scale(2, 2)',
                zIndex: -3
              }}
              alt='Bishoujo Senshi Sailor Moon!'
            />
            <div className='crystalGlow'>
              <img
                src={SailorMoon}
                style={{
                  transform: 'scale(2, 2)',
                  zIndex: -3
                }}
                alt='Bishoujo Senshi Sailor Moon!'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Crystal;
