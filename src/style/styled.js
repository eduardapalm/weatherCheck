import styled from "styled-components";
import image from "../assets/wickedbackground.svg";

export const Body = styled.div`
  position: absolute;
  background-image: url(${image});
  background-size: cover;
  width: 100vw;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  left: 0;
  top: 0;
  @import url("https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap");
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Header = styled.header`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 100vw;
  height: 5.75rem;
`;
export const Input = styled.input`
  min-height: 2rem;
  width: 14rem;
  margin: 0;
  padding: 0;
  border-radius: 0.3125rem 0 0 0.3125rem;
  border: 0;
  outline-style: none;
  text-indent: 0.9375rem;
  background-color: #f1f1f1;
  font-family: "Rajdhani", sans-serif;
  color: #8c8c8c;
`;
export const Button = styled.button`
  min-height: 2rem;
  width: auto;
  margin: 0;
  padding: 0 0.625rem;
  border-radius: 0 0.3125rem 0.3125rem 0;
  border: 0;
  outline-style: none;
  background-color: #0079bd;
  color: #fefefe;
  font-family: "Rajdhani", sans-serif;
  cursor: pointer;
  &:hover {
    min-height: 2rem;
    width: 80px;
    height: 2.1rem;
  }
  `;

  export const Main = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: #fefefe;
  font-size: 25px;
  font-family: "Rajdhani", sans-serif;
  `;

  export const Current = styled.section`
    margin: 0 0 50px 0;
  `

  export const P = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 35px;
  `;

  export const Forecast = styled.section`
  display: flex;
  align-items: space-between;
  flex-direction: row;
`;

export const Days = styled.div`
  margin: 0 16px 0 16px;
`;

export const P2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  margin-bottom: 30px;

  text-align:center;
`;
