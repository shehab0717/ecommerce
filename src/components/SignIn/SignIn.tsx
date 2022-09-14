import { Link } from "react-router-dom";
import { useState } from 'react';
import { useAppDispatch } from "../../store/store";
import { logIn } from "../../store/user/user.actions";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const SignIn = (): JSX.Element => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const isLoggedIn = useSelector(({ userReducer }: RootState) => userReducer.isLoggedIn);
    const tryToLogin = useSelector(({ userReducer }: RootState) => userReducer.tryToLogin);

    const dispatch = useAppDispatch();



    function onLogIn(event: any) {
        //validate data
        event.preventDefault();
        dispatch(logIn(email, password));
    }
    return (
        <div className="p-4 md:w-1/2 mx-auto mt-10">
            <h2 className="text-2xl font-bold my-6 text-center">Sign in to your account</h2>
            <form>
                <input className="w-full rounded-t-md rounded-b-none"
                    type='email'
                    placeholder='Email address'
                    value={email}
                    onChange={(event) => { setEmail(event.target.value) }}
                />
                <input className="w-full rounded-t-none rounded-b-md border-t-0"
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(event) => { setPassword(event.target.value) }}
                />
                <div className="flex flex-row justify-between my-5">
                    <div>
                        <input
                            type='checkbox' id="remember-me" value={rememberMe ? 1 : 0}
                            onChange={(event) => { setRememberMe(event.target.value ? true : false) }}
                        />
                        <label htmlFor="remember-me" className="ml-3 cursor-pointer">Remember me!</label>
                    </div>
                    <a href="" className="text-violet-600 font-semibold hover:underline">Forgot your password?</a>
                </div>
                <button
                    className="w-full bg-violet-600 text-white py-2 my-2 hover:bg-violet-500"
                    onClick={onLogIn}
                    disabled={tryToLogin}
                >{tryToLogin? 'Loading...':'Sign in'}</button>
                <Link to='/signup' className="block text-center text-blue-500 underline">Register</Link>

            </form>
        </div>
    )
}

export default SignIn;