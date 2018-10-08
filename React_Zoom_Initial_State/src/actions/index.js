import { Object_Fetch } from '../types';
import { Zoom_Fetch} from '../types';

export const selectZoomData = data => ({
    type: Zoom_Fetch,
    data
});
