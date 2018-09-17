import { createStore, applyMiddleware, compose } from "redux";
import initial from "./Initial"
import reducer from "./Reducer"

const store = createStore(
  reducer,
  initial,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;