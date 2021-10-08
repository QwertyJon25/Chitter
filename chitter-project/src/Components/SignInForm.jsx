import React from 'react'

export default function SignInForm({ userObj, handleSignInSubmit, handleChange }) {
    return (
        <div className="sign-in-form">
            <form onSubmit={handleSignInSubmit} >
                <h2>Sign-in!</h2>
                <label>Username:</label>
                <br/>
                <input 
                    type="text"
                    id="username"
                    value={userObj.username}
                    onChange={handleChange}
                />
                <br/>
                <label>Password:</label>
                <br/>
                <input 
                    type="text"
                    id="password"
                    value={userObj.password}
                    onChange={handleChange}
                />
                <br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}
