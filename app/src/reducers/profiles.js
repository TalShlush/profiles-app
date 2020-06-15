import { ADD_NEW_PROFILE, EDIT_PROFILE, GET_ALL_PROFILES, GET_PROFILE, CANCEL_SELECTED_PROFILE } from '../actions/constants';
const INITIAL_STATE = {
    profiles: [],
    selectedProfile: null
}

export const profileReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ALL_PROFILES:
            return {
                ...state,
                profiles: action.payload
            }
        case ADD_NEW_PROFILE:
            return {
                ...state,
                profiles: [...state.profiles, action.payload]
            }
        case EDIT_PROFILE:
            return {
                ...state,
                profiles: state.profiles.map((profile) => {
                    if (action.payload.id === profile.id) {
                        return action.payload
                    }
                    else {
                        return profile
                    }
                }),
                selectedProfile:null
            }
        case GET_PROFILE:
            return {
                ...state,
                selectedProfile: action.payload
            }

        case CANCEL_SELECTED_PROFILE:
            return {
                ...state,
                selectedProfile:null
            }
        default:
            return state;

    }
}
