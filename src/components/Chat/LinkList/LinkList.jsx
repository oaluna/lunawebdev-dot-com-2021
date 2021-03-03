import React from 'react';

import './LinkList.css';

const LinkList = (props) => {
  console.log(props);
  const linkMarkup = props.options.map((link) => (
    <li key={link.id} className="link-list-item">
      <a className="link-list-item-url" href={link.url}>{link.text}</a>
    </li>
  ));

  return <ul className="link-list">{linkMarkup}</ul>;
};



export default LinkList;
