const initialState = {
    user: {},
    isLoggedIn: false
}

const LOGOUT_USER = 'LOGOUT_USER'
const LOGIN_USER = 'LOGIN_USER'

export default function reducer(state = initialState, action){
    switch(action.type){
        case LOGIN_USER:
            return {...state, ...action.payload, isLoggedIn: true}
        case LOGOUT_USER:
            return {...state, ...action.payload}
        default: 
            return state    
    }
}