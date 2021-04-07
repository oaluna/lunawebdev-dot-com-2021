import React, { Component } from 'react';
const projectsData = require('./Data/projectsData');
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import FilterBlurImg from './FilterBlurImg';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = { itemRows: [], profileLink: '' };
  }
  blogURL =
    'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fdev.to%2Ffeed%2Foaluna';

  componentDidMount() {
    fetch(this.blogURL)
      .then((res) => res.json())
      .then((data) => {
        // create two-dimensional array with 3 elements per inner array
        const profileLink = data.feed.link;
        const res = data.items; //This is an array with the content. No feed, no info about author etc..
        const posts = res.filter((item) => item.categories.length > 0);

        this.setState({ profileLink: profileLink });
        const itemRows = [];
        posts.forEach((item, i) => {
          item['profilelink'] = this.state.profileLink; // push profile link inside the JSON
          const row = Math.floor(i / 3);
          if (!itemRows[row]) itemRows[row] = [];
          itemRows[row].push(item);
        });
        this.setState({ itemRows: itemRows });
      });
  }
  render() {
    return (
      <>
        <div
          className='blogpage-header'
          style={{
            position: 'relative',
            backgroundBlendMode: 'normal',
            opacity: 1,
            backdropFilter: 'normal'
          }}>
          <h1
            style={{
              marginTop: '20vh',
              textAlign: 'center',
              backdropFilter: 'none',
              zIndex: 1000,
              opacity: 1,
              color: '#fff',
              marginBottom: 0
            }}>
            Blog
          </h1>
          <h2
            style={{
              textAlign: 'center',
              backdropFilter: 'none',
              zIndex: 1000,
              fontWeight: 300
            }}>
            Documenting my dev journey, one commit at a time.
          </h2>
        </div>
        <div className='blog__slider'>
          {this.state.itemRows.map((row, i) => (
            <div
              className='row'
              key={i}
              style={{
                position: 'relative',
                marginLeft: '2vw',
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'row-wrap',
                maxWidth: '90vw',
                width: '100%',
                padding: '25px 15px',
                margin: '15px',
                justifyContent: 'center'
              }}>
              {row.map((item, j) => (
                <div key={j} sm='8' className='m-0 p-5'>
                  <BlogCard {...item} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </>
    );
  }
}

function ShortenText(text, startingPoint, maxLength) {
  return text.length > maxLength ? text.slice(startingPoint, maxLength) : text;
}
function ToText(node) {
  let tag = document.createElement('div');
  tag.innerHTML = node;
  node = tag.innerText;
  return node;
}

function BlogCard(props) {
  const monthShortname = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];
  const splitDate = props.pubDate.split(' ');
  const date = splitDate[0];
  const splitMonth = date.split('-');
  const finalDate =
    monthShortname[Number(splitMonth[1] - 1)] +
    ' ' +
    splitMonth[2] +
    ',' +
    ' ' +
    splitMonth[0];

  return (
    <>
      <div
        small
        className='card-post w-50 h-50'
        style={{
          position: 'relative',
          padding: '25px 15px',
          margin: '15px',
          height: '100%',
          overflow: 'hidden',
          borderRadius: '15px',
          boxSizing: 'border-box',
          transition: 'all 0.6s ease',

          boxShadow: 'none !important',
          background: 'rgba(189, 202, 251, 0.11)',

          border: '1px solid rgba(189, 202, 251, 0.33)',
          backdropFilter: 'blur(12px)'
        }}>
        <div
          className='card-post__image'
          style={{
            backgroundImage: props.imageCard,
            backgroundSize: 'cover',
            maxWidth: '100vw'
          }}
        />
        <div className='Card'>
          <h2 className='card-title'>
            <a
              className='text-fiord-blue'
              href={props.link}
              target='_blank'
              rel='noopener noreferrer'>
              {ShortenText(props.title, 0, 100)}
            </a>
          </h2>
          <p className='card-text'>
            {ShortenText(ToText(props.content), 0, 120) + '...'}
          </p>
        </div>
        <div className='text-muted border-top mb-0 py-3 d-flex align-items-end'>
          <span className='text-dark'>
            <a
              href={props.profilelink}
              target='_blank'
              rel='noopener noreferrer'>
              <FontAwesomeIcon
                icon={faUser}
                style={{
                  fontSize: '14px',
                  margin: '5px 5px 0px 5px',
                  alignItems: 'center'
                }}
              />{' '}
              {props.author}
            </a>
          </span>
          <br />

          <span className='text-muted'>
            <FontAwesomeIcon
              icon={faCalendarAlt}
              style={{
                fontSize: '14px',
                margin: '5px 5px 0px 5px',
                alignItems: 'center'
              }}
            />{' '}
            {finalDate}
          </span>
        </div>
      </div>
    </>
  );
}

export default function BlogPage() {
  return (
    <div className='blogPage'>
      <Slider />
    </div>
  );
}
