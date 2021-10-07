import React from 'react'


export default function NewPlantForm({ newUser, handleSubmit, handleChange }) {
  return (
    <div className="new-user-form">
      <h2>Sign Up!</h2>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <br/>
        <input 
          type="text"
          id="username"
          value={newUser.username}
          onChange={handleChange}
        />
        <br/>
        <label>Profile Picture:</label>
        <br/>
        <input 
          type="text"
          id="profilePic"
          value={newUser.profilePic}
          onChange={handleChange} 
        />
        <br/>
        <label>Bio:</label>
        <br/>
        <input 
          type="text"
          id="bio"
          value={newUser.bio}
          onChange={handleChange} 
          rows={3} 
        />
        <br/>
        <input type="submit" value="Sign Up"/>
      </form>
    </div>
  );
}

