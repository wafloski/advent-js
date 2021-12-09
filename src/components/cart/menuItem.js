import React, { useState } from 'react';
import * as S from './cart.styles';

import { formatPrice } from './cart';

export const MenuItem = ({ item, addProduct }) => {
  const [isInCart, setInCart] = useState(false);

  const handleAdd = () => {
    addProduct(item);
    setInCart(true);
  }

  return (
    <>
      <div className='plate'>
        <img src={`/images/${item.image}`} alt={item.alt} className='plate'/>
      </div>
      <div className='content'>
        <div className='title'>{item.name}</div>
        <S.Price>{formatPrice(item.price)}</S.Price>
        {isInCart
          ? <button className='in-cart'>In cart</button>
          : <button className='add' onClick={handleAdd}>Add to Cart</button>
        }
      </div>
    </>
  )
}
