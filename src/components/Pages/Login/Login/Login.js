import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useMatch, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const emailRef = useRef('')
    const passRef = useRef('')


    const match = useMatch('/login')

    const handleSubmitLogin = event => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passRef.current.value
        signInWithEmailAndPassword(email, password)
    };

    const navigate = useNavigate()


    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }
    if (error) {
        alert('Account Login Failed! Please Try Again!')
    }
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div>

            </div>
            <figure className="h-screen flex bg-gray-100">
                <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-1">

                    <div className="text-primary m-6">
                        <div className='text-center mb-3'>
                            <Link className={match ? 'bg-gray-900 text-gray-50 px-8 py-2 rounded-md mr-3' : ''} to='/login'>LOGIN</Link>
                            <Link className={match ? '' : ' text-gray-50'} to='/register'>REGISTER</Link>
                        </div>
                        <div className="flex items-center mt-3 justify-center">
                            <h1 className="text-2xl font-medium text-primary mt-2 mb-6">
                                Login to your account
                            </h1>
                        </div>
                        <form onSubmit={handleSubmitLogin}>
                            <label className="text-left">Email:</label>
                            <input
                                name="email"
                                type="text"
                                ref={emailRef}
                                placeholder="Email"
                                className={
                                    "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                                }
                            />
                            <label>Password:</label>
                            <input
                                name="password"
                                type="password"
                                ref={passRef}
                                placeholder="Password"
                                className={
                                    "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                                }
                            />
                            <div className="flex items-center mt-3 justify-center">
                                <button
                                    className={
                                        "bg-gray-900 hover:bg-rose-700 py-2 px-4 text-md text-white rounded border border-blue focus:outline-none focus:border-black"
                                    }
                                    value="Login"
                                >
                                    Login
                                </button>
                            </div>
                            <SocialLogin></SocialLogin>
                        </form>
                        <div className="flex items-center mt-3 justify-center">
                            <button className={"justify-center text-blue-500 hover:underline"}>
                                Need to register? Sign up for free
                            </button>
                        </div>
                    </div>

                </div>
            </figure>
        </div>
    );
}


export default Login;