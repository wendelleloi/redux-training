import React, { useEffect, useState } from 'react';
import api from '../services/api';

import CatalogItem from './CatalogItem';

import { IProduct } from '../store/modules/cart/types';

const Catalog = () => {

  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get('products').then((response) => {
      setCatalog(response.data)
    })
  },[])

  return (
    <main>
      <h1>Catalog</h1>
      {catalog.map((product) => (
        <CatalogItem key={product.id} product={product}/>
      ))}
    </main>
  ) 
}

export default Catalog