import React, { useRef } from 'react';
import { Link, useLocation, useMatch, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const match = useMatch('/register')

    const nameRef = useRef('')
    const emailRef = useRef('')
    const passRef = useRef('')



    const handleSubmitRegister = event => {
        event.preventDefault()
        // const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passRef.current.value;

        createUserWithEmailAndPassword(email, password)
    };
    const navigate = useNavigate()


    let location = useLocation();

    let from = location.state?.from?.pathname || "/";


    if (user) {
        navigate(from, { replace: true });
    }
    if (error) {
        alert('Could not create your account at this time! Please Try Again Later!')
    }
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <figure className="h-screen flex bg-gray-100">
            <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-1">

                <div className=" m-6">
                    <div className='text-center mb-3'>
                        <Link className={match ? '' : ' text-gray-50 '} to='/login'>LOGIN</Link>
                        <Link className={match ? 'bg-gray-900 text-gray-50 px-8 py-2 rounded-md ml-3' : ''} to='/register'>REGISTER</Link>
                    </div>
                    <div className="flex items-center mt-3 justify-center">
                        <h1 className="text-2xl  font-medium  mt-2 mb-6">
                            Create A New Account
                        </h1>
                    </div>
                    <form onSubmit={handleSubmitRegister}>
                        <label className="text-left">Username:</label>
                        <input
                            name="username"
                            type="text"
                            ref={nameRef}
                            placeholder="Username"
                            className={
                                "w-full p-2  border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                            }
                        />
                        <label className="text-left">Email:</label>
                        <input
                            name="email"
                            type="text"
                            ref={emailRef}
                            placeholder="Email"
                            className={
                                "w-full p-2  border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                            }
                        />
                        <label>Password:</label>
                        <input
                            name="password"
                            type="password"
                            ref={passRef}
                            placeholder="Password"
                            className={
                                "w-full p-2  border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                            }
                        />
                        <label>Confirm Password:</label>
                        <input
                            name="confirmPassword"
                            type="password"
                            placeholder="Confirm Password"
                            className={
                                "w-full p-2  border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                            }
                        />
                        <div className="flex items-center mt-3 justify-center">
                            <button
                                className={
                                    "bg-gray-900 hover:bg-rose-700 py-2 px-8 text-md text-white rounded border border-blue focus:outline-none focus:border-black"
                                }
                                value="Signup"
                            >
                                Signup
                            </button>
                        </div>
                    </form>
                    <div className="flex items-center mt-3 justify-center">
                        <button className={"justify-center text-blue-500 hover:underline"}>
                            Need to register? Sign up for free
                        </button>
                    </div>
                </div>

            </div>
        </figure>
    );
}

export default Register;