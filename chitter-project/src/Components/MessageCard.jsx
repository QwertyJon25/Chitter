import React, { useState } from 'react'

export default function MessageCard({postData, user}) {
    const {username, profilePic} = user
    const {content, likes} = postData

    const[likeCount, setLikeCount] = useState(likes);
    
    return (
        <div>
            <img src={profilePic} alt="pic"/><br/>
            <span>{username}</span>
            <p>{content}</p>
            <button onClick={() => setLikeCount(likeCount + 1)}>❤</button>
            <span>{likeCount}</span>
        </div>
    )
}