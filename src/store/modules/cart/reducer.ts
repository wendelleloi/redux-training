import { Reducer } from "redux";
import produce from 'immer'

import { ICartState } from "./types";

const INITIAL_STATE: ICartState =  {
  items: []
}

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART': {
      const { product } = action.payload

      return produce(state, draft => {
        draft.items.push({
          product: product,
          quantity: 1
        })
      })

      // return {
      //   ...state,
      //   items: [
      //     ...state.items,
      //     {
      //       product: product,
      //       quantity: 1
      //     }
      //   ]
      // }
    }
    default: {
      return state
    }
  }
}

// function cart() {
//   return []
// }

export default cart;