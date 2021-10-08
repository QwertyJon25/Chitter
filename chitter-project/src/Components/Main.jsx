import React from 'react'
import MessageCard from "./MessageCard.jsx";
import UserInfo from "./UserInfo";
// import NewPostForm from "./NewPostForm"

export default function Main({ users, posts, setPosts, userArray, currentUser, setCurrentUser, signedInUser, handlePostChange, handlePostSubmit, postObj }) {


const deletePost = (clickedPost) => {
    const newPostArray = posts.filter((oldPostObj) => oldPostObj.id !== clickedPost.id)
    setPosts(newPostArray)
  }



    let postsCopy = [];
if (currentUser !== -1) {
    postsCopy = posts.filter(post => post.userId === currentUser.userId);
}

const postsArray = postsCopy.map((postObj, i) => {
    return (
        <MessageCard
        key={i}
        user={users.find(user=> user.userId === postObj.userId )}
        postData={postObj} 
        deletePost={deletePost}
        />
    )
})
    return (
       <div>
            <button onClick={() => {setCurrentUser(-1)}}>Clear Current User</button>
            <UserInfo currentUser={currentUser} messages={postsArray} />
            
        </div>
    )
}

//<UserInfo />

{/* {signedInUser !== null && currentUser.userId === signedInUser.userId ?
                <NewPostForm
                    postObj={postObj}
                    handlePostChange={handlePostChange}
                    handlePostSubmit={handlePostSubmit}
                />
                : null
            } */}