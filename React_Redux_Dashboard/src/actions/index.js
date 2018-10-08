import axios from 'axios';
import { Object_Fetch } from '../types';
import { InsightLibrary_Fetch } from '../types';
import { WorkSpace_Fetch } from '../types';
import { dropDown_Fetch } from '../types';


export const selectWorkSpace = data => ({
    type: WorkSpace_Fetch,
    data
});

export const selectdropDown = data => ({
    type: dropDown_Fetch,
    data
});

export const selectLibrary = data => ({
    type: InsightLibrary_Fetch,
    data
});

export const selectObject = data => ({
    type: Object_Fetch,
    data
});


export const getWorkspace = () => dispatch =>{
    axios.get('workSpace.json')
    .then(result => {
    dispatch(selectWorkSpace(result.data))
    return result;
  })
}

export const getdropDown = () => dispatch => {
    axios.get('dropDown.json')
    .then(result => {
    dispatch(selectdropDown(result.data))
    return result;
})
}


export const getLibrary = () => dispatch =>{
    axios.get('insightLibrary.json')
.then(result => {
    dispatch(selectLibrary(result.data))
    return result;
  })
}

export const getObject = () => dispatch => {
        axios.get('objectItems.json')
        .then(result => {
        dispatch(selectObject(result.data))
        return result;
    })
  }
