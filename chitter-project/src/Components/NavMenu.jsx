import React from 'react'

export default function NavMenu({ currentUser, setFormData, formData }) {

    function handleSubmit(event) {
        event.preventDefault();
      }
      
      function handleChange(event) {
        const key = event.target.id
        const value = event.target.value
        
        setFormData({ 
          ...formData, 
          [key]: value
        })
      }

    return (
        <div>
            <button>Home</button>
            <form >
                <h2>Sign Up!</h2>
                <input id="username" type="text" placeholder="Enter username" />
                <input id="profilePic" type="text" placeholder="Enter a profile picture" />
                <textarea id="bio" type="text" placeholder="Enter a bio" rows={3} />
                <input type="submit" value="Sign Up" />
            </form>
            <button>Hide Form</button>
            <img src="" alt="user image"></img>
            <button>Sign Out</button>
        </div>
    )
}

// Sign up form
// Hide/show form button
// Home button
// Account button
// Sign-out Button