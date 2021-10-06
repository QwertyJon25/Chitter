import React from 'react'
import UserCard from "./UserCard.jsx";

export default function UserList({ users }) {


    
    return (
        <div>
            <ul className="cards">{ users.map(userObj => <UserCard 
            key={userObj}
            userData={userObj}
            />)}
            </ul>
        </div>
    )
}
