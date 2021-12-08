import styled from 'styled-components';

export const OuterWrapper = styled.div`
  background: url('images/bg__left.svg') left 10% no-repeat,
  url('images/bg__top-right.svg') right top no-repeat,
  #EFF0F6 url('images/bg__btm-right.svg') right bottom no-repeat;
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  min-height: 100%;
  min-width: 100%;
`;

export const InnerWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100vw;
  gap: 50px;
  height: 100vh;
`;

export const Panel = styled.div`
  background: white;
  border-radius: 25px;
  box-sizing: border-box;
  box-shadow: 0 0 70px #C7CBE3;
  height: 875px;
  padding-top: 50px;
  overflow-y: scroll;
  width: 375px;
`;

export const Title = styled.h1`
  padding-left: 40px;
  font-size: 2rem;
  font-weight: bold;
  padding-bottom: 20px;
`;

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  
  &.menu {
    li {
      margin-left: 15px;
      display: flex;
      padding-right: 30px;
      position: relative;
      gap: 20px;
      margin-bottom: 45px;

      &:nth-child(4n + 1):before {
        --background: #e1f1fe
      }

      &:nth-child(4n + 2):before {
        --background: #ffe2f0
      }

      &:nth-child(4n + 3):before {
        --background: #f7f7fe
      }

      &:nth-child(4n + 4):before {
        --background: #defef0
      }
      
      &:before {
        background: var(--background);
        border-bottom-left-radius: 20px;
        border-top-left-radius: 20px;
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 30px;
        top: 0;
        z-index: 1;
      }
    }

    .plate {
      height: 148px;
      width: 148px;
      position: relative;
      z-index: 2;
      top: -15px;
    }

    .content {
      padding-top: 30px;
      position: relative;
      width: 100%;
      z-index: 3;
    }

    .price {
      margin: 0 0 20px 0;
      padding: 0;
      
      .little-price {
        font-size: 14px;
      }
    }
  }
  
  .title {
    font-size: 1.125rem;
    line-height: 20px;
    margin: 0 0 16px 0;
    padding: 0;
  }

  .price,
  .subtotal{
    font-size: 2rem;
    line-height: 1;
    font-weight: bold;
  }

  button {
    background: #6B00F5;
    border: none;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    border-radius: 20px;
    padding: 4px 18px;
    font-size: 1rem;
    color: white;
    font-weight: bold;
    line-height: 1.2;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;

