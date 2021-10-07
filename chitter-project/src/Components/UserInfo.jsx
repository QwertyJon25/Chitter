import React from 'react'

export default function UserInfo({ currentUser, messages}) {
    const {username, bio} = currentUser

    
    return (
        <div>
            <span>
                <h1>{username}</h1>
            </span>
            <h5>{bio}</h5>
            {messages}
        </div>
    )
}