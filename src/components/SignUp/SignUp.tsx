

const SignUp = function (): JSX.Element {
    return (
        <>
            <div className="text-center px-8 py-3 shadow-xl border rounded-md">
                <h2 className="text-2xl font-semibold my-5">Sign up</h2>
                <form>
                    <input className="block w-full mb-4" type='text' placeholder='Full Name' />
                    <input className="block w-full mb-4" type='text' placeholder='Email' />
                    <input className="block w-full mb-4" type='text' placeholder='Password' />
                    <input className="block w-full mb-4" type='text' placeholder='Confirm password' />
                    <button className='w-full bg-green-500 border-0 text-white font-light py-2.5 hover:bg-green-400'>Create Account</button>
                </form>
                <p className="my-3 text-gray-400">By signing up, you agree to the <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a></p>
            </div>
            <p className="text-center mt-4 text-gray-500">Already have an account? <a href="" className="text-blue-500 underline">Log in</a></p>
        </>
    )
}

export default SignUp;