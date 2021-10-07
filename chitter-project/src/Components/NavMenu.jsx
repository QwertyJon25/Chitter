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
            
            <form >
                <h2>Sign Up!</h2>
                <br/>
                <input id="username" type="text" placeholder="Enter username" />
                <br/>
                <input id="profilePic" type="text" placeholder="Enter a profile picture" />
                <br/>
                <textarea id="bio" type="text" placeholder="Enter a bio" rows={3} />
                <br/>
                <input type="submit" value="Sign Up" />
                <button>Hide Form</button>
            </form>
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