const initialState = {
  isLogin: false,
  Name: '',
};

const isLogInReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_NAME':
      return { ...state, Name: action.payload };
    case 'IS_LOG_IN':
      return { ...state, isLogin: action.payload };
    default:
      return state;
  }
};
export default isLogInReducer;
