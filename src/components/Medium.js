import React, { useState, useEffect } from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col
} from 'reactstrap';
import styled from 'styled-components';
var moment = require('moment');

const Medium = () => {
  const [mediumData, setMediumData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@oaluna`
    )
      .then((res) => res.json())
      .then((response) => {
        setMediumData(response.items);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const finalData = mediumData;

  return (
    <div>
      <h1
        style={{
          textAlign: 'center',
          position: 'relative',
          width: '100vw',
          marginTop: '20vh',
          marginBottom: '-25vh',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
        Blog
      </h1>
      <h2
        style={{
          position: 'relative',
          marginTop: '27vh',
          marginBottom: '-20vh',
          textAlign: 'center',
          fontSize: '24px',
          lineHeight: 1.4,
          fontWeight: 100
        }}>
        Apart from creating web-applications, I now write for a publication on
        Medium. Here's some of the recent posts on my page, which you can also
        view{' '}
        <a href='https://medium.com/@oaluna' style={{ textDecoration: 'none' }}>
          here
        </a>
      </h2>
      {isLoading && (
        <p
          style={{
            position: 'relative',
            marginTop: '45vh',
            marginLeft: '42vw',
            zIndex: 100,
            fontSize: '40px'
          }}>
          Loading...
        </p>
      )}
      <div
        id='medium'
        className='container mt-3'
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: '20vh',
          marginLeft: '2vw'
        }}>
        <Row
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center'
          }}>
          {finalData.map((article) => (
            <Col
              md='3'
              style={{
                position: 'relative',
                marginTop: '12vh',
                display: 'flex',
                flexWrap: 'wrap'
              }}
              key={article.guid}>
              <div>
                <Card
                  style={{
                    background: 'rgba( 255, 255, 255, 0.25 )',
                    boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
                    width: '400px',
                    maxHeight: '350px',
                    margin: '15px',
                    alignItems: 'center',
                    padding: '0 0 25px 0',
                    borderRadius: '15px',
                    border: '1px solid rgba(189, 202, 251, 0.11)'
                  }}>
                  <CardBody style={{ margin: '0 0 10px 0', zIndex: 1 }}>
                    <CardImg
                      top
                      width='100%'
                      height='auto'
                      src={
                        article.thumbnail
                          ? article.thumbnail
                          : 'https://via.placeholder.com/300/333/fff.png'
                      }
                      style={{
                        position: 'relative',
                        transform: 'scale(250px, 400px)',
                        maxHeight: '250px',
                        backgroundSize: 'cover',
                        borderRadius: '15px 15px 0 0'
                      }}
                      alt='img'
                    />
                    <CardTitle style={{ margin: '10px' }}>
                      <a href={article.link}>
                        <h2>{article.title}</h2>
                      </a>
                    </CardTitle>
                    <CardSubtitle
                      className={{ marginLeft: '10px', fontWeight: 100 }}>
                      <h3>
                        Published:{' '}
                        {moment(article.pubDate).format('dddd, MMMM Do YYYY')}
                      </h3>
                    </CardSubtitle>
                  </CardBody>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Medium;
