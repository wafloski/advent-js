import styled from 'styled-components';

export const OuterWrapper = styled.div`
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
  overflow-y: scroll;
  overflow-x: hidden;
  width: 375px;
  height: 95vh;
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
    }
  }
  
  .title {
    font-size: 1.125rem;
    line-height: 20px;
    margin: 0 0 16px 0;
    padding: 0;
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
    transition: .25s;
    
    &:not(.in-cart):hover {
      opacity: .5;
    }
    
    &.in-cart {
      background-color: green;
      cursor: auto;
    }
  }
`;

export const Total = styled.div`
  padding: 35px 30px;
  
  .line-item {
    display: flex;
    align-items: flex-end;
    text-align: right;
    margin-bottom: 20px;
  }

  .line-item .label {
    font-size: 1rem;
    font-weight: bold;
    width: 60%;
  }

  .line-item .amount {
    width: 40%;
  }
`;

export const Price = styled.span`
  font-size: 2rem;
  line-height: 1;
  font-weight: bold;
  margin-left: auto;
  margin-bottom: 10px;
  display: inline-block;
`;

export const LittlePricePrefix = styled.span`
  font-size: 14px;
`;

export const Cart = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0 30px 0 25px;

  li {
    display: grid;
    grid-template-areas: "plate content content"
    "plate quantity price";
    border-bottom: 1px solid #D7D7F9;
    margin-bottom: 20px;
    padding-bottom: 20px;

    &:last-child {
      border-bottom: 0;
      padding-bottom: 0;
    }
  }

  .menu-item {
    margin-bottom: 5px;
  }

  .price {
    margin: 0 0 16px 0;
    font-size: 1.2rem;
    font-weight: bold;
  }

  .plate {
    position: relative;
    height: 64px;
    width: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    grid-area: plate;

    img {
      height: 64px;
      width: 64px;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1;
    }
  }

  .content {
    grid-area: content;
  }
  
  .quantity {
    background: black;
    color: white;
    font-size: 1rem;
    grid-area: quantity;
    font-weight: bold;
    border-radius: 50%;
    height: 32px;
    width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }

  .quantity__wrapper {
    display: flex;
    gap: 10px;
  }

  .quantity__wrapper .quantity {
    background: none;
    color: black;
  }

  .decrease,
  .increase {
    padding: 0;
    height: 32px;
    width: 32px;
    display: block;
    background: #6B00F5;
    font-weight: bold;
    color: #fff;
    transition: .25s;
    border-radius: 50%;
    cursor: pointer;
    border: none;
  }

  .decrease:hover,
  .increase:hover {
    opacity: .5;
  }
`;
