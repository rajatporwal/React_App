import { Zoom_Fetch } from '../types';

const initialState = {
    x: 50,
    y: 50
  }

export default function zoomTabObject (state = initialState, action) {
    switch (action.type) {

        case Zoom_Fetch:
        return action.data

        default:
            return state;
    }
}
