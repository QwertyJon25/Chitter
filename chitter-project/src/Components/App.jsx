import React, {useState, useEffect} from "react"
import NavMenu from "./NavMenu";
import Main from "./Main"
import UserList from "./UserList";

function App() {
  //State Variables for JSON data
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  //State Variable for Current User
  const [currentUser, setCurrentUser] = useState({})

  //State Variable for Form data
  const [formData, setFormData] = useState({
    username:"",
    profilePic:"",
    bio:""
  });




  useEffect(() => {
    fetch("http://localhost:6001/users")
    .then((res) => res.json())
    .then((userData) => setUsers(userData));
  }, [])

  useEffect(() => {
    fetch("http://localhost:6001/posts")
    .then((res) => res.json())
    .then((postData) => setPosts(postData));
  }, [])

  return (
    <div className="App">
    <NavMenu currentUser={currentUser} setFormData={setFormData} formData={formData} users={users} setUsers={setUsers} />
    <Main users={users} posts={posts} />
    <UserList users={users} />
    </div>
  );
}

export default App;

// function addPoem(newPoem){
//   fetch("http://localhost:8004/poems", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(newPoem)
//   })
//   .then((res) => res.json())
//   .then((newPoemData) => setPoems([...poems, newPoemData]))
// }