import { Reducer } from "redux";
import { ICartState } from "./types";

const INITIAL_STATE: ICartState =  {
  items: []
}

const cart: Reducer<ICartState> = () => {
  return INITIAL_STATE
}

// function cart() {
//   return []
// }

export default cart;