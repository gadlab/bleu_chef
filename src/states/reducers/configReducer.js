import { createReducer } from '@reduxjs/toolkit'; 

const initialState = {
    currentLanguage: 'English',
    currentUser: {
        pseudo: null,
        firstName: null,
        lastName: null,
        email: null
    }
}

export const configReducer = createReducer(initialState, {

    SET_LANGUAGE: (state, action) => {
        state.currentLanguage=action.payload.language
    },
    SET_USER: (state, action) => {
        state.currentUser=action.payload.user
    }
})