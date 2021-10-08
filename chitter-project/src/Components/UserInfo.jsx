import React from 'react'

export default function UserInfo({ currentUser, messages }) {
    const {username, profilePic, bio} = currentUser

    
    return (
        <div>
            <span>
                <h1>{username}</h1>
            </span>
            {/* <img src={profilePic} alt="dog"/> */}
            <h5>{bio}</h5>
            {messages}
        </div>
    )
}