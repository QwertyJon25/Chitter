import React from 'react'
import MessageCard from "./MessageCard.jsx";
//import UserInfo from "./UserInfo";

export default function Main({ users, posts }) {
    const postsArray = posts.map(postObj => {
        return( 
            <MessageCard 
                key={postObj.id}  
                user={users.find(user => user.userId === postObj.userId)} 
                postData={postObj} 
            />
        )
    })
    return (
        <div>
            {postsArray}
        </div>
    )
}

//<UserInfo />