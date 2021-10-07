import React from 'react'
import NewUserForm from "./NewUserForm"

export default function NavMenu({newUser, handleSubmit, handleChange}) {
  return (
    <div>
        <NewUserForm 
          newUser={newUser} 
          handleSubmit={handleSubmit} 
          handleChange={handleChange} 
        />
        <br/>
        <button>Home</button>
    </div>
)
}

// Sign up form
// Hide/show form button
// Home button
// Account button
// Sign-out Button