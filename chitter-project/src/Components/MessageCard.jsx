import React, { useState } from 'react'

export default function MessageCard({postData, user, deletePost}) {
    const {username, profilePic} = user
    const {content, likes} = postData

    const[likeCount, setLikeCount] = useState(likes);
    const [decrement, setDecrement] = useState(likes);
    
    return (
        <div>
            <img src={profilePic} alt="pic"/><br/>
            <span>{username}</span>
            <p>{content}</p>
            <button onClick={() => setLikeCount(likeCount + 1)}>❤️</button>
            <span>{likeCount}</span> <button>Delete Post</button><br/>
            <button onClick={() => setDecrement (decrement - 1)}>💔</button>
            <span>{decrement}</span> 
        </div>
    )
}