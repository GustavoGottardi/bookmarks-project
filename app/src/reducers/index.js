import { combineReducers } from 'redux';
import { tagReducers2 } from './tagReducers';

export const Reducers = combineReducers({
    tagReducers: tagReducers2
});
