import {ADD_NEW_PROFILE,EDIT_PROFILE,GET_ALL_PROFILES, GET_PROFILE, CANCEL_SELECTED_PROFILE} from './constants';
import api from '../api'
export const getAllProfiles = () => async dispatch => {
    const profiles = await api.get('/');
    return dispatch({
      type: GET_ALL_PROFILES,
      payload:profiles.data
    })
  } 

export const addNewProfile = (profile) => async dispatch => {
    const result = await api.post('/',profile);
    return dispatch({
      type: ADD_NEW_PROFILE,
      payload:result.data
    })
  }

  export const editProfile = (profile) => async (dispatch) => {
   
    await api.put(`/${profile.id}`,profile);

    return dispatch({
      type: EDIT_PROFILE,
      payload:profile
    })
  }

  export const getProfile = (id) => async (dispatch) => {
    const result = await api.get(`/${id}`);

    return dispatch({
      type: GET_PROFILE,
      payload:result.data
    })
  }

  export const cancelSelectedProfile = () =>{
    return {
      type:CANCEL_SELECTED_PROFILE,
      payload:null
    }
  }



