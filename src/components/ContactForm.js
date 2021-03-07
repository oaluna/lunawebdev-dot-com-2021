import React from 'react';
import emailjs from 'emailjs-com';

import SvgIcons from './SvgIcons.js';

import './pages.css';
import './components.css';

export default function ContactForm() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'gmail',
        'template_fvg6gzb',
        e.target,
        'user_GNoYMqZXu8puUlBH1AHpn'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  }

  return (
    <div className='fullSection'>
      <div className='fullSectionContent limitWidthContent'>
        <div className='contactFormContainer'>
          <h1>Contact</h1>
          <h5 style={{ padding: 25 }}>
            Fill out the form below to get started with a FREE 30-minute web
            consultation.
          </h5>

          <form
            className='contactForm'
            onSubmit={sendEmail}
            style={{ width: '85%' }}>
            <div className='form-group'>
              <label htmlFor='name'>
                {' '}
                <h5>Name: </h5>{' '}
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
                <h5>Email address: </h5>{' '}
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
                <h5>Your message:</h5>{' '}
              </label>
              <textarea
                id='message'
                cols='30'
                rows='5'
                name='message'
                placeholder='Tell me about your project, and a time I can set up a virtual consultation and speak directly.'></textarea>
            </div>

            <button type='submit' className='simpleBtn simpleBtnDark'>
              <h4> SEND </h4>
            </button>
          </form>

          <h5>or contact me directly at:</h5>
          <h3>oscar@oscarluna.dev</h3>

          <SvgIcons icon={oscarArmandoLunaLogo} />
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
