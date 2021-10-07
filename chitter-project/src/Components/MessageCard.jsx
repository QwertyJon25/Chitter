import React from 'react'

export default function MessageCard({postData, user}) {
    const {username, profilePic} = user
    const {content, likes} = postData
    
    return (
        <div>
            <img src={profilePic} alt="pic"/>
            <span>{username}</span>
            <p>{content}</p>
            <button>❤</button>
            <span>{likes}</span>
        </div>
    )
}
