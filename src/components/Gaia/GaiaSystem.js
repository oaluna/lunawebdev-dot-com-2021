import { useState } from 'react';
import './GaiaSystem.css';
import projectsData from '../Projects/projectsData';
import worksData from '../../worksData';
import PastelFalco from '../PastelFalco/PastelFalco';
import SvgIcons from '../SvgIcons'
import { millionRounder, toggleBackgroundFix } from '../Projects/functions';

const GaiaSystem = (props) => (
  <div className='gaiaContainer'>
    <div className='gaiaContent'>
      <GetData data={props.data} />
    </div>
  </div>
);

const GetData = (props) => {
  if (props.data === 'projects') {
    const projects = projectsData.map((item) => (
      <GaiaBox key={item.id} item={item} />
    ));
    return projects;
  } else if (props.data === 'works') {
    const projects = worksData.map((item) => (
      <GaiaBox key={item.id} item={item} />
    ));
    return projects;
  }
};

/*---  Clas for displaying single projects  ---*/

const GaiaBox = (props) => {
  const [gaiaExtraOpen, setGaiaExtraOpen] = useState(false);

  const openGaiaExtra = () => {
    if (gaiaExtraOpen !== true) {
      return setGaiaExtraOpen(true);
    } else {
      return null;
    }
  };
  const closeGaiaExtra = () => {
    if (gaiaExtraOpen === true) {
      setGaiaExtraOpen(false);
    }
  };

  const urlImg = {
    backgroundImage: 'url(' + props.item.image1.url + ')'
  };

  return (
    <div className='gaiaBox' style={urlImg} onClick={openGaiaExtra}>
      <div className='gaiaBoxTop'>
        <h3>{props.item.card.title}</h3>

        <p>{props.item.card.url}</p>
      </div>

      <BoxBottom item={props.item} />

      {gaiaExtraOpen ? (
        <GaiaExtra item={props.item} closeGaiaExtra={closeGaiaExtra} />
      ) : null}
    </div>
  );
};

function BoxBottom(props) {
  if (props.item.logo.url !== null) {
    return (
      <div className='gaiaBoxBottom'>
        <SvgIcons
            iconName='oscarArmandoLunaLogo'

          />
      </div>
    );
  } else {
    if (props.item.card.number != null) {
      return (
        <div className='gaiaBoxBottom'>
          <h4> {props.item.card.text} </h4>
          <h2> {millionRounder(props.item.card.number)} </h2>
        </div>
      );
    } else {
      return <h2>Oops!</h2>;
    }
  }
}

/*---  Clas for displaying extra info about project  ---*/

const GaiaExtra = (props) => {
  return (
    <div className='gaiaExtraContainer'>
      <div className='gaiaExtraContent'>
        <PastelFalco item={props.item} closeGaiaExtra={props.closeGaiaExtra} />
      </div>
    </div>
  );
};

export default GaiaSystem;
