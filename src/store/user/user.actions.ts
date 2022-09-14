import IAction from "../../interfaces/action";
import IUser from "../../interfaces/user";
import { delay } from "../../utils/utils";
import userActionTypes from "./user.actionTypes";

function tryToLogIn() {
    return {
        type: userActionTypes.TRY_TO_LOGIN
    }
}
function loginSuccess(currentUser: IUser): IAction {
    console.info(currentUser);
    return {
        type: userActionTypes.LOGIN_SUCCESS,
        payload: currentUser,
    };
}

function loginFailure(error: string): IAction {
    alert(error);
    return {
        type: userActionTypes.LOGIN_FAILURE,
        payload: error
    }
}

const logIn = (email: string, password: string) => async (dispatch: Function) => {
    dispatch(tryToLogIn());
    await delay(3000);
    try {
        const data = localStorage.getItem('users');
        const users: IUser[] = data ? JSON.parse(data) : [];
        const filteredResults = users.filter((user: IUser) => user.email == email);
        const user = filteredResults.length > 0 ? filteredResults[0] : undefined;
        if (user) {
            if (user.password == password){
                localStorage.setItem('currentUser', JSON.stringify(user));
                dispatch(loginSuccess(user));
            }
            else
                dispatch(loginFailure('Incorrect password!'));
        }
        else {
            dispatch(loginFailure('There is no such user'))
        }
    }
    catch (error) {
        dispatch(loginFailure('something went wrong, try again later!'));
    }

}

function registerSucces(): IAction {
    console.log('registered successfully...');
    return {
        type: userActionTypes.REGISTER_SUCCESS,
    }
}

function registerFailure(error: string): IAction {
    return {
        type: userActionTypes.REGISTER_FAILURE,
        payload: error
    }
}
function tryToRegister() {
    return {
        type: userActionTypes.TRY_TO_REGISTER
    }
}
const register = (userData: IUser) => async (dispatch: Function) => {
    //validate user data then..
    dispatch(tryToRegister());
    try {
        await delay(3000);
        const data = localStorage.getItem('users');
        const users: IUser[] = data ? JSON.parse(data) : [];
        users.push(userData);
        localStorage.setItem('users', JSON.stringify(users));
        dispatch(registerSucces())
    }
    catch (error) {
        dispatch(registerFailure('Error happened!! try again later'));
    }
}
export { logIn, register };