import React, { useCallback, useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { addProductToCart } from '../store/modules/cart/actions';

import api from '../services/api';

import { IProduct } from '../store/modules/cart/types';

const Catalog = () => {

  const dispatch = useDispatch()

  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get('products').then((response) => {
      setCatalog(response.data)
    })
  },[])

  const hanldeAddProductToCart = useCallback((product: IProduct) => {
    dispatch(addProductToCart(product))
  }, [dispatch])

  return (
    <main>
      {catalog.map((product) => (
        <article key={product.id}>
          <strong>{product.title}</strong> { ' - ' }
          <span>{product.price}</span> { ' - ' }
          <button
            type="button"
            onClick={() => hanldeAddProductToCart(product)}
          >
            Comprar
          </button>
        </article>
      ))}
    </main>
  ) 
}

export default Catalog