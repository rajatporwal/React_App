import {combineReducers} from 'redux';
import zoom_Items from './zoom_Items';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    zoom_Items
});

export default allReducers
