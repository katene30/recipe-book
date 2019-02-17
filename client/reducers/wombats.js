const initialState = ["sam", "tim"];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_WOMBAT":
      return [...state, action.wombat];
    default:
      return state;
  }
  return state;
};

export default reducer;
