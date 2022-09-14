import IAction from "../../interfaces/action";
import IUser from "../../interfaces/user";
import { delay } from "../../utils/utils";
import userActionTypes from "./user.actionTypes";


function loginSuccess(currentUser: IUser): IAction {
    return {
        type: userActionTypes.LOGIN_SUCCESS,
        payload: currentUser,
    };
}

function loginFailure(error: string): IAction {
    return {
        type: userActionTypes.LOGIN_FAILURE,
        payload: error
    }
}

const logIn = (email: string, password: string) => async (dispatch: Function) => {
    await delay(3000);
    const data = localStorage.getItem('users');
    const users: IUser[] = data ? JSON.parse(data) : [];
    const filteredResults = users.filter((user: IUser) => user.email == email);
    const user = filteredResults.length > 0 ? filteredResults[0] : undefined;
    if (user) {
        if (user.password == password)
            dispatch(loginSuccess(user));
        else
            dispatch(loginFailure('Password is incorrect!'));
    }
    else {
        dispatch(loginFailure('There is no such user'))
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
const register = (userData: IUser) => async (dispatch: Function) => {
    //validate user data then..

    try {
        await delay(3000);
        const data = localStorage.getItem('users');
        const users: IUser[] = data ? JSON.parse(data) : [];
        users.push(userData);
        localStorage.setItem('users', JSON.stringify(users));
        dispatch(registerSucces())
    } 
    catch(error){
        dispatch(registerFailure('Error happened!! try again later'));
    }
}
export { logIn, register };