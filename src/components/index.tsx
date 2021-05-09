import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import api from '../services/api';
import { IProduct } from '../store/modules/cart/types';

const Catalog = () => {

  const store = useSelector(state => state)

  console.log(store)

  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get('products').then((response) => {
      setCatalog(response.data)
    })
  },[])

  return (
    <main>
      {catalog.map((product) => (
        <article key={product.id}>
          <strong>{product.title}</strong> { ' - ' }
          <span>{product.price}</span> { ' - ' }
          <button type="button">Comprar</button>
        </article>
      ))}
    </main>
  ) 
}

export default Catalog