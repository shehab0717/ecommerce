import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../store/store";
import { register } from "../../store/user/user.actions";
import { RootState } from "../../store/store";



const SignUp = function (): JSX.Element {
    const dispatch = useAppDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const tryToRegister = useSelector(({ userReducer }: RootState) => userReducer.tryToRegister);

    const { v4: uuidv4 } = require('uuid');

    function onRegister(event: any) {
        event.preventDefault();
        const id = uuidv4();
        console.log(id);
        dispatch(register({ id: id, name, email, password }))

    }

    return (
        <div className="">
            <div className="mx-auto md:w-1/2 text-center px-8 py-3 shadow-xl border rounded-md mt-10">
                <h2 className="text-2xl font-semibold my-5">Sign up</h2>
                <form>
                    <input className="block w-full mb-4" type='text' placeholder='Full Name' value={name} onChange={(event) => { setName(event.target.value) }} />
                    <input className="block w-full mb-4" type='text' placeholder='Email' value={email} onChange={(event) => { setEmail(event.target.value) }} />
                    <input className="block w-full mb-4" type='password' placeholder='Password' value={password} onChange={(event) => { setPassword(event.target.value) }} />
                    <input className="block w-full mb-4" type='password' placeholder='Confirm password' value={passwordConfirm} onChange={(event) => { setPasswordConfirm(event.target.value) }} />
                    <button
                        className={`w-full bg-green-500 border-0 text-white font-light py-2.5 hover:bg-green-400`}
                        onClick={onRegister}
                        disabled={tryToRegister}
                    >
                        {tryToRegister?'loading...':'Create Account'}</button>
                </form>
                <p className="my-3 text-gray-400">By signing up, you agree to the <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a></p>
            </div>
            <p className="text-center mt-4 text-gray-500">Already have an account? <Link to='/signin' className="text-blue-500 underline">Log in</Link></p>
        </div>
    )
}

export default SignUp;