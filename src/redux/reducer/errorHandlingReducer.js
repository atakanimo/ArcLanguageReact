const initialState = {
  ErrorNewArc: [],
  AnyError: false,
};

const errorHandlingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ERROR_HANDLING_ADD_ARC':
      return { ...state, ErrorNewArc: action.payload };
    case 'ANY_ERROR':
      return { ...state, AnyError: action.payload };
    default:
      return state;
  }
};
export default errorHandlingReducer;
