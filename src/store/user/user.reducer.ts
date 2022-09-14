import IAction from "../../interfaces/action";
import IUser from "../../interfaces/user";
import userActionTypes from "./user.actionTypes";

function currentUser(): IUser | boolean {
    const data = localStorage.getItem('currentUser');
    return data ? JSON.parse(data) : false;

}

type userState = {
    isLoggedIn: boolean,
    tryToLogin: boolean,
    tryToRegister: boolean,
    currentUser: Function,
    error?: boolean,
    errorMessage?: 'string',
    registerErrors?: string[],
    loginErrors?: string[]

}

const initialState: userState = {
    isLoggedIn: false,
    currentUser: currentUser,
    tryToLogin: false,
    tryToRegister: false
}

export default function userReducer(state = initialState, action: IAction): userState {
    switch (action.type) {
        case userActionTypes.TRY_TO_LOGIN:
            return {
                ...state,
                tryToLogin: true,
                loginErrors: []
            };

        case userActionTypes.LOGIN_FAILURE:
            return {
                ...state,
                tryToLogin: false,
                error: true,
                loginErrors: action.payload
            };

        case userActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                tryToLogin: false,
                isLoggedIn: true,
                loginErrors: []
            };

        case userActionTypes.TRY_TO_REGISTER:
            return {
                ...state,
                tryToRegister: true,
                registerErrors: [],
            };

        case userActionTypes.REGISTER_FAILURE:
            return {
                ...state,
                tryToRegister: false,
                error: true,
                registerErrors: action.payload
            };

        case userActionTypes.REGISTER_SUCCESS:
            return {
                ...state,
                tryToRegister: false,
                registerErrors: [],
            };

        default:
            return state;
    }
}