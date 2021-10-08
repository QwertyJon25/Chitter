import React from 'react'
import UserCard from "./UserCard.jsx";

export default function UserList({ users, setCurrentUser }) {
    

    const userArray = users.map(userObj => {
        return <UserCard key={userObj.userId} userData={userObj} setCurrentUser={setCurrentUser}/>
    })
    
    return (
        <div className="user-list">
            <h3>Accounts:</h3>
            {userArray}
        </div>
    )
}
