import React from 'react';
import { useSelector } from 'react-redux';

const Catalog = () => {

  const store = useSelector(state => state)

  console.log(store)

  return <h1>catalog</h1>
}

export default Catalog