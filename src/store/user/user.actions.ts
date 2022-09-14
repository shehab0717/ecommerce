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

function loginFailure(erros: string[]): IAction {
    alert(erros);
    return {
        type: userActionTypes.LOGIN_FAILURE,
        payload: erros
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
            if (user.password == password) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                dispatch(loginSuccess(user));
            }
            else
                dispatch(loginFailure(['Incorrect password!']));
        }
        else {
            dispatch(loginFailure(['There is no such user']))
        }
    }
    catch (error) {
        dispatch(loginFailure(['something went wrong, try again later!']));
    }

}

function registerSucces(userData: IUser): IAction {
    console.log('registered successfully...');
    return {
        type: userActionTypes.REGISTER_SUCCESS,
        payload: userData
    }
}

function registerFailure(erros: string[]): IAction {
    return {
        type: userActionTypes.REGISTER_FAILURE,
        payload: erros
    }
}
function tryToRegister() {
    return {
        type: userActionTypes.TRY_TO_REGISTER
    }
}

function validateUser(userData: IUser) {
    const errors: Array<string> = [];
    if (!validateEmail(userData.email))
        errors.push('Email is not valid');
    if (!validateName(userData.name))
        errors.push('User name must be 8 characters at least');
    if (!validatePassword(userData.password, userData.passwordConfirm ?? ''))
        errors.push('password must be 6 characters at least');
    return errors;

}
const register = (userData: IUser) => async (dispatch: Function) => {
    //validate user data then..
    const errors = validateUser(userData);
    if (errors.length > 0) {
        dispatch(registerFailure(errors));
        return;
    }

    dispatch(tryToRegister());
    try {
        await delay(3000);
        const data = localStorage.getItem('users');
        const users: IUser[] = data ? JSON.parse(data) : [];
        users.push(userData);
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('currentUser', JSON.stringify(userData));
        dispatch(registerSucces(userData))
    }
    catch (error) {
        dispatch(registerFailure(['Error happened!! try again later']));
    }

}

const validateEmail = (email: string) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const validateName = (name: string) => {
    return name.length > 7;
}
const validatePassword = (password: string, passwordConfirm: string) => {
    return password.length > 5 && password === passwordConfirm;
}


export { logIn, register };

