import React, {useCallback, useEffect, useState} from 'react';

import * as S from './cart.styles';

import { menuItems } from './mockedMenuItems';

import { MenuItem } from './menuItem';
import { CartItem } from './cartItem';

const texts = {
  title: 'To Go Menu',
  cart: 'Your Cart',
  subtotal: 'Subtotal: ',
  tax: 'Tax: ',
  total: 'Total: '
}

const TAX_RATE = 0.08;

export const formatPrice = (price) => <><S.LittlePricePrefix>PLN </S.LittlePricePrefix>{price/100}</>;

const Cart = () => {
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [cart, setCart] = useState(menuItems);

  const countSubtotal = useCallback(() => {
    const subtotal = cart.reduce((acc, item) => {
      return acc + (item.count * item.price);
    }, 0);
    setSubtotal(subtotal);
    setTax((Math.round((TAX_RATE * subtotal * 100) / 100)));
  }, [cart]);

  useEffect(() => {
    countSubtotal();
  }, [countSubtotal]);

  const handleAdd = (itemId) => {
    setCart(cart.map(item => {
      if (item.id === itemId) {
        return ({
          ...item,
          count: item.count + 1,
        });
      } else {
        return item;
      }
    }));
  };

  const handleSubtract = (itemId) => {
    setCart(cart.map(item => {
      if (item.id === itemId) {
        return ({
          ...item,
          count: item.count - 1
        });
      } else {
        return item;
      }
    }));
  };

  return (
    <S.OuterWrapper>
      <S.InnerWrapper>
        <S.Panel>
          <S.Title>{texts.title}</S.Title>
          <S.List className='list menu'>
            {cart.map((item, index) => (
              <li key={index}>
                <MenuItem item={item} handleAdd={handleAdd} />
              </li>
            ))}
          </S.List>
        </S.Panel>
        <S.Panel>
          <S.Title>{texts.cart}</S.Title>
          {cart.length ?
            <S.Cart className='cart-summary'>
              {cart.map((item, index) => (
                item.count > 0 && <li key={index}>
                  <CartItem item={item} handleAdd={handleAdd} handleSubtract={handleSubtract}/>
                </li>
              ))}
            </S.Cart> : null
          }
          <S.Total>
            <div className='line-item'>
              <div className='label'>{texts.subtotal}</div>
              <S.Price>{formatPrice(subtotal)}</S.Price>
            </div>
            <div className='line-item'>
              <div className='label'>{texts.tax}</div>
              <S.Price>{formatPrice(tax)}</S.Price>
            </div>
            <div className='line-item'>
              <div className='label'>{texts.total}</div>
              <S.Price>{formatPrice(subtotal + tax)}</S.Price>
            </div>
          </S.Total>
        </S.Panel>
      </S.InnerWrapper>
    </S.OuterWrapper>
  )
}

export default Cart;
