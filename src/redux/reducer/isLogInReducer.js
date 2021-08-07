import { ActionTypes } from "../action/ActionTypes";

const initialState = {
  isLogin: false,
  Name: '',
};

const isLogInReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_NAME:
      return { ...state, Name: action.payload };
    case ActionTypes.IS_LOG_IN:
      return { ...state, isLogin: action.payload };
    default:
      return state;
  }
};
export default isLogInReducer;
