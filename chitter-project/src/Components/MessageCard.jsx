import React from 'react'

export default function MessageCard({ postData, userData }) {
const { content, likes, id, userId } = postData
const { username, profilePic, bio } = userData

    
    return (
        <div>
            <li className="post-card">
           <img src ={profilePic} alt={username} />
           <h4>{username}</h4>
           <h5>{content}</h5>
           <h6>Likes: {likes}</h6>
           <button>Add Like</button>
       </li>
        </div>
    )
}
