import { ActionTypes } from '../action/ActionTypes';

const initialState = {
  getArc: [],
  Request: false,
  searchedData: [],
};

const apiReducers = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_ARC_REQUEST:
      return { ...state, Request: true };
    case ActionTypes.GET_DATA_SUCCESS:
      return { ...state, getArc: action.payload, Request: false };
    case ActionTypes.DELETE_ARC:
      return {...state, getArc: state.getArc.filter(x=>x.id != action.payload)};
    case ActionTypes.NEW_ARC:
      return { ...state, getArc: [...state.getArc, action.payload] };
    case ActionTypes.EDIT_ARC:
      var index = state.getArc.findIndex((x) => x.id == action.payload.id);
      if (index == -1) return state;
      state.getArc[index] = action.payload;
      return { ...state, editArc: [...state.getArc] };
    case ActionTypes.GET_SEARCHED_DATA:
      return { ...state, searchedData: action.payload };
    case ActionTypes.EDIT_ARC_ACTIVE:
      let getArc = state.getArc.filter((arc) => arc.id != action.payload);
      return { ...state, getArc: [...getArc] };
    default:
      return state;
  }
};
export default apiReducers;
