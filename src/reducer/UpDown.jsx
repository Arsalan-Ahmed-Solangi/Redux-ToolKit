const initState = 5;
const changeCount = (state = initState, action) => {
  if (action.type == "INCREMENT") {
    return state + 1;
  } else if (action.type == "DECREMENT") {
    return state - 1;
  } else {
    return state;
  }
};

export default changeCount;
