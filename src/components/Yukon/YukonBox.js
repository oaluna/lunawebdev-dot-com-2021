import './YukonBox.css';

const YukonBox = (props) => (
  <div className='yukonBoxContainer'>
    <div className='yukonBoxContent'>
      <div className='yukonBoxImage' />
      <div className='yukonBoxInfo'>
        <h4> Latest campaign: </h4>
        <p>
          {' '}
          My previous portfolio page lunawebdev.com. Created using React, Gatsby, Node.js{' '}
        </p>
        <h2>
         Visit<span className='secodnaryColor'></span>
        </h2>
      </div>

      <div className='yukonBoxButton' onClick={(e) => props.changePage('works')}>
        <i className='fas fa-angle-right' />
      </div>
    </div>
  </div>
);

export default YukonBox;
