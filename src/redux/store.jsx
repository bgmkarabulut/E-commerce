import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import logger from "redux-logger";

import clientReducer from "./reducers/clientReducer";
import productReducer from "./reducers/productReducer";
import shoppingCartReducer from "./reducers/shoppingCartReducer";

// Combine all reducers
const rootReducer = combineReducers({
  client: clientReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer,
});

// Create store with middleware
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
