import { combineReducers } from 'redux';
import { tagReducers } from './tagReducers';

export const Reducers = combineReducers({
    addTag: tagReducers,
    removeTagOfItem: tagReducers,
    deleteItem: tagReducers
});
