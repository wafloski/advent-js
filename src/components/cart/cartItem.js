import React from 'react';

import { formatPrice } from "./cart";

import * as S from './cart.styles';

export const CartItem = ({ item, handleAdd, handleSubtract }) => {
  const { image, count, name, price, alt, id } = item;

  const addItem = () => handleAdd(id);
  const subtractItem = () => handleSubtract(id);

  return (
    <>
      <div className="plate">
        <img src={`/images/${image}`} alt={alt} className="plate"/>
        <div className="quantity">{count}</div>
      </div>
      <div className="content">
        <p className="menu-item">{name}</p>
        <p className="price">{formatPrice(price)}</p>
      </div>
      <div className="quantity__wrapper">
        <button className="decrease" onClick={subtractItem}>
          -
        </button>
        <div className="quantity">{count}</div>
        <button className="increase" onClick={addItem}>
          +
        </button>
      </div>
      <S.Price>
        {formatPrice(count * price)}
      </S.Price>
    </>
  )
};
