import { Reducer } from "redux";
import produce from 'immer'

import { ICartState } from "./types";

const INITIAL_STATE: ICartState =  {
  items: []
}

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case 'ADD_PRODUCT_TO_CART': {
        const { product } = action.payload

          const productInCartIndex = draft.items.findIndex(item => 
            item.product.id === product.id
          )

          if (productInCartIndex >= 0) {
            draft.items[productInCartIndex].quantity++
          } else {
            draft.items.push({
              product: product,
              quantity: 1
            })
          }

          break;
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
  })
}

// function cart() {
//   return []
// }

export default cart;