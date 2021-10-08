import React, { useState } from 'react'

export default function MessageCard({postData, user, deletePost}) {
    const {username, profilePic} = user
    const {content, likes, postId} = postData

    const[likeCount, setLikeCount] = useState(likes);
    const [decrement, setDecrement] = useState(likes);

    const deleteHandler = () => {
    fetch("http://localhost:6001/posts/" + postId, {method: "DELETE"})
      .then(() => deletePost(postData))
  }
    
    return (
        <div>
            <img src={profilePic} alt="pic"/><br/>
            <span>{username}</span>
            <p>{content}</p>
            <button onClick={() => setLikeCount(likeCount + 1)}>❤️</button>
            <span>{likeCount}</span> <button onClick={deleteHandler} style={{backgroundColor: "red"}}>Delete Post</button><br/>
            <button onClick={() => setDecrement (decrement - 1)}>💔</button>
            <span>{decrement}</span> 
        </div>
    )
}