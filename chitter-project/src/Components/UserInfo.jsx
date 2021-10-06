import React from 'react'

export default function UserInfo() {


    
    return (
        <div>
            <img src={profilePic} alt={username}/>
            <h4>{username}</h4>
            <h5>{bio}</h5>
            <h6>Following Count</h6>
            
        </div>
    )
}
