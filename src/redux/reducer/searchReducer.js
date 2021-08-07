import { ActionTypes } from "../action/ActionTypes";

const initialState = {
    searchedValue : []
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SEARCHED_VALUE:
            return { ...state, searchedValue: action.payload};
        default:
            return state;
    }
};
export default searchReducer;