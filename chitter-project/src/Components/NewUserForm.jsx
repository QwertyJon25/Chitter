import React from 'react'


export default function NewUserForm({ userObj, handleSignUpSubmit, handleChange }) {
  return (
    <div className="new-user-form">
      <h2>Sign-up!</h2>
      <form onSubmit={handleSignUpSubmit}>
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
        <label>Profile Picture:</label>
        <br/>
        <input 
          type="text"
          id="profilePic"
          value={userObj.profilePic}
          onChange={handleChange} 
        />
        <br/>
        <label>Bio:</label>
        <br/>
        <textarea 
          type="text"
          id="bio"
          value={userObj.bio}
          onChange={handleChange} 
          rows={3} 
        />
        <br/>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
}

