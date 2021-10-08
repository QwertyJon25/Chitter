import React, {useState, useEffect} from "react"
import { Route, Switch } from "react-router-dom";
import NavMenu from "./NavMenu";
import Main from "./Main"
import UserList from "./UserList";



function App() {
  //State Variables for JSON data:
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  //State Variables for the sign-in form:
  // const [username,setUsername] = useState("");
  // const [password, setPassword] = useState("");

  //State Variable for sign-in user: 
  const [signedInUser, setSignedInUser] = useState([]);

  
  const [currentUser, setCurrentUser] = useState(-1)

  //State Variable for a new post:
  // const [postObj, setPostObj] = useState({
  //   content: "",
  //   likes: 0
  // })

  //State Variable for a new user:
  const [userObj, setUserObj] = useState({
    userId: 0,
    username:"",
    password:"",
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

  useEffect(() => {
    console.log('cu',signedInUser);
    console.log('uo',userObj);
  });
  
  //Change handler for forms:
  function handleChange(event) {
    const key = event.target.id;
    const value = event.target.value;
    
    setUserObj({ 
      ...userObj, 
      [key]: value
    });
  }


  //Logic for the sign-up form:
  function handleSignUpSubmit(event){
    event.preventDefault();

    userObj.userId = users.length + 1;
    setUserObj({ ...userObj });
    
    addUser(userObj);
    
    const emptyUser = {
      username: "",
      password: "",
      profilePic: "",
      bio: "",
    }
    setUserObj({ ...emptyUser });
  }

  function addUser(userObj){
    fetch("http://localhost:6001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObj)
    })
    .then((res) => res.json())
    .then((userObjData) => {
      setUsers([...users, userObjData])
    })
  }


  //Logic for the sign-in form:
  function handleSignInSubmit(event){
    event.preventDefault();
    signIn(userObj);
    const emptyUser = {
      username: "",
      password: "",
      profilePic: "",
      bio: "",
    }
    setUserObj({ ...emptyUser });
    console.log(userObj);
  }

  function signIn(userObj){
    fetch("http://localhost:6001/users")
    .then((res) => res.json())
    .then((userData) => {
      const userFound = userData.find(user => {
        if(user.username === userObj.username && user.password === userObj.password){
          return true;
        }else{
          return false;
        }
      });
      setSignedInUser(userFound);
    })
  }


  //Logic for post form:
  //  function handlePostChange(event){
  //   const key = event.target.id;
  //   const value = event.target.value;
  //   setPostObj({
  //     ...postObj,
  //     [key]: value
  //   });
  // }
  // function handlePostSubmit(event){
  //   event.preventDefault();
  //   addPost(postObj);
  //   const emptyPost = {
  //     content: "",
  //     likes: 0
  //   }
  //   setPostObj({ ...emptyPost });
  // }
  // function addPost(postObj){
  //   fetch("http://localhost:6001/users", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(postObj)
  //   })
  //   .then((res) => res.json())
  //   .then((postObjData) => {
  //     setUsers([...posts, postObjData])
  //   })
  // }


  return (
    <div className="App">
      <Switch>
        <Route exact path="/navmenu">
    <NavMenu
      userObj={userObj}
      handleChange={handleChange}
      handleSignUpSubmit={handleSignUpSubmit}
      handleSignInSubmit={handleSignInSubmit}
    />
    </Route>
    <Route exact path="/">
       <NavMenu
      userObj={userObj}
      handleChange={handleChange}
      handleSignUpSubmit={handleSignUpSubmit}
      handleSignInSubmit={handleSignInSubmit}
    />
    <Main 
      users={users} 
      posts={posts} 
      setPosts={setPosts}
      setCurrentUser={setCurrentUser} 
      currentUser={currentUser}
      signedInUser={signedInUser}
      // handlePostChange={handlePostChange}
      // handlePostSubmit={handlePostSubmit}
      // postObj={postObj}
    />
    <UserList users={users}
      currentUser={currentUser}
      setCurrentUser={setCurrentUser}
    />
    </Route>
    <Route exact path="/userlist">
    <UserList users={users}
      currentUser={currentUser}
      setCurrentUser={setCurrentUser}
    />
    </Route>
    <Route path="*">
            <h1>404 not found</h1>
        </Route>
    </Switch>
    </div>
  );
}

export default App;