const initialState = {
  name: "Badala",
};

const globalReducer = (state = initialState, action) => {
  if (action.type === "UPDATE_NAME") {
    return {
      ...state,
      name: "Hylmi",
    };
  }
  return state;
};

export default globalReducer;
