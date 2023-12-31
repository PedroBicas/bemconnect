import styled from "styled-components";

export const Container = styled.div`
  padding: 2vw;
  background-color: #94b699;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 700px) {
    flex-wrap: wrap
  }
`;

export const Image = styled.img`
margin: 40px;
width: 30%;
`;

export const Text = styled.h1`
  font-weight: 400;
  font-size: 8vw;
  line-height: 6vw;
  text-align: center;
  color: #ffffff;
  margin: 2vw;
  
  @media screen and (min-width: 500px) {
    font-size: 3.5rem;
    line-height: 50px;
    margin: 1rem;
  }
`;
