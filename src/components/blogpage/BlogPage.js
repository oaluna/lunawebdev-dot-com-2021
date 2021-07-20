import React, { Component } from 'react';
const projectsData = require('../Data/projectsData');
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import FilterBlurImg from '../FilterBlurImg';
import styled from 'styled-components';
import Medium from '../Medium'

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
        {/* <BlogPageHeader>
          <BlogPageTitle>Blog</BlogPageTitle>
          <BlogPageSubtitle>
            Documenting my dev journey, one commit at a time.
          </BlogPageSubtitle>
        </BlogPageHeader>
        <div className='blog__slider'>
          {this.state.itemRows.map((row, i) => (
            <CardRow>
              {row.map((item, j) => (
                <BlogCardContainer key={j}>
                  <BlogCard {...item} /> */}
                  <Medium />
                {/* </BlogCardContainer>
              ))}
            </CardRow>
          ))}
        </div> */}
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
      <CardPost>
        <img
          src={props.image}
          alt='post image'
          className='card-post__image'
          style={{
            // backgroundImage: props.thumbnail,
            // backgroundSize: 'cover',
            maxWidth: '100vw',
            height: '125px'
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
        <CardText>
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
        </CardText>
      </CardPost>
    </>
  );
}

function BlogPage() {
  return (
    <div className='blogPage'>
      <Slider />
      <span style={{  fontSize: '48px', marginLeft: '50vw', marginTop: '55vh'}}>
      Click <a href="https://medium.com/@oaluna" style={{color: '#f0f'}}><strong>here</strong></a> to read more of my posts.
      </span>
    </div>
  );
}

const CardRow = styled.div`
  position: relative;
  margin-left: 2vw;
  display: flex;
  flex-direction: row;
  flex-wrap: row-wrap;
  max-width: 90vw;
  width: 100%;
  padding: 25px 15px;
  margin: 15px;
  justify-content: center;
  @media (max-width: 900px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;

const BlogPageHeader = styled.div`
  position: relative;
  background-blend-mode: normal;
  opacity: 1;
  backdrop-filter: normal;
`;
const BlogPageTitle = styled.h1`
  margin-top: 20vh;
  text-align: center;
  backdrop-filter: none;
  z-index: 1000;
  opacity: 1;
  color: #fff;
  margin-bottom: 0;
`;
const BlogPageSubtitle = styled.h2`
  text-align: center;
  backdrop-filter: none;
  z-index: 1000;
  font-weight: 300;
`;
const BlogCardContainer = styled.div`
  margin: 0;
  padding: 5;
`;
const CardPost = styled.div`
  position: relative;
  padding: 25px 15px;
  margin: 15px;
  height: 100%;
  overflow: hidden;
  border-radius: 15px;
  box-sizing: border-box;
  transition: all 0.6s ease;
  box-shadow: none !important;
  background: rgba(189, 202, 251, 0.11);
  border: 1px solid rgba(189, 202, 251, 0.11);
  backdrop-filter: blur(22px);
  @media only screen and (max-width: 450px) {
    width: 80vw;
  }
`;

const CardText = styled.div`
  margin-bottom: 0;
  padding: 3 auto;
  display: flex;
  align-items: flex-end;
`;

export default BlogPage;
