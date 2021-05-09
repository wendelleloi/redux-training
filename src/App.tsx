import React from 'react';
import { Provider } from 'react-redux';
import Catalog from './components';

import store from './store/index'

function App() {
  return (
    <Provider store={store}>
      <Catalog></Catalog>
    </Provider>
  );
}

export default App;
