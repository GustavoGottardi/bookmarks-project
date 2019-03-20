const initialState = [];

export const tagReducers2 = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'ADD_TAG':
            return [
                ...state,
                action.payload
            ]
        case 'REMOVE_TAG_OF_ITEM':
            state[action.payload.indexDad].tags.splice(action.payload.indexChild, 1);
            // state[action.payload.indexDad].tags = array_tags;
            return [...state]
        case 'DELETE_ITEM':
            return state.filter((item, i) => i !== action.payload)
        default:
        return state;
    }
};
