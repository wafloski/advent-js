import styled from 'styled-components';

export const PianoWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .white-keys {
    fill: white;
  }

  .white-keys:hover {
    fill: #ffd200;
  }

  .black-keys {
    fill: black;
  }

  .black-keys:hover {
    fill: #f40082;
  }
`;

