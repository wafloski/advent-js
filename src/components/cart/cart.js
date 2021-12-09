import React, {useState} from 'react';

import * as S from './cart.styles';

import { menuItems } from './mockedMenuItems';

import { MenuItem } from "./menuItem";
import {CartItem} from "./cartItem";

const texts = {
  title: 'To Go Menu',
  cart: 'Your Cart',
  subtotal: 'Subtotal: ',
  tax: 'Tax: ',
  total: 'Total: '
}

export const formatPrice = (price) => {
  return <><S.LittlePricePrefix>PLN </S.LittlePricePrefix>{price/100}</>;
};

const Cart = () => {
  const [total, setTotal] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [cart, setCart] = useState([]);

  const handleAdd = (item) => {
    setCart([item, ...cart]);
  };

  return (
    <S.OuterWrapper>
      <S.InnerWrapper>
        <S.Panel>
          <S.Title>{texts.title}</S.Title>
          <S.List className='list menu'>
            {menuItems.map((item, index) => (
              <li key={index}>
                <MenuItem item={item} addProduct={handleAdd}/>
              </li>
            ))}
          </S.List>
        </S.Panel>
        <S.Panel>
          <S.Title>{texts.cart}</S.Title>
          {cart.length ?
            <S.Cart className='cart-summary'>
              {cart.map((item, index) => (
                <li key={index}>
                  <CartItem item={item} />
                </li>
              ))}
            </S.Cart> : null
          }
          <S.Total>
            <div className="line-item">
              <div className="label">{texts.subtotal}</div>
              <S.Price>{formatPrice(subtotal)}</S.Price>
            </div>
            <div className="line-item">
              <div className="label">{texts.tax}</div>
              <S.Price>{formatPrice(tax)}</S.Price>
            </div>
            <div className="line-item">
              <div className="label">{texts.total}</div>
              <S.Price>{formatPrice(total)}</S.Price>
            </div>
          </S.Total>
        </S.Panel>
      </S.InnerWrapper>
    </S.OuterWrapper>
  )
}

export default Cart;
