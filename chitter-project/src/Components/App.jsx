import React, {useState, useEffect} from "react"
import './App.css';
import Main from "../Main.jsx"
import NavMenu from ">/NavMenu.jsx";
import UserList from "../UserList.jsx";

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
    fetch("")
    .then((res) => res.json())
    .then((userData) => setPoems(userData));

    fetch("")
    .then((res) => res.json())
    .then((postData) => setPoems(postData));
  }, [])

  return (
    <div className="App">
    <NavMenu currentUser={currentUser} setFormData={setFormData}/>
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