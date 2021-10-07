import React from 'react'

export default function UserCard({ userData }) {
    const { username, profilePic} = userData

//onClick Functionality to profile pic to redirect to "profile page" rendered in main component
    
    return (
       <div className="user-card">
            <img src ={profilePic} alt={username} /> 
            <span>{username}</span>
       </div>
    )
}
