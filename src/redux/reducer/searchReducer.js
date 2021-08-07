const initialState = {
    searchedValue : []
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SEARCHED_VALUE":
            return { ...state, searchedValue: action.payload};
        default:
            return state;
    }
};
export default searchReducer;