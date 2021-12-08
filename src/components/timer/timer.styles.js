import styled from 'styled-components';

export const OuterWrapper = styled.div`
  align-items: center;
  background: #2B2A30;
  display: flex;
  justify-content: center;
  margin: 0;
  min-height: 100vh;
  min-width: 100vw;
  padding: 0;
`;

export const InnerWrapper = styled.div`
  align-items: center;
  border-radius: 50%;
  box-shadow: -5px 14px 44px #000000, 5px -16px 50px rgba(255, 255, 255, 0.15);
  display: flex;
  width: 518px;
  height: 518px;
  justify-content: center;
  position: relative;
`;

export const TimerWrapper = styled.div`
  align-items: center;
  background: radial-gradient(71.4% 71.4% at 51.7% 28.6%, #3A393F 0%, #17171A 100%);
  border-radius: 50%;
  box-shadow: inset 0px 0px 114px rgba(0, 0, 0, 0.45);
  color: white;
  display: flex;
  flex-direction: column;
  height: 500px;
  justify-content: center;
  position: relative;
  width: 500px;
  z-index: 2;
`;

export const Time = styled.div`
  display: flex;
  font-family: "bebas";
  font-size: 196px;
  margin: 30px auto;
  position: relative;
  top: 30px;
`;

export const Input = styled.input`
  border: 0;
  border-bottom: 1px dashed white;
  background: none;
  color: white;
  font-family: "bebas";
  font-size: 196px;
  height: 170px;
  width: 150px;
  text-align: center;
  outline: none;
  
  &:disabled {
    border-bottom: none;
  }
`;

export const ActionButton = styled.button`
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  letter-spacing: 10px;
  line-height: 20px;
  background: none;
  color: white;
  opacity: .5;
  border: none;
  text-transform: uppercase;
  margin-bottom: 20px;
  
  &:hover {
    opacity: 1;
  }
`;

export const Settings = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  opacity: 1;
  color: #fff;

  :hover {
    opacity: 1;
  }
`;
