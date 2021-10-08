import React from 'react'

export default function UserCard({ userData, setCurrentUser }) {
    const { username, profilePic} = userData

//onClick Functionality to profile pic to redirect to "profile page" rendered in main component
    
    return (
       <div className="user-card" onClick={() => {setCurrentUser(userData)}}> 
            <img src ={profilePic} alt={username} /> 
            <span>{username}</span>
       </div>
    )
}