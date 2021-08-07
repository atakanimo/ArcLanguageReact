import { ActionTypes } from "../action/ActionTypes";

const initialState = {
  ErrorNewArc: [],
  AnyError: false,
};

const errorHandlingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ERROR_HANDLING_ADD_ARC:
      return { ...state, ErrorNewArc: action.payload };
    case ActionTypes.ANY_ERROR:
      return { ...state, AnyError: action.payload };
    default:
      return state;
  }
};
export default errorHandlingReducer;
