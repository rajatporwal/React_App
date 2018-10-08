import { dropDown_Fetch } from '../types';

export default function dropDown_Items (state = null, action) {
    switch (action.type) {

        case dropDown_Fetch:
            return action.data;

        default:
            return state;
    }
}

