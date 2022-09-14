import IAction from "../../interfaces/action";
import IUser from "../../interfaces/user";
import userActionTypes from "./user.actionTypes";


type userState = {
    isLoggedIn: boolean,
    tryToLogin: boolean,
    tryToRegister: boolean,
    currentUser?: IUser,
    error?:boolean,
    errorMessage?:'string'

}

const initialState: userState = {
    isLoggedIn: false,
    currentUser: undefined,
    tryToLogin: false,
    tryToRegister: false
}

export default function userReducer(state = initialState, action: IAction): userState {
    switch (action.type) {
        case userActionTypes.TRY_TO_LOGIN:
            return {
                ...state,
                tryToLogin: true
            };
        
        case userActionTypes.LOGIN_FAILURE:
            return {
                ...state,
                tryToLogin: false,
                error: true,
                errorMessage: action.payload
            };

        case userActionTypes.LOGIN_SUCCESS:
            return{
                ...state,
                tryToLogin: false,
                isLoggedIn: true,
                currentUser: action.payload
            };

        case userActionTypes.TRY_TO_REGISTER:
            return{
                ...state,
                tryToRegister: true
            };

        case userActionTypes.REGISTER_FAILURE:
            return{
                ...state,
                tryToRegister: false,
                error: true,
                errorMessage: action.payload,
            };

        case userActionTypes.REGISTER_SUCCESS:
            return {
                ...state,
                tryToRegister: false,
            };
        default:
            return state;
    }
}