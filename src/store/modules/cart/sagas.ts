import { all, takeLatest } from 'redux-saga/effects'

function CheckProductStock() {
  console.log('adicionou')

}

export default all([
  takeLatest('ADD_PRODUCT_TO_CART', CheckProductStock)
])