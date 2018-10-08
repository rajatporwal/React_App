import { Object_Fetch } from '../types';

export default function navTabObject (state = null, action) {
    switch (action.type) {

        case Object_Fetch:
            return action.data;

        default:
            return state;
    }
}

