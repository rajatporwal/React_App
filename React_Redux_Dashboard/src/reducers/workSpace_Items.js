import { WorkSpace_Fetch } from '../types';

export default function workSapce_Items (state = null, action) {
    switch (action.type) {

        case WorkSpace_Fetch:
            return action.data;

        default:
            return state;
    }
}

