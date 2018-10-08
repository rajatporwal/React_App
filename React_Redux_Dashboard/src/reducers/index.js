import {combineReducers} from 'redux';
import object_Items from './object_Items';
import insightLibrary_Items from './insightLibrary_Items';
import workSpace_Items from './workSpace_Items';
import dropDown_Items from './dropDown_Items'

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    object_Items,
    insightLibrary_Items,
    workSpace_Items,
    dropDown_Items
});

export default allReducers
