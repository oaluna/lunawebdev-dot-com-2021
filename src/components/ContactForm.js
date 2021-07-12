import React from 'react';
import emailjs, { init } from 'emailjs-com';

import SvgIcons from './SvgIcons.js';

import './pages.css';
import './components.css';

init('user_GNoYMqZXu8puUlBH1AHpn');

export default function ContactForm() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .send('gmail', 'template_fvg6gzb')

      .then(
        (result) => {
          alert(result.text);
        },
        (error) => {
          alert(error.text);
        }
      );

    e.target.reset();
  }

  return (
    <div className='fullSection'>
      <div className='fullSectionContent limitWidthContent'>
        <div className='contactFormContainer'>
          <h3>Contact</h3>
          <h6 style={{ padding: 25 }}>
            Fill out the form below to get started with a FREE 30-minute web
            consultation.
          </h6>
          <form
            className='contactForm'
            onSubmit={sendEmail}
            style={{ width: '85%' }}>
            <div className='form-group'>
              <label htmlFor='name'>
                {' '}
                <p style={{fontSize: '30px'}}>Name: </p>{' '}
              </label>
              <input
                type='text'
                id='name'
                name='name'
                placeholder='Last, First'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>
                {' '}
                <p style={{fontSize: '30px'}}>Email address: </p>{' '}
              </label>
              <input
                type='email'
                id='email'
                name='email'
                placeholder='example@email.com'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='message'>
                {' '}
                <p style={{fontSize: '30px'}}>Your message: </p>{' '}
              </label>
              <textarea
                id='message'
                cols='30'
                rows='5'
                name='message'
                placeholder='Tell me about your project, and a time I can set up a virtual consultation and speak directly.'></textarea>
            </div>

            <button type='submit' className='simpleBtn simpleBtnDark'>
              <h4> Send </h4>
            </button>
          </form>
          <h5>or contact me directly at:</h5>
          <br /> <h6 style={{padding: '25px'}}>oscar@oscarluna.dev</h6>
        </div>
      </div>
      <div
        className='backSvg backRightBottom noShowTablet'
        style={{ bottom: '5%', right: '15%', transform: 'rotate(15deg)' }}>
        <SvgIcons
          style={{ textShadow: '0px, 0px, 5px, rgb(240, 248, 255)' }}
          dimension='400px'
          iconName='heartMessage'
          fillColor='rgba(240, 248, 255, 1)'
        />
      </div>
      <div
        className='backSvg noShowTablet'
        style={{
          bottom: '5%',
          left: '15%',
          transform: 'rotate(-15deg)'
        }}>
        <SvgIcons
          style={{ textShadow: '0px, 0px, 5px, rgb(240, 248, 255)' }}
          dimension='200px'
          iconName='star'
          fillColor='rgb(240, 248, 255)'
        />
      </div>
      <div
        className='backSvg onlyTablet'
        style={{
          bottom: '0%',
          left: '5%',
          transform: 'rotate(15deg)'
        }}>
        <SvgIcons
          style={{ textShadow: '0px, 0px, 5px, rgb(240, 248, 255)' }}
          dimension='150px'
          iconName='heartMessage'
          fillColor='rgb(240, 248, 255)'
        />
      </div>
    </div>
  );
}
