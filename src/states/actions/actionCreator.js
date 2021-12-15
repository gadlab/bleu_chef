// eslint-disable-next-line no-unused-vars
// import store from './index'

export const SET_LANGUAGE = 'SET_LANGUAGE'
export const SET_USER = 'SET_USER'

export const actionSetLanguage = (language) =>  {
    return { type: 'SET_LANGUAGE', payload: { language: language } }
}

export const actionSetUser = (user) =>  {
    return { type: 'SET_USER', payload: { user: user } }
}