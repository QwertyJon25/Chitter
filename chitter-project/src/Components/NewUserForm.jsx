import React, { useState } from 'react'


export default function NewPlantForm({ addNewUser }) {

  const [username, setUsername] = useState("")
  const [profilePic, setProfilePic] = useState("")
  const [bio, setBio] = useState("")

//   const [newUser, setNewUser] = useState({})

//   const handleChange = (e) => {
//     setNewUser((prevObj) => { return {...prevObj, [e.target.name]: e.target.value}} )
//   }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newUser = {
      username: username,
      profilePic: profilePic,
      bio: bio
    }
   
    const options = {
      headers: {"Content-Type": "application/json"},
      method: "POST",
      body: JSON.stringify(newUser)
    }
   
    fetch("http://localhost:6001/users", options)
      .then(r => r.json())
      .then(newUser => {
        addNewUser(newUser)
        setProfilePic("");
        setBio("");
        setUsername("")
      })
    
  }

  return (
    <div className="new-user-form">
      <h2>Sign Up!</h2>
      <form onSubmit={handleSubmit}>
        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" username="username" placeholder="Enter User Name" /><br/>
        <input value={profilePic} onChange={(e) => setProfilePic(e.target.value)} type="text" name="profilePic" placeholder="Enter a Profile Picture" /><br/>

        <input value={bio} onChange={(e) => setBio(e.target.value)} type="text" name="bio" placeholder="Enter a bio" rows={3} /><br/>
        <input type="submit" value="Sign Up"/>
      </form>
    </div>
  );
}

