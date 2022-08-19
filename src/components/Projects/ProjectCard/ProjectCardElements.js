import styled from "styled-components";

export const Card = styled.div`
  .SectionTitle {
    width: 100%;
    text-align: center;
  }
  display: grid;
  grid-gap: 2rem;
  margin-bottom: 4rem;
  grid-template-columns: 1fr;
  border-bottom: 1px solid rgb(0, 0, 0);

  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.11) 0%,
    rgba(255, 255, 255, 0.06) 85%
  );

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    border-bottom: 0;
    padding-bottom: 0;
  }
  @media (max-width: 767px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 1rem 0;
  }
`;

export const CardLeft = styled.div`
  background: #151418;
  border-radius: 5px;
  padding: 0;

  justify-self: center;
  backdrop-filter: blur(12px);

  &img {
    border-radius: 3px;
    height: auto;
    z-index: 100;
    padding: 0;
    margin: 0;
  }
`;

export const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(6px);
  padding: 1em;
  h4 {
    font-size: 1.5rem;
    font-weight: 400;
    color: #f6f6f6;
  }

  p {
    font-weight: 400;
    max-width: 440px;
    margin-top: 10px;
    margin-bottom: 1rem;
    padding: 1rem;
    text-align: center;
    color: #f6f6f6;

    @media (min-width: 992px) {
      text-align: start;
    }
  }
  @media (min-width: 992px) {
    align-items: flex-start;
    margin-top: 1rem;
  }
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Stack = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  .stackTitle {
    font-weight: 500;
    margin-right: 10px;
    font-size: 17px;
    color: #f6f6f6;
  }

  .tags {
    font-size: 15px;
    font-weight: 400;
    color: #26f6f6;
  }
`;

export const BtnGroup = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
`;
