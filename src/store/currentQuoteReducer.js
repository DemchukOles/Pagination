const defaultState = {
  currentQuote: {},
};

export const currentQuoteReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_CURRENT_QUOTE":
      return { currentQuote: action.payload };
    default:
      return state;
  }
};
