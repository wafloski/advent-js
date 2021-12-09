import React, { useState } from 'react';

import { formatPrice } from "./cart";

import * as S from './cart.styles';

export const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <div className="plate">
        <img src={`/images/${item.image}`} alt="Fish Sticks and Fries" className="plate"/>
        <div className="quantity">{quantity}</div>
      </div>
      <div className="content">
        <p className="menu-item">{item.name}</p>
        <p className="price">{formatPrice(item.price)}</p>
      </div>
      <div className="quantity__wrapper">
        <button className="decrease">
          -
        </button>
        <div className="quantity">1</div>
        <button className="increase">
          +
        </button>
      </div>
      <S.Price>
        {formatPrice(quantity * item.price)}
      </S.Price>
    </>
  )
};
