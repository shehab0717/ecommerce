
const SignIn = (): JSX.Element => {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold my-6 text-center">Sign in to your account</h2>
            <form>
                <input className="w-full rounded-t-md rounded-b-none" type='email' placeholder='Email address' />
                <input className="w-full rounded-t-none rounded-b-md border-t-0" type='password' placeholder='Password' />
                <div className="flex flex-row justify-between my-5">
                    <div>
                        <input type='checkbox'/>
                        <label className="ml-3">Remember me!</label>
                    </div> 
                    <a href="" className="text-violet-600 font-semibold">Forgot your password?</a>
                </div>
                <button className="w-full bg-violet-600 text-white py-2 my-2">Sign in</button>
            </form>
        </div>
    )
}

export default SignIn;