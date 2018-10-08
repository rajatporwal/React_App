import { InsightLibrary_Fetch } from '../types';

export default function insightLibrary_Items (state = null, action) {
    switch (action.type) {

        case InsightLibrary_Fetch:
            return action.data;

        default:
            return state;
    }
}

