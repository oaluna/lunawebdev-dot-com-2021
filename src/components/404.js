import styled, { keyframes } from 'styled-components';

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const ErrorHeader = styled.h1`
  display: flex;
  margin-top: 20vh;
  margin-left: 40vw;
  text-align: center;
  width: 100%;
  font-size: 350px;
  color: white;
  z-index: 1000;
  animation: 3s ${FadeIn} ease-in;
`;

const ErrorPage = () => (
  <section className='wrapper'>
    <ErrorHeader>404</ErrorHeader>
    <h2>Oh no! A thing happened.</h2>
    <hr />
    <p>Content not found. Go back?</p>
    <button>Go back</button>
  </section>
);
export default ErrorPage;
