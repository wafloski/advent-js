import React from 'react';

import * as S from './cart.styles';

import { menuItems } from './mockedMenuItems';

const texts = {
  title: 'To Go Menu'
}

const Cart = () => {
  const formatPrice = (price) => {
    return (<><span className='little-price'>PLN </span>{price/100}</>);
  };

  return (
    <S.OuterWrapper>
      <S.InnerWrapper>
        <S.Panel>
          <S.Title>{texts.title}</S.Title>
          <S.List className='list menu'>
            {menuItems.map((item) => (
              <li>
                <div className='plate'>
                  <img src={`/images/${item.image}`} alt={item.alt} className='plate'/>
                </div>
                <div className='content'>
                  <div className="title">{item.name}</div>
                  <div className="price">{formatPrice(item.price)}</div>
                  <button className="add">Add to Cart</button>
                </div>
              </li>
            ))}
          </S.List>
        </S.Panel>
      </S.InnerWrapper>
    </S.OuterWrapper>
  )
}

export default Cart;
