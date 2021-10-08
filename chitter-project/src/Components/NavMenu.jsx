import React, {useState} from 'react';
import NewUserForm from "./NewUserForm";
import SignInForm from './SignInForm';

export default function NavMenu({userObj, handleChange, handleSignUpSubmit, handleSignInSubmit }) {
  //State variable for sign-up & sign-in form visibility:
  const [signUpV, setSignUpV] = useState(false);
  const [signInV, setSignInV] = useState(false);

  function handleSignUpVisibility(){
    setSignUpV(!signUpV);
    setSignInV(false);
  }

  function handleSignInVisibility(){
    setSignInV(!signInV);
    setSignUpV(false);
  }

  return (
    <div>
      <button onClick={handleSignUpVisibility}>Sign-up</button>
      <button onClick={handleSignInVisibility}>Sign-in</button>
      {signUpV && !signInV ?  
        <NewUserForm 
          userObj={userObj} 
          handleSignUpSubmit={handleSignUpSubmit} 
          handleChange={handleChange} 
        />
        : null
      }
      {signInV && !signUpV ?  
        <SignInForm 
          userObj={userObj} 
          handleSignInSubmit={handleSignInSubmit} 
          handleChange={handleChange}
        />
        : null
      }
      <br/>
    </div>
  )
}

// Sign up form
// Hide/show form button
// Home button
// Account button
// Sign-out Button

