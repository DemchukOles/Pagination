import { createStore, combineReducers } from "redux";
import { currentQuoteReducer } from "./currentQuoteReducer";
import { favoritesQouotesReducer } from "./favoritesQouotesReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  currentQuote: currentQuoteReducer,
  favoritesQouotes: favoritesQouotesReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
