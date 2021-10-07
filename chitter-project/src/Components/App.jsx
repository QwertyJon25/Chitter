import React, {useState, useEffect} from "react"
import NavMenu from "./NavMenu";
import Main from "./Main"
import UserList from "./UserList";

function App() {
  //State Variables for JSON data:
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  //State Variable for current user:
  //const [currentUser, setCurrentUser] = useState({})

  //State Variable for a new user:
  const [newUser, setNewUser] = useState({
    userId: 5,
    username:"",
    profilePic:"",
    bio:""
  });

  //Request for JSON data:
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
  
  
  //Logic for the sign up form:
  function handleChange(event) {
    const key = event.target.id;
    const value = event.target.value;
    
    setNewUser({ 
      ...newUser, 
      [key]: value
    });
  }

  function handleSubmit(event){
    event.preventDefault();
    console.log(newUser);
    addUser(newUser);
  }

  function addUser(newUser){
    fetch("http://localhost:6001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser)
    })
    .then((res) => res.json())
    .then((newUserData) => {
      setUsers([...users, newUserData])
    })
  }



  return (
    <div className="App">
    <NavMenu 
      newUser={newUser}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
    />
    <Main 
      users={users} 
      posts={posts} 
    />
    <UserList users={users} />
    </div>
  );
}

export default App;