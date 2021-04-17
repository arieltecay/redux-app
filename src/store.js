import { createStore } from "redux";
const initialState = {
  players: [],
  main: [],
  suplents: [],
};

const reducerTrainer = (state = initialState, action) => {
  return state;
};
export default createStore(reducerTrainer);
