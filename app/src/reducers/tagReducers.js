const initialState = [];

export const tagReducers = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'ADD_TAG':
            return [
                ...state,
                action.payload
            ]
            break;
        case 'REMOVE_TAG_OF_ITEM':
            state[action.payload.indexDad].tags = state[action.payload.indexDad].tags.filter((item, i) => i !== action.payload.indexChild)
            return [...state]
            break;
        case 'DELETE_ITEM':
            state.filter((item, i) => i !== action)
            return [...state];
        default:
        return state;
    }
};
