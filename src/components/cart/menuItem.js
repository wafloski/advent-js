import React from 'react';
import * as S from './cart.styles';

import { formatPrice } from './cart';

export const MenuItem = ({ item, handleAdd }) => {
  const { image, alt, name, price, count, id } = item;

  const isInCart = Boolean(count > 0);
  const addHandler = () => handleAdd(id);

  return (
    <>
      <div className='plate'>
        <img src={`/images/${image}`} alt={alt} className='plate'/>
      </div>
      <div className='content'>
        <div className='title'>{name}</div>
        <S.Price>{formatPrice(price)}</S.Price>
        {isInCart
          ? <button className='in-cart'>In cart</button>
          : <button className='add' onClick={addHandler}>Add to Cart</button>
        }
      </div>
    </>
  )
}
