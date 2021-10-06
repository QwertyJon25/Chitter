import React from 'react'
import MessageCard from "./MessageCard.jsx";
import UserInfo from "./UserInfo";

export default function Main({ posts, users }) {

    
    return (
        <>
            <div><ul className="user-info">
            { users.map(userObj => <UserInfo
            key={userObj}
            userData={userObj}
            posts={posts}
            />)}
            </ul>
            </div>
            <div>
            <ul className="message-cards">{ posts.map(postObj => <MessageCard 
            key={postObj}
            postData={postObj}
            users={users}
            />)}
            </ul>
            </div>
        </>
    )
}
