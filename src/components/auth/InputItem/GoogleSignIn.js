import React, { useContext } from 'react';
import { useLocation } from 'react-router';
import { UserContext } from '../useAuth';
import google from './g.svg'


const GoogleSignIn = () => {
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } }
  const { signInWithGoogle } = useContext(UserContext)
  return (
    <div className="google-sign-in" onClick={() => signInWithGoogle(from)}>
      <span> Continue with google <img src={google} alt="google" /></span>
    </div>
  );
};

export default GoogleSignIn;