import React from 'react'

export default function UserCard({ userData }) {
    const { username, profilePic, bio } = userData

//onClick Functionality to profile pic to redirect to "profile page" rendered in main component
    
    return (
       <li className="card">
           <img src ={profilePic} alt={username} />
           <h4>{username}</h4>
           <h5>{bio}</h5>
       </li>
    )
}
