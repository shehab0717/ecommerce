import { Link } from "react-router-dom";

const SignIn = (): JSX.Element => {
    return (
        <div className="p-4 md:w-1/2 mx-auto mt-10">
            <h2 className="text-2xl font-bold my-6 text-center">Sign in to your account</h2>
            <form>
                <input className="w-full rounded-t-md rounded-b-none" type='email' placeholder='Email address' />
                <input className="w-full rounded-t-none rounded-b-md border-t-0" type='password' placeholder='Password' />
                <div className="flex flex-row justify-between my-5">
                    <div>
                        <input type='checkbox' id="remember-me" />
                        <label htmlFor="remember-me" className="ml-3 cursor-pointer">Remember me!</label>
                    </div>
                    <a href="" className="text-violet-600 font-semibold hover:underline">Forgot your password?</a>
                </div>
                <button className="w-full bg-violet-600 text-white py-2 my-2">Sign in</button>
                <Link to='/signup' className="block text-center text-blue-500 underline">Register</Link>

            </form>
        </div>
    )
}

export default SignIn;