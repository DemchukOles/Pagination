const defaultState = {
  favoritesQouotes: [],
};

export const favoritesQouotesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_FAVORITES_QUOTES":
      return {
        ...state,
        favoritesQouotes: [...state.favoritesQouotes, action.payload],
      };
    case "REMOVE_QUOTES":
      return {
        favoritesQouotes: action.payload,
      };
    default:
      return state;
  }
};
