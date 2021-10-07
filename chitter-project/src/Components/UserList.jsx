import React from 'react'
import UserCard from "./UserCard.jsx";

export default function UserList({ users }) {
    const userArray = users.map(userObj => {
        return <UserCard key={userObj.userId} userData={userObj}/>
    })
    
    return (
        <div className="user-list">
            <h3>Suggested Accounts:</h3>
            {userArray}
        </div>
    )
}
