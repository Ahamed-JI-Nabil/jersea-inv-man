import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import google from '../../../../images/icons/google.png'
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);


    const navigate = useNavigate()
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }
    if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        alert('Something went Horribly Wrong! Could Not create an Account. Please Try Again')
    }


    return (
        <div className='flex justify-center mt-4'>
            <img className='w-8 h-8 ' onClick={() => signInWithGoogle()} src={google} alt="" />
        </div>
    );
};

export default SocialLogin;